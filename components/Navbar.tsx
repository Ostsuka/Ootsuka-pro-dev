'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronDown } from 'lucide-react';

/* ── Nav groups ──────────────────────────────────── */
const NAV_PRIMARY = [
  { href: '#about',        ja: '自己紹介',  en: 'About'        },
  { href: '#services',     ja: 'サービス',  en: 'Services'     },
  { href: '#skills',       ja: 'スキル',    en: 'Skills'       },
  { href: '#experience',   ja: '職歴',      en: 'Experience'   },
  { href: '#projects',     ja: '実績',      en: 'Projects'     },
];

const NAV_MORE = [
  { href: '#tech',         ja: '技術スタック', en: 'Tech Stack'  },
  { href: '#process',      ja: '制作の流れ',   en: 'Process'     },
  { href: '#testimonials', ja: 'お客様の声',   en: 'Testimonials'},
  { href: '#pricing',      ja: '料金・納期',   en: 'Pricing'     },
  { href: '#faq',          ja: 'よくある質問', en: 'FAQ'         },
  { href: '#contact',      ja: '連絡先',       en: 'Contact'     },
];

const ALL_NAV = [...NAV_PRIMARY, ...NAV_MORE];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('');
  const [moreOpen, setMoreOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ALL_NAV.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-38% 0px -56% 0px' },
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    setMoreOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /* close "more" dropdown on outside click */
  useEffect(() => {
    if (!moreOpen) return;
    const handler = () => setMoreOpen(false);
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [moreOpen]);

  return (
    <>
      {/* ── Desktop nav ── */}
      <motion.nav
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(5,8,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,200,240,0.08)' : 'none',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" onClick={e => { e.preventDefault(); go('#hero'); }}
            className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00c8f0, #8b5cf6)', boxShadow: '0 0 16px rgba(0,200,240,0.4)' }}>
              <span className="relative z-10 text-white">U</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base tracking-tight" style={{ color: '#f1f5f9' }}>URAN</span>
              <span className="text-[10px] font-mono tracking-widest" style={{ color: '#475569' }}>FULL-STACK</span>
            </div>
          </a>

          {/* Center links */}
          <div className="hidden lg:flex items-center gap-0.5 px-2 py-1.5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {NAV_PRIMARY.map(link => {
              const isActive = active === link.href;
              return (
                <button key={link.href} onClick={() => go(link.href)}
                  className="relative px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition-colors duration-200"
                  style={{ color: isActive ? '#00c8f0' : '#64748b' }}>
                  {isActive && (
                    <motion.div layoutId="nav-active" className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(0,200,240,0.1)', border: '1px solid rgba(0,200,240,0.2)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative z-10">{link.ja}</span>
                </button>
              );
            })}

            {/* "More" dropdown */}
            <div className="relative">
              <button
                onClick={e => { e.stopPropagation(); setMoreOpen(o => !o); }}
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition-colors"
                style={{ color: NAV_MORE.some(l => l.href === active) ? '#00c8f0' : '#64748b' }}>
                もっと見る
                <ChevronDown size={11} style={{ transform: moreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-2 w-48 rounded-2xl overflow-hidden z-50"
                    style={{ background: 'rgba(8,13,26,0.97)', border: '1px solid rgba(0,200,240,0.12)', boxShadow: '0 16px 48px rgba(0,0,0,0.6)' }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="p-2 space-y-0.5">
                      {NAV_MORE.map(link => {
                        const isActive = active === link.href;
                        return (
                          <button key={link.href} onClick={() => go(link.href)}
                            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-all"
                            style={{
                              background: isActive ? 'rgba(0,200,240,0.08)' : 'transparent',
                              color: isActive ? '#00c8f0' : '#94a3b8',
                            }}>
                            <span>{link.ja}</span>
                            <span className="text-[10px] font-mono opacity-40">{link.en}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs" style={{ color: '#10b981' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#10b981' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
              </span>
              <span className="hidden xl:block font-mono tracking-wide">AVAILABLE</span>
            </div>
            <a href="mailto:gold77chi11@gmail.com" className="btn-primary text-xs px-5 py-2">
              <Terminal size={13} />
              Hire Me
            </a>
          </div>

          {/* Hamburger (md and below) */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#94a3b8', background: open ? 'rgba(0,200,240,0.1)' : 'transparent' }}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="absolute inset-0" style={{ background: 'rgba(5,8,16,0.75)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)} />

            <motion.div
              className="absolute top-[64px] left-4 right-4 rounded-2xl overflow-hidden"
              style={{ background: 'rgba(8,13,26,0.97)', border: '1px solid rgba(0,200,240,0.12)', maxHeight: 'calc(100vh - 84px)', overflowY: 'auto' }}
              initial={{ y: -16, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>

              <div className="p-3">
                {/* Primary links */}
                <div className="text-[9px] font-mono tracking-widest px-3 pt-2 pb-1.5" style={{ color: '#334155' }}>MAIN</div>
                <div className="space-y-0.5">
                  {NAV_PRIMARY.map(link => {
                    const isActive = active === link.href;
                    return (
                      <button key={link.href} onClick={() => go(link.href)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                        style={{
                          background: isActive ? 'rgba(0,200,240,0.08)' : 'transparent',
                          color: isActive ? '#00c8f0' : '#94a3b8',
                          border: isActive ? '1px solid rgba(0,200,240,0.18)' : '1px solid transparent',
                        }}>
                        <span>{link.ja}</span>
                        <span className="text-xs font-mono opacity-40">{link.en}</span>
                      </button>
                    );
                  })}
                </div>

                {/* More links */}
                <div className="text-[9px] font-mono tracking-widest px-3 pt-4 pb-1.5" style={{ color: '#334155' }}>MORE</div>
                <div className="space-y-0.5">
                  {NAV_MORE.map(link => {
                    const isActive = active === link.href;
                    return (
                      <button key={link.href} onClick={() => go(link.href)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                        style={{
                          background: isActive ? 'rgba(0,200,240,0.08)' : 'transparent',
                          color: isActive ? '#00c8f0' : '#94a3b8',
                          border: isActive ? '1px solid rgba(0,200,240,0.18)' : '1px solid transparent',
                        }}>
                        <span>{link.ja}</span>
                        <span className="text-xs font-mono opacity-40">{link.en}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="px-4 pb-4 pt-1">
                <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <a href="mailto:gold77chi11@gmail.com" className="btn-primary w-full justify-center text-sm"
                  style={{ display: 'flex' }} onClick={() => setOpen(false)}>
                  <Terminal size={14} />
                  メールで連絡する
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
