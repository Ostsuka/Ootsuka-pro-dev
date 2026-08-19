'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  alpha: number;
}

/**
 * Hero 用: インタラクティブなパーティクルネットワーク
 * マウスに反応し、近い粒子同士を線で結ぶ
 */
export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -9999, y: -9999 };
    const COUNT  = 90;
    const MAX_D  = 150;
    const MOUSE_D = 180;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const onResize = () => resize();
    const onMouse  = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse = { x: -9999, y: -9999 }; };

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouse);
    canvas.addEventListener('mouseleave', onLeave);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // update + draw dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MOUSE_D) {
          const force = (MOUSE_D - md) / MOUSE_D * 0.6;
          p.vx += (mdx / md) * force * 0.04;
          p.vy += (mdy / md) * force * 0.04;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,240,${p.alpha})`;
        ctx.fill();
      }

      // draw edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_D) {
            const alpha = (1 - dist / MAX_D) * 0.3;
            const grad  = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y,
            );
            grad.addColorStop(0, `rgba(0,200,240,${alpha})`);
            grad.addColorStop(1, `rgba(139,92,246,${alpha * 0.6})`);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth   = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouse);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
