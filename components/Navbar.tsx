'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const NAV = [
  { href: '#about',      ja: '自己紹介', en: 'About'      },
  { href: '#skills',     ja: 'スキル',   en: 'Skills'     },
  { href: '#experience', ja: '職歴',     en: 'Experience' },
  { href: '#projects',   ja: '実績',     en: 'Projects'   },
  { href: '#tech',       ja: '技術',     en: 'Tech'       },
  { href: '#contact',    ja: '連絡先',   en: 'Contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('');

  /* ── scroll state ─────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── active section via IntersectionObserver ──── */
  useEffect(() => {
    const ids = NAV.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-38% 0px -56% 0px' },
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* ── smooth scroll helper ─────────────────────── */
  const go = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* ── Desktop nav ── */}
      <motion.nav
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? 'rgba(5,8,16,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,200,240,0.08)' : 'none',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); go('#hero'); }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00c8f0, #8b5cf6)',
                boxShadow: '0 0 16px rgba(0,200,240,0.4)',
              }}
            >
              <span className="relative z-10 text-white">U</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base tracking-tight" style={{ color: '#f1f5f9' }}>URAN</span>
              <span className="text-[10px] font-mono tracking-widest" style={{ color: '#475569' }}>
                FULL-STACK
              </span>
            </div>
          </a>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {NAV.map(link => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="relative px-4 py-1.5 rounded-xl text-[13px] font-medium transition-colors duration-200"
                  style={{ color: isActive ? '#00c8f0' : '#64748b' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(0,200,240,0.1)', border: '1px solid rgba(0,200,240,0.2)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.ja}</span>
                </button>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status dot */}
            <div className="flex items-center gap-2 text-xs" style={{ color: '#10b981' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#10b981' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
              </span>
              <span className="hidden lg:block font-mono tracking-wide">AVAILABLE</span>
            </div>

            <a href="mailto:gold77chi11@gmail.com" className="btn-primary text-xs px-5 py-2">
              <Terminal size={13} />
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#94a3b8', background: open ? 'rgba(0,200,240,0.1)' : 'transparent' }}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(5,8,16,0.7)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-[64px] left-4 right-4 rounded-2xl overflow-hidden"
              style={{ background: 'rgba(8,13,26,0.97)', border: '1px solid rgba(0,200,240,0.12)' }}
              initial={{ y: -16, opacity: 0, scale: 0.97 }}
              animate={{ y: 0,   opacity: 1, scale: 1    }}
              exit={{    y: -16, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-4 space-y-1">
                {NAV.map(link => {
                  const isActive = active === link.href;
                  return (
                    <button
                      key={link.href}
                      onClick={() => go(link.href)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: isActive ? 'rgba(0,200,240,0.08)' : 'transparent',
                        color:      isActive ? '#00c8f0' : '#94a3b8',
                        border:     isActive ? '1px solid rgba(0,200,240,0.18)' : '1px solid transparent',
                      }}
                    >
                      <span>{link.ja}</span>
                      <span className="text-xs font-mono opacity-40">{link.en}</span>
                    </button>
                  );
                })}
              </div>

              <div className="px-4 pb-4">
                <a
                  href="mailto:gold77chi11@gmail.com"
                  className="btn-primary w-full justify-center text-sm"
                  style={{ display: 'flex' }}
                  onClick={() => setOpen(false)}
                >
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
