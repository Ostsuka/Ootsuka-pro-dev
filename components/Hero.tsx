'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowDown, Mail, GitBranch, CheckCircle2,
  TrendingUp, Users, Zap, Star, Shield, Clock,
} from 'lucide-react';

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
    <span style={{ color: '#0284c7' }}>
      {display}
      <span className="animate-blink" style={{ borderRight: '2px solid #0284c7', marginLeft: '2px' }}>&nbsp;</span>
    </span>
  );
}

/* ── Metrics ────────────────────────────────────── */
const METRICS = [
  { value: '5+',   label: '年の実務経験',   sub: 'Years Exp.',   color: '#0284c7' },
  { value: '30%↑', label: '業務効率化実績', sub: 'Productivity',  color: '#059669' },
  { value: '20%↓', label: 'エラー率削減',   sub: 'Error Reduce', color: '#7c3aed' },
  { value: '4社',  label: '継続取引実績',   sub: 'Long-term',    color: '#d97706' },
];

/* ── Trust badges ───────────────────────────────── */
const TRUST_BADGES = [
  { text: '即日対応可',             color: '#059669', icon: <CheckCircle2 size={13} /> },
  { text: '日本語で仕様確認',       color: '#0284c7', icon: <CheckCircle2 size={13} /> },
  { text: '要件定義〜運用まで一貫', color: '#7c3aed', icon: <CheckCircle2 size={13} /> },
  { text: '現在受付中',             color: '#d97706', icon: <CheckCircle2 size={13} /> },
];

/* ── Social proof ───────────────────────────────── */
const SOCIAL_PROOF = [
  { icon: <Star size={13} fill="#d97706" style={{ color: '#d97706' }} />, text: '評価 5.0 / 5.0' },
  { icon: <Shield size={13} style={{ color: '#059669' }} />,              text: '100% リピート意向' },
  { icon: <Clock size={13} style={{ color: '#0284c7' }} />,               text: '24h 以内返信' },
];

/* ── Value props ─────────────────────────────────── */
const VALUE_PROPS = [
  { icon: <TrendingUp size={15} />, text: '売上・問い合わせにつながるシステムを設計・構築します', color: '#059669' },
  { icon: <Zap size={15} />,        text: '業務プロセスの非効率を、テクノロジーで解決します',    color: '#0284c7' },
  { icon: <Users size={15} />,      text: '要件定義から運用まで一人でフルサイクル対応可能です',  color: '#7c3aed' },
];

/* ── Component ──────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [mounted, setMounted]       = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveValue(v => (v + 1) % VALUE_PROPS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 35%, #f8fafc 65%, #eff6ff 100%)',
      }}
    >
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(2,132,199,0.08) 0%, transparent 65%)',
      }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)',
      }} />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 65%)',
      }} />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16"
      >
        {/* ── Two-column layout: photo left, text right ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-5"
          >
            {/* Photo with ring */}
            <div className="relative" style={{ width: '200px', height: '200px' }}>
              {/* Outer ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ inset: '-8px', border: '2px solid rgba(2,132,199,0.20)' }}
                animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Rotating dashed ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ inset: '-4px', border: '1.5px dashed rgba(2,132,199,0.30)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              />
              {/* Photo */}
              <div
                className="absolute rounded-full overflow-hidden"
                style={{
                  inset: '0',
                  border: '3px solid rgba(2,132,199,0.35)',
                  boxShadow: '0 8px 32px rgba(2,132,199,0.18), 0 2px 8px rgba(15,23,42,0.10)',
                }}
              >
                <Image
                  src="/hero-profile.jpg"
                  alt="URAN - Full-Stack Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="200px"
                />
              </div>
              {/* Available badge */}
              <motion.div
                className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
                style={{
                  bottom: '4px', right: '-16px',
                  background: '#ffffff',
                  border: '1.5px solid rgba(5,150,105,0.35)',
                  color: '#059669',
                  boxShadow: '0 2px 8px rgba(5,150,105,0.15)',
                  zIndex: 20,
                  whiteSpace: 'nowrap',
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#059669' }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#059669' }} />
                </span>
                受付中
              </motion.div>
            </div>

            {/* Social proof strip under photo */}
            <div className="flex flex-col gap-2">
              {SOCIAL_PROOF.map((sp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(15,23,42,0.08)',
                    color: '#475569',
                    boxShadow: '0 1px 4px rgba(15,23,42,0.06)',
                  }}
                >
                  {sp.icon}
                  <span>{sp.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Text content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-label lg:justify-start justify-center mb-4"
            >
              PORTFOLIO&nbsp;&nbsp;／&nbsp;&nbsp;ポートフォリオ
            </motion.p>

            {/* Value proposition rotator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-5"
            >
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.90)',
                  border: '1px solid rgba(2,132,199,0.15)',
                  boxShadow: '0 2px 12px rgba(2,132,199,0.08)',
                  minHeight: '48px',
                }}
              >
                {VALUE_PROPS.map((vp, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2.5"
                    style={{ display: activeValue === i ? 'flex' : 'none', color: vp.color }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {vp.icon}
                    <span className="text-sm font-semibold" style={{ color: '#1e293b' }}>{vp.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex lg:justify-start justify-center gap-1.5 mt-2">
                {VALUE_PROPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveValue(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: activeValue === i ? '20px' : '6px',
                      height: '6px',
                      background: activeValue === i ? '#0284c7' : 'rgba(15,23,42,0.15)',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-black tracking-tight leading-none mb-2"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                color: '#0f172a',
                letterSpacing: '-0.03em',
              }}
            >
              URAN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-light mb-4 tracking-[0.3em]"
              style={{ color: '#94a3b8', fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              乌兰　／　ウラン
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-9 flex items-center lg:justify-start justify-center mb-7"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)', fontWeight: 600 }}
            >
              <TypeWriter />
            </motion.div>

            {/* Metrics bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7"
            >
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.62 + i * 0.07 }}
                  className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl"
                  style={{
                    background: '#ffffff',
                    border: `1px solid ${m.color}18`,
                    boxShadow: `0 2px 10px ${m.color}0e`,
                  }}
                >
                  <div className="text-xl font-black leading-none" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-[10px] text-center leading-4" style={{ color: '#64748b' }}>{m.label}</div>
                  <div className="text-[9px]" style={{ color: m.color, fontFamily: 'monospace', opacity: 0.8 }}>{m.sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row lg:justify-start justify-center gap-3 mb-6"
            >
              <a href="#contact" className="btn-primary text-sm px-7 py-3.5">
                <Mail size={16} />
                まずは無料相談する
              </a>
              <a href="#projects" className="btn-outline text-sm px-7 py-3.5">
                <GitBranch size={16} />
                実績を見る
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88 }}
              className="flex flex-wrap lg:justify-start justify-center items-center gap-3"
            >
              {TRUST_BADGES.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: t.color }}>
                  {t.icon}
                  {t.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Bottom info card ── */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-14 mx-auto max-w-2xl rounded-2xl overflow-hidden"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(15,23,42,0.06)', background: '#f8fafc' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
              <div className="flex-1" />
              <span className="text-[10px]" style={{ color: '#94a3b8', fontFamily: 'monospace' }}>engineer.ts</span>
            </div>
            <div className="px-5 py-4 space-y-0.5">
              {[
                { text: 'const engineer = {',                          color: '#0f172a' },
                { text: '  name:       "URAN",',                       color: '#475569' },
                { text: '  experience: "5+ years",',                   color: '#475569' },
                { text: '  efficiency: "+30%",',                       color: '#059669' },
                { text: '  available:  true,',                         color: '#0284c7' },
                { text: '  languages:  ["日本語","中文","EN"],',        color: '#7c3aed' },
                { text: '};',                                           color: '#0f172a' },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                  className="text-xs leading-6"
                  style={{ color: line.color, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span style={{ color: '#94a3b8', marginRight: '1rem', userSelect: 'none' }}>{i + 1}</span>
                  {line.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ color: '#94a3b8' }}
      >
        <span className="text-[9px] tracking-[0.5em]" style={{ fontFamily: 'monospace' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
