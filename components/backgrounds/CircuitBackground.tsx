'use client';
import { useEffect, useRef } from 'react';

/**
 * Skills / TechStack 用: ランダム生成される回路基板パターン
 * Canvas で動的にトレースを描き、データが流れるアニメーション
 */
export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // ─── Trace generation ───────────────────────────────────────────
    interface Segment { x1: number; y1: number; x2: number; y2: number; color: string; }
    interface TraceRunner { seg: Segment; t: number; speed: number; }

    const CELL = 60;
    const COLORS = ['#00c8f0', '#8b5cf6', '#10b981'];
    const segments: Segment[] = [];
    const runners:  TraceRunner[] = [];

    const buildGrid = () => {
      segments.length = 0;
      runners.length  = 0;
      const cols = Math.ceil(canvas.width  / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;

      // horizontal
      for (let r = 0; r < rows; r++) {
        let c = 0;
        while (c < cols - 1) {
          const len = 1 + Math.floor(Math.random() * 4);
          const end = Math.min(c + len, cols - 1);
          if (Math.random() > 0.45) {
            segments.push({
              x1: c    * CELL, y1: r * CELL,
              x2: end  * CELL, y2: r * CELL,
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });
          }
          c = end + Math.floor(Math.random() * 2);
        }
      }
      // vertical
      for (let c = 0; c < cols; c++) {
        let r = 0;
        while (r < rows - 1) {
          const len = 1 + Math.floor(Math.random() * 3);
          const end = Math.min(r + len, rows - 1);
          if (Math.random() > 0.55) {
            segments.push({
              x1: c * CELL, y1: r    * CELL,
              x2: c * CELL, y2: end  * CELL,
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });
          }
          r = end + Math.floor(Math.random() * 2);
        }
      }

      // spawn runners on random segments
      for (let i = 0; i < 12; i++) {
        const seg = segments[Math.floor(Math.random() * segments.length)];
        if (seg) runners.push({ seg, t: Math.random(), speed: 0.003 + Math.random() * 0.005 });
      }
    };

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw static traces
      ctx.lineWidth = 0.8;
      for (const s of segments) {
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
        ctx.strokeStyle = s.color + '22';
        ctx.stroke();

        // junction dot
        ctx.beginPath();
        ctx.arc(s.x1, s.y1, 2, 0, Math.PI * 2);
        ctx.fillStyle = s.color + '44';
        ctx.fill();
      }

      // animate runners
      for (const run of runners) {
        run.t += run.speed;
        if (run.t > 1) {
          run.t   = 0;
          run.seg = segments[Math.floor(Math.random() * segments.length)] ?? run.seg;
        }
        const { x1, y1, x2, y2, color } = run.seg;
        const px = x1 + (x2 - x1) * run.t;
        const py = y1 + (y2 - y1) * run.t;

        const grd = ctx.createRadialGradient(px, py, 0, px, py, 14);
        grd.addColorStop(0, color + 'cc');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.55 }}
      />
      {/* Dark vignette at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,8,16,0.6) 100%)',
        }}
      />
    </div>
  );
}
