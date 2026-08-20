'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp, CheckCircle2, Star, Shield, Clock, ExternalLink } from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'PROFILE', color: '#0284c7',
    links: [{ href: '#about', label: '自己紹介' }, { href: '#skills', label: 'スキルセット' }, { href: '#experience', label: '職務経歴' }],
  },
  {
    label: 'WORK', color: '#7c3aed',
    links: [{ href: '#services', label: 'サービス内容' }, { href: '#projects', label: '主要プロジェクト' }, { href: '#tech', label: '技術スタック' }],
  },
  {
    label: 'INFO', color: '#059669',
    links: [{ href: '#process', label: '制作の流れ' }, { href: '#testimonials', label: 'お客様の声' }, { href: '#pricing', label: '料金・納期' }, { href: '#faq', label: 'よくある質問' }],
  },
];

const TRUST_ITEMS = [
  { icon: <Star size={13} fill="#d97706" style={{ color: '#d97706' }} />, text: '評価 5.0 / 5.0',  color: '#d97706' },
  { icon: <CheckCircle2 size={13} />,                                      text: '100% リピート意向', color: '#059669' },
  { icon: <Shield size={13} />,                                            text: '納品後 1ヶ月保証',  color: '#7c3aed' },
  { icon: <Clock size={13} />,                                             text: '24h 以内返信',      color: '#0284c7' },
];

const TECH_USED = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const go = (href: string) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="relative" style={{ background: '#f8fafc', borderTop: '1px solid rgba(15,23,42,0.08)' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.25), rgba(124,58,237,0.25), transparent)',
      }} />

      {/* Trust bar */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2 text-xs font-semibold" style={{ color: item.color }}>
              {item.icon}{item.text}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-white"
                style={{ background: 'linear-gradient(135deg, #0284c7, #8b5cf6)', boxShadow: '0 2px 10px rgba(2,132,199,0.25)' }}>U</div>
              <div>
                <div className="font-black text-lg leading-tight" style={{ color: '#0f172a' }}>URAN</div>
                <div className="text-[10px] font-mono tracking-widest" style={{ color: '#94a3b8' }}>FULL-STACK ENGINEER</div>
              </div>
            </div>
            <p className="text-sm leading-7 mb-5" style={{ color: '#64748b' }}>
              React・TypeScript・Java・PHP を中心に、フロントエンドからクラウド運用まで対応する台湾出身のフルスタックエンジニアです。<br />
              <span style={{ color: '#94a3b8', fontSize: '12px' }}>Full-stack engineer from Taiwan, handling everything from front-end to cloud operations.</span>
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.20)', color: '#059669' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#059669' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#059669' }} />
              </span>
              現在、案件受付中 — Available for projects
            </div>
            <div className="space-y-2.5 mb-6">
              <a href="mailto:gold77chi11@gmail.com" className="flex items-center gap-2.5 text-sm hover:underline" style={{ color: '#64748b' }}>
                <Mail size={14} style={{ flexShrink: 0, color: '#0284c7' }} />gold77chi11@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#64748b' }}>
                <MapPin size={14} style={{ flexShrink: 0, color: '#7c3aed' }} />台北市 大安區（台湾）
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/', label: 'GitHub', color: '#1e293b' },
                { href: 'https://twitter.com/', label: 'X / Twitter', color: '#1DA1F2' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                  style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.10)', color: s.color, boxShadow: '0 1px 4px rgba(15,23,42,0.05)' }}>
                  <ExternalLink size={12} />{s.label}
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
                  <button key={l.href} onClick={() => go(l.href)}
                    className="w-full text-left text-sm py-0.5 transition-colors flex items-center gap-2 group"
                    style={{ color: '#64748b' }}>
                    <span className="w-1 h-1 rounded-full transition-all group-hover:bg-slate-400"
                      style={{ background: '#cbd5e1', flexShrink: 0 }} />
                    <span className="group-hover:text-slate-700">{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Built with */}
        <div className="mb-8">
          <h4 className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#94a3b8' }}>BUILT WITH</h4>
          <div className="flex flex-wrap gap-2">
            {TECH_USED.map(t => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded-lg"
                style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.08)', color: '#64748b' }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'rgba(15,23,42,0.06)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#94a3b8' }}>© 2026 URAN. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-xs" style={{ color: '#94a3b8' }}>
              <span>Made with</span>
              <Heart size={11} style={{ color: '#e11d48' }} />
              <span>in Taiwan</span>
            </div>
            <motion.button onClick={scrollTop} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(2,132,199,0.08)', border: '1px solid rgba(2,132,199,0.18)', color: '#0284c7' }}
              aria-label="Scroll to top">
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
