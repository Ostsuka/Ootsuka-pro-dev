'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp, GitBranch, Globe } from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'ナビゲーション', color: '#2bb5a0',
    links: [
      { href: '#hero',       label: 'ホーム' },
      { href: '#about',      label: 'プロフィール' },
      { href: '#skills',     label: 'スキル' },
      { href: '#experience', label: '経歴' },
      { href: '#projects',   label: '実績' },
      { href: '#contact',    label: 'お問い合わせ' },
    ],
  },
  {
    label: '技術スタック', color: '#3a7bd5',
    links: [
      { href: '#skills', label: 'React / Next.js' },
      { href: '#skills', label: 'TypeScript' },
      { href: '#skills', label: 'NestJS / Laravel' },
      { href: '#skills', label: 'Java Spring Boot' },
      { href: '#skills', label: 'AWS / Docker' },
      { href: '#skills', label: 'PostgreSQL / MySQL' },
    ],
  },
];

const TECH_USED = ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS v4', 'Framer Motion'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#2d2416', color: '#c8b89a' }}>

      {/* CTA banner */}
      <div style={{ background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)' }}>
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white mb-1">プロジェクトのご相談、お気軽に</h3>
            <p className="text-white/75 text-sm">無料相談受付中 — 要件定義から運用まで一気通貫でサポートします</p>
          </div>
          <a href="#contact" onClick={e => { e.preventDefault(); go('#contact'); }}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm flex-shrink-0"
            style={{ background: '#fff', color: '#2bb5a0', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
            今すぐ相談する →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-white"
                style={{ background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)' }}>U</div>
              <div>
                <div className="font-black text-lg text-white leading-tight">URAN</div>
                <div className="text-[10px] font-mono tracking-widest" style={{ color: '#8c7d65' }}>FULL-STACK ENGINEER</div>
              </div>
            </div>
            <p className="text-sm leading-7 mb-5" style={{ color: '#a89880' }}>
              React・TypeScript・Java・PHP を中心に、フロントエンドからクラウド運用まで対応する台湾出身のフルスタックエンジニアです。
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#34c78a' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#34c78a' }} />
              </span>
              <span className="text-xs font-semibold" style={{ color: '#34c78a' }}>現在 案件受付中</span>
            </div>
            <div className="space-y-2.5 mb-6">
              <a href="mailto:gold77chi11@gmail.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: '#a89880' }}>
                <Mail size={14} style={{ color: '#3a7bd5', flexShrink: 0 }} />gold77chi11@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#a89880' }}>
                <MapPin size={14} style={{ color: '#8b5cf6', flexShrink: 0 }} />台北市 大安區（台湾）
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://github.com/', icon: <GitBranch size={15} />, label: 'GitHub' },
                { href: 'https://twitter.com/', icon: <Globe size={15} />, label: 'Web' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', color: '#c8b89a' }}>
                  {s.icon}{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group, gi) => (
            <div key={gi}>
              <h4 className="text-[10px] font-mono tracking-widest mb-5" style={{ color: group.color }}>{group.label}</h4>
              <div className="space-y-2">
                {group.links.map(l => (
                  <button key={l.label} onClick={() => go(l.href)}
                    className="w-full text-left text-sm py-0.5 transition-colors hover:text-white"
                    style={{ color: '#a89880' }}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Built with */}
        <div className="mb-6">
          <h4 className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#5a4e3a' }}>BUILT WITH</h4>
          <div className="flex flex-wrap gap-2">
            {TECH_USED.map(t => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#8c7d65' }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.07)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#5a4e3a' }}>© 2026 URAN. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-xs" style={{ color: '#5a4e3a' }}>
              Made with <Heart size={11} style={{ color: '#e86c5d', margin: '0 2px' }} /> in Taiwan
            </div>
            <motion.button onClick={scrollTop} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(43,181,160,0.15)', border: '1px solid rgba(43,181,160,0.30)', color: '#2bb5a0' }}
              aria-label="Scroll to top">
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
