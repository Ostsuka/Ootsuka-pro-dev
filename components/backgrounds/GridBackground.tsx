'use client';
import { useEffect, useRef } from 'react';

interface Props {
  /** アクセントカラー（デフォルト: #00c8f0） */
  accent?: string;
  /** セカンダリカラー */
  accent2?: string;
}

/**
 * About / Projects 用: パースペクティブグリッド + グロウノード
 * SVG の静的グリッドと Canvas の流れるノードを重ねる
 */
export default function GridBackground({ accent = '#00c8f0', accent2 = '#8b5cf6' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    interface Node { x: number; y: number; t: number; speed: number; color: string; }
    const nodes: Node[] = [];
    const COLS  = 6;
    const ROWS  = 4;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes.length  = 0;
      for (let c = 0; c < COLS; c++) {
        for (let r = 0; r < ROWS; r++) {
          nodes.push({
            x: (canvas.width  / (COLS - 1)) * c,
            y: (canvas.height / (ROWS - 1)) * r,
            t:     Math.random() * Math.PI * 2,
            speed: 0.005 + Math.random() * 0.008,
            color: Math.random() > 0.5 ? accent : accent2,
          });
        }
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.t += n.speed;
        const pulse = (Math.sin(n.t) + 1) / 2;
        const r     = 2 + pulse * 3;
        const alpha = 0.2 + pulse * 0.4;

        // glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        grd.addColorStop(0, n.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [accent, accent2]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static SVG grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.055 }}
      >
        <defs>
          <pattern id={`g-sm-${accent}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={accent} strokeWidth="0.5" />
          </pattern>
          <pattern id={`g-lg-${accent}`} width="240" height="240" patternUnits="userSpaceOnUse">
            <rect width="240" height="240" fill={`url(#g-sm-${accent})`} />
            <path d="M 240 0 L 0 0 0 240" fill="none" stroke={accent} strokeWidth="1" />
          </pattern>
          <radialGradient id={`fade-${accent}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="white"      stopOpacity="1" />
            <stop offset="100%" stopColor="white"      stopOpacity="0" />
          </radialGradient>
          <mask id={`mask-${accent}`}>
            <rect width="100%" height="100%" fill={`url(#fade-${accent})`} />
          </mask>
        </defs>
        <rect
          width="100%" height="100%"
          fill={`url(#g-lg-${accent})`}
          mask={`url(#mask-${accent})`}
        />
      </svg>

      {/* Animated glow nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Center radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${accent}0d 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
