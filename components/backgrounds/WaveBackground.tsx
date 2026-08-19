'use client';
import { useEffect, useRef } from 'react';

/**
 * Experience / Contact 用: 流体波形アニメーション
 * Canvas で複数の sin 波を重ね、深みのある流れを演出
 */
export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    interface Wave {
      amplitude: number;
      frequency: number;
      speed: number;
      phase: number;
      color: string;
      yBase: number; // 0-1 relative to height
    }

    const waves: Wave[] = [
      { amplitude: 40, frequency: 0.008, speed: 0.012, phase: 0,    color: '#00c8f0', yBase: 0.55 },
      { amplitude: 30, frequency: 0.010, speed: 0.018, phase: 1.2,  color: '#8b5cf6', yBase: 0.65 },
      { amplitude: 50, frequency: 0.006, speed: 0.009, phase: 2.5,  color: '#10b981', yBase: 0.75 },
      { amplitude: 25, frequency: 0.013, speed: 0.022, phase: 0.7,  color: '#00c8f0', yBase: 0.85 },
    ];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      for (const wave of waves) {
        const yBase = canvas.height * wave.yBase;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yBase
            + Math.sin(x * wave.frequency + t * wave.speed + wave.phase) * wave.amplitude
            + Math.sin(x * wave.frequency * 1.6 + t * wave.speed * 0.7 + wave.phase + 1) * (wave.amplitude * 0.4);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - wave.amplitude, 0, canvas.height);
        grad.addColorStop(0, wave.color + '18');
        grad.addColorStop(0.5, wave.color + '0a');
        grad.addColorStop(1, wave.color + '04');
        ctx.fillStyle = grad;
        ctx.fill();

        // crest line
        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yBase
            + Math.sin(x * wave.frequency + t * wave.speed + wave.phase) * wave.amplitude
            + Math.sin(x * wave.frequency * 1.6 + t * wave.speed * 0.7 + wave.phase + 1) * (wave.amplitude * 0.4);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color + '30';
        ctx.lineWidth   = 1.2;
        ctx.stroke();
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
      />
      {/* Floating glow orbs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -left-16 w-[32rem] h-[32rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,240,0.08) 0%, transparent 70%)' }}
      />
    </div>
  );
}
