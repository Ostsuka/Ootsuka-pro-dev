'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about',      label: '自己紹介' },
  { href: '#skills',     label: 'スキル'   },
  { href: '#experience', label: '職歴'     },
  { href: '#projects',   label: '実績'     },
  { href: '#tech',       label: '技術'     },
  { href: '#contact',    label: '連絡先'   },
];

const TECH_USED = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative"
      style={{ background: '#030508', borderTop: '1px solid rgba(0,200,240,0.07)' }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,200,240,0.3) 30%, rgba(139,92,246,0.3) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
                style={{
                  background: 'linear-gradient(135deg, #00c8f0, #8b5cf6)',
                  boxShadow: '0 0 16px rgba(0,200,240,0.3)',
                }}
              >
                <span className="text-white">U</span>
              </div>
              <div>
                <div className="font-black text-lg leading-tight" style={{ color: '#f1f5f9' }}>URAN</div>
                <div className="text-[10px] font-mono tracking-widest" style={{ color: '#334155' }}>
                  FULL-STACK ENGINEER
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 mb-5" style={{ color: '#475569' }}>
              React・TypeScript・Java・PHP を中心に、
              フロントエンドからクラウド運用まで対応する
              フルスタックエンジニアです。
            </p>

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#10b981' }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
              </span>
              現在、案件受付中
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest mb-5" style={{ color: '#00c8f0' }}>
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm py-0.5 transition-colors hover:text-white flex items-center gap-1.5 group"
                  style={{ color: '#475569' }}
                >
                  <span
                    className="w-1 h-1 rounded-full transition-colors"
                    style={{ background: '#1e293b' }}
                  />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest mb-5" style={{ color: '#00c8f0' }}>
              CONTACT
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:gold77chi11@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: '#475569' }}
              >
                <Mail size={14} style={{ flexShrink: 0 }} />
                gold77chi11@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#475569' }}>
                <MapPin size={14} style={{ flexShrink: 0 }} />
                台北市 大安區（台湾）
              </div>
            </div>

            {/* Built with */}
            <div className="mt-8">
              <h4 className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#1e293b' }}>
                BUILT WITH
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TECH_USED.map(t => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: '#334155',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.04)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#1e293b' }}>
            © 2026 URAN. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs" style={{ color: '#1e293b' }}>
              <span>Made with</span>
              <Heart size={11} style={{ color: '#f43f5e' }} />
              <span>in Taiwan</span>
            </div>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(0,200,240,0.08)',
                border: '1px solid rgba(0,200,240,0.15)',
                color: '#00c8f0',
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
