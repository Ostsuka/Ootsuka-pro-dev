'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Server, Cloud, Sparkles } from 'lucide-react';
import ParticleNetwork from './backgrounds/ParticleNetwork';

/* ── Typewriter ─────────────────────────────────── */
const ROLES = [
  'Full-Stack Engineer',
  'React / TypeScript',
  'Java Spring Boot',
  'PHP Laravel',
  'AWS & Docker',
  'フルスタックエンジニア',
];

function TypeWriter() {
  const [display, setDisplay]   = useState('');
  const [idx, setIdx]           = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 68);
    } else if (!deleting && charIdx > current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 32);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx]);

  return (
    <span style={{ color: '#00c8f0' }}>
      {display}
      <span className="animate-blink" style={{ borderRight: '2px solid #00c8f0', marginLeft: '1px' }}>&nbsp;</span>
    </span>
  );
}

/* ── Floating tech badges ───────────────────────── */
const BADGES = [
  { label: 'React',       color: '#61dafb', x: '7%',  y: '22%', d: 0   },
  { label: 'TypeScript',  color: '#3178c6', x: '84%', y: '20%', d: 0.5 },
  { label: 'Java',        color: '#f89820', x: '5%',  y: '66%', d: 1.0 },
  { label: 'AWS',         color: '#ff9900', x: '87%', y: '63%', d: 1.5 },
  { label: 'NestJS',      color: '#e0234e', x: '78%', y: '42%', d: 0.8 },
  { label: 'Docker',      color: '#2496ed', x: '14%', y: '44%', d: 1.3 },
  { label: 'Laravel',     color: '#ff2d20', x: '48%', y: '86%', d: 1.8 },
  { label: 'PostgreSQL',  color: '#336791', x: '22%', y: '78%', d: 2.2 },
];

/* ── Stats ──────────────────────────────────────── */
const STATS = [
  { icon: <Code2 size={15} />, value: '5+',        label: '年の開発経験' },
  { icon: <Server size={15} />, value: '10+',      label: '使用技術・FW'  },
  { icon: <Cloud size={15} />,  value: 'AWS',      label: 'クラウド運用'  },
  { icon: <Sparkles size={15} />, value: '30%↑',  label: '業務改善実績'  },
];

/* ── Component ──────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #050810 0%, #08101f 50%, #07091a 100%)' }}
    >
      {/* Particle canvas */}
      <ParticleNetwork />

      {/* Deep radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(0,200,240,0.06) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Top-right accent orb */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)' }}
      />
      {/* Bottom-left accent orb */}
      <div
        className="absolute -bottom-40 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,240,0.06) 0%, transparent 65%)' }}
      />

      {/* Floating badges — desktop only */}
      {BADGES.map(b => (
        <motion.div
          key={b.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold select-none"
          style={{
            left: b.x, top: b.y,
            background: `${b.color}12`,
            border: `1px solid ${b.color}35`,
            color: b.color,
            zIndex: 5,
          }}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3.5 + b.d, repeat: Infinity, ease: 'easeInOut', delay: b.d }}
        >
          {b.label}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Avatar ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mb-10 w-32 h-32"
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute inset-[-8px] rounded-full"
            style={{ border: '1px solid rgba(0,200,240,0.15)' }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Spinning dashed ring */}
          <motion.div
            className="absolute inset-[-2px] rounded-full"
            style={{ border: '1.5px dashed rgba(0,200,240,0.35)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3.5 h-3.5 rounded-full"
            style={{
              top: '50%', left: '50%',
              marginTop: '-7px', marginLeft: '-7px',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981',
              transformOrigin: '7px 7px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            // use CSS orbit: set translateX inside rotate
          >
            <style>{`
              @keyframes orbit-dot {
                from { transform: rotate(0deg) translateX(62px) rotate(0deg); }
                to   { transform: rotate(360deg) translateX(62px) rotate(-360deg); }
              }
            `}</style>
          </motion.div>
          {/* Orbit wrapper hack */}
          <div className="absolute inset-0 rounded-full" style={{ animation: 'none' }}>
            <div
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '14px', height: '14px',
                marginTop: '-7px', marginLeft: '-7px',
                animation: 'orbit-dot 5s linear infinite',
              }}
            >
              <div
                style={{
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }}
              />
            </div>
          </div>
          {/* Avatar face */}
          <div
            className="absolute inset-3 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,200,240,0.12), rgba(139,92,246,0.12))',
              border: '2px solid rgba(0,200,240,0.45)',
              boxShadow: '0 0 40px rgba(0,200,240,0.2), inset 0 0 20px rgba(0,200,240,0.05)',
            }}
          >
            <span
              className="text-4xl font-black"
              style={{
                background: 'linear-gradient(135deg, #00c8f0, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              U
            </span>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="section-label justify-center mb-4"
          style={{ fontSize: '0.68rem' }}
        >
          PORTFOLIO — ポートフォリオ
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-black mb-2 tracking-tight"
          style={{
            fontSize: 'clamp(4rem, 12vw, 7.5rem)',
            lineHeight: 1,
            color: '#f1f5f9',
          }}
        >
          URAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-sm font-light mb-6 tracking-widest"
          style={{ color: '#475569' }}
        >
          乌兰 / ウラン
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-xl md:text-2xl font-mono font-medium mb-10 h-8"
        >
          <TypeWriter />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {STATS.map(s => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{ color: '#00c8f0' }}>{s.icon}</span>
              <div className="text-left">
                <div className="text-sm font-bold leading-tight" style={{ color: '#f1f5f9' }}>{s.value}</div>
                <div className="text-[11px] leading-tight" style={{ color: '#475569' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            お問い合わせ
          </a>
          <a href="#experience" className="btn-outline">
            職歴を見る
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ color: '#334155' }}
      >
        <span className="text-[10px] font-mono tracking-[0.4em]">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
