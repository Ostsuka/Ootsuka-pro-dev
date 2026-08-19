'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Server, Cloud, Sparkles, Terminal, GitBranch, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
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
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 70);
    } else if (!deleting && charIdx > current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 34);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx]);

  return (
    <span style={{ color: '#00d4ff' }}>
      {display}
      <span className="animate-blink" style={{ borderRight: '2px solid #00d4ff', marginLeft: '2px' }}>&nbsp;</span>
    </span>
  );
}

/* ── Floating badges ─────────────────────────────── */
const BADGES = [
  { label: 'React',       color: '#61dafb', x: '5%',  y: '20%', delay: 0.0 },
  { label: 'TypeScript',  color: '#3178c6', x: '82%', y: '18%', delay: 0.6 },
  { label: 'Java',        color: '#f89820', x: '3%',  y: '62%', delay: 1.1 },
  { label: 'AWS',         color: '#ff9900', x: '86%', y: '60%', delay: 1.6 },
  { label: 'NestJS',      color: '#e0234e', x: '76%', y: '38%', delay: 0.9 },
  { label: 'Docker',      color: '#2496ed', x: '11%', y: '42%', delay: 1.4 },
  { label: 'Laravel',     color: '#ff2d20', x: '46%', y: '88%', delay: 1.9 },
  { label: 'PostgreSQL',  color: '#336791', x: '20%', y: '80%', delay: 2.3 },
];

/* ── Value propositions ─────────────────────────── */
const VALUE_PROPS = [
  {
    icon: <TrendingUp size={15} />,
    text: '売上・問い合わせにつながるシステムを設計・構築します',
    color: '#10b981',
  },
  {
    icon: <Zap size={15} />,
    text: '業務プロセスの非効率を、テクノロジーで解決します',
    color: '#00d4ff',
  },
  {
    icon: <Users size={15} />,
    text: '要件定義から運用まで一人でフルサイクル対応可能です',
    color: '#a78bfa',
  },
];

/* ── Metrics ────────────────────────────────────── */
const METRICS = [
  { icon: <Code2 size={14} />,       value: '5+',  label: '年の実務経験',    color: '#00d4ff' },
  { icon: <TrendingUp size={14} />,  value: '30%↑', label: '業務効率化実績',  color: '#10b981' },
  { icon: <CheckCircle2 size={14} />, value: '20%↓', label: 'エラー率削減',   color: '#a78bfa' },
  { icon: <Server size={14} />,      value: '4社',  label: '継続取引実績',    color: '#f59e0b' },
];

/* ── Code snippet lines ─────────────────────────── */
const CODE_LINES = [
  { text: 'const solution = {',           color: '#e2e8f0' },
  { text: '  problem: "あなたの課題",',   color: '#94a3b8' },
  { text: '  engineer: "URAN",',          color: '#94a3b8' },
  { text: '  result: "業務効率 +30%",',  color: '#10b981' },
  { text: '  available: true,',           color: '#00d4ff' },
  { text: '};',                           color: '#e2e8f0' },
];

/* ── Component ──────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const [mounted, setMounted] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const timer = setInterval(() => setActiveValue(v => (v + 1) % VALUE_PROPS.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #040810 0%, #070c1a 45%, #06091a 100%)' }}
    >
      {/* ── Background layers ── */}
      <ParticleNetwork />

      {/* Radial center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 65% at 50% 40%, rgba(0,212,255,0.055) 0%, rgba(124,58,237,0.035) 45%, transparent 72%)',
      }} />

      {/* Top-right orb */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
      }} />

      {/* Bottom-left orb */}
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)',
      }} />

      {/* Horizontal scan line */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-scan absolute left-0 right-0 h-px" style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 20%, rgba(0,212,255,0.5) 50%, rgba(0,212,255,0.3) 80%, transparent 100%)',
          }} />
        </div>
      )}

      {/* ── Floating badges — desktop only ── */}
      {BADGES.map(b => (
        <motion.div
          key={b.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold select-none"
          style={{
            left: b.x, top: b.y,
            background: `${b.color}0e`,
            border: `1px solid ${b.color}32`,
            color: b.color,
            zIndex: 5,
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: b.delay + 0.8, duration: 0.5 },
            scale:   { delay: b.delay + 0.8, duration: 0.5 },
            y: { duration: 3.5 + b.delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: b.color, boxShadow: `0 0 6px ${b.color}` }} />
          {b.label}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
      >
        {/* ── Avatar / profile ring ── */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mb-8 w-32 h-32"
        >
          {/* Outermost pulse ring */}
          <motion.div
            className="absolute rounded-full"
            style={{ inset: '-18px', border: '1px solid rgba(0,212,255,0.12)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.12, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ inset: '-8px', border: '1px solid rgba(0,212,255,0.22)' }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ inset: '-4px', border: '1.5px dashed rgba(0,212,255,0.30)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ inset: '8px', border: '1px dashed rgba(124,58,237,0.25)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          {/* Orbiting dot */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%', left: '50%',
              width: '12px', height: '12px',
              marginTop: '-6px', marginLeft: '-6px',
              animation: 'orbit-dot 5.5s linear infinite',
            }}
          >
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981, 0 0 20px rgba(16,185,129,0.5)',
            }} />
          </div>
          {/* Avatar face */}
          <div
            className="absolute inset-3 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.14) 100%)',
              border: '2px solid rgba(0,212,255,0.50)',
              boxShadow: '0 0 50px rgba(0,212,255,0.22), inset 0 0 30px rgba(0,212,255,0.06)',
            }}
          >
            <span className="text-4xl font-black" style={{
              background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>U</span>
          </div>
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="section-label justify-center mb-4"
        >
          PORTFOLIO&nbsp;&nbsp;／&nbsp;&nbsp;ポートフォリオ
        </motion.p>

        {/* ── Value proposition banner (rotates) ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mx-auto mb-5 max-w-xl"
        >
          <div
            className="rounded-2xl px-5 py-3 flex items-center gap-3 justify-center"
            style={{
              background: 'rgba(0,212,255,0.05)',
              border: '1px solid rgba(0,212,255,0.15)',
              backdropFilter: 'blur(12px)',
              minHeight: '48px',
            }}
          >
            {VALUE_PROPS.map((vp, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5"
                style={{
                  display: activeValue === i ? 'flex' : 'none',
                  color: vp.color,
                }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {vp.icon}
                <span className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{vp.text}</span>
              </motion.div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {VALUE_PROPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveValue(i)}
                className="rounded-full transition-all"
                style={{
                  width: activeValue === i ? '20px' : '6px',
                  height: '6px',
                  background: activeValue === i ? '#00d4ff' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.75 }}
          className="font-black tracking-tight leading-none mb-2"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 7.5rem)', color: '#f0f6ff' }}
        >
          URAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-light mb-4 tracking-[0.35em]"
          style={{ color: '#3d5470', fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          乌兰　／　ウラン
        </motion.p>

        {/* Typewriter row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-9 flex items-center justify-center mb-8"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 500 }}
        >
          <TypeWriter />
        </motion.div>

        {/* ── Metrics bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-2xl mx-auto"
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.08, duration: 0.45 }}
              className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl"
              style={{
                background: `${m.color}09`,
                border: `1px solid ${m.color}22`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ color: m.color }}>{m.icon}</span>
              <div className="text-lg font-black leading-none" style={{ color: '#f0f6ff' }}>{m.value}</div>
              <div className="text-[10px] text-center leading-4" style={{ color: '#3d5470', fontFamily: "'JetBrains Mono', monospace" }}>{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            <Terminal size={17} />
            まずは無料相談する
          </a>
          <a href="#projects" className="btn-outline text-base px-8 py-4">
            <GitBranch size={17} />
            実績を見る
          </a>
        </motion.div>

        {/* Trust signals row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-10"
        >
          {[
            { text: '即日対応可', color: '#10b981' },
            { text: '日本語で仕様確認', color: '#00d4ff' },
            { text: '要件定義〜運用まで一貫', color: '#a78bfa' },
            { text: '現在受付中', color: '#f59e0b' },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: t.color }}>
              <CheckCircle2 size={13} />
              {t.text}
            </div>
          ))}
        </motion.div>

        {/* Code snippet card — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block mx-auto text-left rounded-2xl overflow-hidden"
          style={{
            maxWidth: '380px',
            background: 'rgba(7,12,24,0.85)',
            border: '1px solid rgba(0,212,255,0.14)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
            <div className="flex-1" />
            <span className="text-[10px]" style={{ color: '#1e293b', fontFamily: "'JetBrains Mono', monospace" }}>solution.ts</span>
          </div>
          <div className="px-5 py-4 space-y-0.5">
            {CODE_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                className="text-xs leading-6"
                style={{ color: line.color, fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span style={{ color: '#1e293b', marginRight: '1rem', userSelect: 'none' }}>{i + 1}</span>
                {line.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ color: '#1e293b' }}
      >
        <span className="text-[9px] tracking-[0.5em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
