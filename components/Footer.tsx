'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp, CheckCircle2, Star, Shield, Clock, ExternalLink } from 'lucide-react';

/* ── Data ────────────────────────────────────────── */
const NAV_GROUPS = [
  {
    label: 'PROFILE',
    color: '#00c8f0',
    links: [
      { href: '#about',      label: '自己紹介' },
      { href: '#skills',     label: 'スキルセット' },
      { href: '#experience', label: '職務経歴' },
    ],
  },
  {
    label: 'WORK',
    color: '#8b5cf6',
    links: [
      { href: '#services',  label: 'サービス内容' },
      { href: '#projects',  label: '主要プロジェクト' },
      { href: '#tech',      label: '技術スタック' },
    ],
  },
  {
    label: 'INFO',
    color: '#10b981',
    links: [
      { href: '#process',      label: '制作の流れ' },
      { href: '#testimonials', label: 'お客様の声' },
      { href: '#pricing',      label: '料金・納期' },
      { href: '#faq',          label: 'よくある質問' },
    ],
  },
];

const TRUST_ITEMS = [
  { icon: <Star size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />, text: '評価 5.0 / 5.0', color: '#f59e0b' },
  { icon: <CheckCircle2 size={13} />,                                      text: '100% リピート意向',  color: '#10b981' },
  { icon: <Shield size={13} />,                                            text: '納品後 1ヶ月保証',   color: '#8b5cf6' },
  { icon: <Clock size={13} />,                                             text: '24h 以内返信',       color: '#00c8f0' },
];

const TECH_USED = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'];

/* ── Component ───────────────────────────────────── */
export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: '#030508', borderTop: '1px solid rgba(0,200,240,0.07)' }}>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,200,240,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)',
      }} />

      {/* Trust bar */}
      <div style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2 text-xs font-semibold"
              style={{ color: item.color }}
            >
              {item.icon}
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column (wider) */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
                style={{ background: 'linear-gradient(135deg, #00c8f0, #8b5cf6)', boxShadow: '0 0 16px rgba(0,200,240,0.3)' }}>
                <span className="text-white">U</span>
              </div>
              <div>
                <div className="font-black text-lg leading-tight" style={{ color: '#f1f5f9' }}>URAN</div>
                <div className="text-[10px] font-mono tracking-widest" style={{ color: '#334155' }}>FULL-STACK ENGINEER</div>
              </div>
            </div>

            <p className="text-sm leading-7 mb-5" style={{ color: '#475569' }}>
              React・TypeScript・Java・PHP を中心に、
              フロントエンドからクラウド運用まで対応する
              台湾出身のフルスタックエンジニアです。<br />
              <span style={{ color: '#334155', fontSize: '12px' }}>
                Full-stack engineer from Taiwan, handling everything from front-end to cloud operations.
              </span>
            </p>

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)', color: '#10b981' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#10b981' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
              </span>
              現在、案件受付中 — Available for projects
            </div>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:gold77chi11@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: '#475569' }}>
                <Mail size={14} style={{ flexShrink: 0, color: '#00c8f0' }} />
                gold77chi11@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#475569' }}>
                <MapPin size={14} style={{ flexShrink: 0, color: '#8b5cf6' }} />
                台北市 大安區（台湾）
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/', label: 'GitHub',       color: '#f1f5f9' },
                { href: 'https://twitter.com/', label: 'X / Twitter', color: '#1DA1F2' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: s.color,
                  }}>
                  <ExternalLink size={13} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group, gi) => (
            <div key={gi}>
              <h4 className="text-[10px] font-mono tracking-widest mb-5" style={{ color: group.color }}>
                {group.label}
              </h4>
              <div className="space-y-2">
                {group.links.map(l => (
                  <button key={l.href} onClick={() => go(l.href)}
                    className="w-full text-left text-sm py-0.5 transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: '#475569' }}>
                    <span className="w-1 h-1 rounded-full transition-all group-hover:bg-white"
                      style={{ background: '#1e293b', flexShrink: 0 }} />
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Built with */}
        <div className="mb-8">
          <h4 className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#1e293b' }}>
            BUILT WITH
          </h4>
          <div className="flex flex-wrap gap-2">
            {TECH_USED.map(t => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#334155',
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.04)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#1e293b' }}>
            © 2026 URAN. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-xs" style={{ color: '#1e293b' }}>
              <span>Made with</span>
              <Heart size={11} style={{ color: '#f43f5e' }} />
              <span>in Taiwan</span>
            </div>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(0,200,240,0.08)',
                border: '1px solid rgba(0,200,240,0.18)',
                color: '#00c8f0',
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
