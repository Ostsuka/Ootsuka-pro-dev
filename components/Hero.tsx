'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Github, ArrowDown, CheckCircle2 } from 'lucide-react';

/* ── Typewriter ──────────────────────────────────── */
const ROLES = [
  'Full-Stack Engineer',
  'React / TypeScript',
  'Java Spring Boot',
  'PHP Laravel',
  'AWS & Docker',
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
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 72);
    } else if (!deleting && charIdx > current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 36);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx]);

  return (
    <span>
      <span style={{ color: '#2bb5a0', fontWeight: 700 }}>{display}</span>
      <span
        className="animate-blink"
        style={{ display: 'inline-block', width: '2px', height: '1em', background: '#2bb5a0', marginLeft: '2px', verticalAlign: 'middle' }}
      />
    </span>
  );
}

/* ── Stats ───────────────────────────────────────── */
const STATS = [
  { value: '5+',  label: '年の実務経験',  color: '#2bb5a0' },
  { value: '30+', label: '完了プロジェクト', color: '#3a7bd5' },
  { value: '4社', label: '継続取引実績',   color: '#8b5cf6' },
  { value: '99.9%', label: '稼働率',       color: '#e8a949' },
];

/* ── Trust items ─────────────────────────────────── */
const TRUST = [
  { text: '即日対応可', color: '#2bb5a0' },
  { text: '日本語・中文・EN 対応', color: '#3a7bd5' },
  { text: '要件定義〜運用まで一貫', color: '#8b5cf6' },
  { text: '現在受付中', color: '#34c78a' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle warm blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(43,181,160,0.10) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(58,123,213,0.08) 0%, transparent 65%)' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-5"
          >
            {/* Photo card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: '220px',
                height: '260px',
                border: '3px solid rgba(43,181,160,0.30)',
                boxShadow: '0 8px 40px rgba(43,181,160,0.15), 0 2px 12px rgba(45,36,22,0.10)',
              }}
            >
              <Image
                src="/hero-profile.jpg"
                alt="URAN - Full-Stack Engineer"
                fill
                className="object-cover object-center"
                priority
                sizes="220px"
              />
              {/* Available badge overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 py-2.5"
                style={{ background: 'linear-gradient(to top, rgba(43,181,160,0.95), rgba(43,181,160,0.80))' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-80" style={{ background: '#fff' }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-white text-xs font-bold tracking-wide">現在 受付中</span>
              </div>
            </div>

            {/* Quick stats under photo */}
            <div className="flex gap-3">
              {[
                { emoji: '⭐', text: '5.0 / 5.0' },
                { emoji: '🔄', text: '100% リピート' },
                { emoji: '⚡', text: '24h 返信' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-xl text-center"
                  style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(45,36,22,0.10)', boxShadow: '0 1px 6px rgba(45,36,22,0.06)' }}
                >
                  <span style={{ fontSize: '14px' }}>{item.emoji}</span>
                  <span className="text-[10px] font-semibold" style={{ color: '#5a4e3a' }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Pill label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex lg:justify-start justify-center mb-4"
            >
              <span className="section-label">PORTFOLIO ／ ポートフォリオ</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="font-black tracking-tight leading-none mb-2"
              style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', color: '#2d2416', letterSpacing: '-0.03em' }}
            >
              URAN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="text-sm font-light mb-5 tracking-[0.3em]"
              style={{ color: '#a89880' }}
            >
              乌兰　／　ウラン
            </motion.p>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-8 flex items-center lg:justify-start justify-center mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
            >
              <TypeWriter />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="text-sm leading-8 mb-7 max-w-lg mx-auto lg:mx-0"
              style={{ color: '#5a4e3a' }}
            >
              台湾出身のフルスタックエンジニア。
              <span style={{ color: '#2d2416', fontWeight: 700 }}>React・TypeScript・Java・PHP</span>を中心に、
              製造・流通・EC 業界の業務システム開発に
              <span style={{ color: '#2bb5a0', fontWeight: 700 }}> 5年以上</span>携わってきました。
              設計から AWS 運用まで一気通貫で対応します。
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.58 + i * 0.07 }}
                  className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    border: `1px solid ${s.color}22`,
                    boxShadow: `0 2px 10px ${s.color}10`,
                  }}
                >
                  <div className="text-xl font-black leading-none" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] text-center leading-4" style={{ color: '#8c7d65' }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row lg:justify-start justify-center gap-3 mb-6"
            >
              <a href="#contact" className="btn-primary">
                <Mail size={16} />
                まずは無料相談する
              </a>
              <a href="#projects" className="btn-outline">
                <Github size={16} />
                実績を見る
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82 }}
              className="flex flex-wrap lg:justify-start justify-center gap-x-4 gap-y-2"
            >
              {TRUST.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: t.color }}>
                  <CheckCircle2 size={12} />
                  {t.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ color: '#a89880' }}
        >
          <span className="text-[9px] tracking-[0.5em]" style={{ fontFamily: 'monospace' }}>SCROLL</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
