'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Server, Cloud } from 'lucide-react';

/* Floating badge data */
const BADGES = [
  { icon: <Code2 size={13} />,   label: 'React / Next.js',    color: '#3a7bd5', delay: 0.9,  x: '8%',  y: '22%' },
  { icon: <Server size={13} />,  label: 'Spring Boot',         color: '#e86c5d', delay: 1.1,  x: '82%', y: '18%' },
  { icon: <Cloud size={13} />,   label: 'AWS / Docker',        color: '#e8a949', delay: 1.25, x: '78%', y: '72%' },
  { icon: <Sparkles size={13} />,label: '5年以上の実務経験',    color: '#8b5cf6', delay: 1.4,  x: '6%',  y: '68%' },
];

const STATS = [
  { value: '5+',   label: '年の経験',        color: '#2bb5a0' },
  { value: '30+',  label: 'プロジェクト',     color: '#3a7bd5' },
  { value: '99.9%',label: '稼働率',          color: '#8b5cf6' },
  { value: '3言語', label: '日中英対応',      color: '#e8a949' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      ref={ref}
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── Parallax background — Software Engineer profile ── */}
      <motion.div
        className="section-bg"
        style={{
          backgroundImage: "url('/hero-profile.jpg')",
          backgroundPosition: 'center center',
          y: bgY,
          scale: 1.08,
        }}
      />

      {/* ── Dark overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(160deg, rgba(10,8,4,0.68) 0%, rgba(10,8,4,0.50) 45%, rgba(10,8,4,0.72) 100%)',
      }} />

      {/* ── Teal accent glow (bottom-left) ── */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(43,181,160,0.18) 0%, transparent 70%)',
        zIndex: 1, pointerEvents: 'none',
        filter: 'blur(2px)',
      }} />
      {/* ── Blue accent glow (top-right) ── */}
      <div style={{
        position: 'absolute', top: '-5%', right: '-5%',
        width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,123,213,0.15) 0%, transparent 70%)',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* ── Bottom page fade ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to top, var(--bg), transparent)',
        zIndex: 2,
      }} />

      {/* ── Floating badges (desktop only) ── */}
      {mounted && BADGES.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: b.delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: b.x, top: b.y,
            zIndex: 3,
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'rgba(20,16,8,0.72)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${b.color}35`,
            borderRadius: '999px',
            padding: '0.35rem 0.85rem',
            color: b.color,
            fontSize: '0.68rem',
            fontWeight: 600,
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            boxShadow: `0 4px 16px rgba(0,0,0,0.25)`,
            whiteSpace: 'nowrap',
          }}
          className="hidden lg:flex animate-float"
        >
          {b.icon}
          {b.label}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <motion.div
        className="section-inner"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(6rem, 10vw, 9rem) clamp(1.25rem, 4vw, 3rem) 5rem',
          y: textY,
          opacity,
        }}
      >
        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(43,181,160,0.18)',
            border: '1px solid rgba(43,181,160,0.40)',
            borderRadius: '999px',
            padding: '0.35rem 1.1rem',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34c78a', display: 'inline-block', animation: 'pulse-dot 1.5s ease-out infinite' }} />
          <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', letterSpacing: '0.25em', color: '#3fd0bb', fontWeight: 600 }}>
            AVAILABLE FOR PROJECTS
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.8rem, 8.5vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '0.5rem',
            fontFamily: "'Noto Sans JP', 'Inter', sans-serif",
          }}
        >
          URAN
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          style={{
            height: '2px',
            width: 'clamp(160px, 30vw, 320px)',
            background: 'linear-gradient(90deg, var(--teal), var(--blue))',
            margin: '0.75rem auto 1.5rem',
            borderRadius: '999px',
          }}
        />

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.88)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            marginBottom: '0.6rem',
          }}
        >
          フルスタックエンジニア
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
            color: 'rgba(255,255,255,0.58)',
            letterSpacing: '0.12em',
            marginBottom: '2.5rem',
            fontFamily: 'monospace',
          }}
        >
          React · TypeScript · Java · PHP · AWS
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}
        >
          <motion.a
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ fontSize: '0.88rem', padding: '0.78rem 2rem' }}
          >
            実績を見る
          </motion.a>
          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.78rem 2rem', borderRadius: '999px',
              fontSize: '0.88rem', fontWeight: 600,
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(255,255,255,0.30)',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
          >
            お問い合わせ
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)',
            flexWrap: 'wrap', justifyContent: 'center',
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.08 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                fontWeight: 900,
                color: s.color,
                lineHeight: 1,
                marginBottom: '0.3rem',
                textShadow: `0 0 20px ${s.color}55`,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.52)', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{
            position: 'absolute', bottom: '2.5rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ fontSize: '0.56rem', letterSpacing: '0.40em', color: 'rgba(255,255,255,0.50)', fontFamily: 'monospace' }}
          >
            SCROLL
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
