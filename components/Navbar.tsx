'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero',         ja: 'ホーム' },
  { href: '#about',        ja: 'プロフィール' },
  { href: '#skills',       ja: 'スキル' },
  { href: '#experience',   ja: '経歴' },
  { href: '#projects',     ja: '実績' },
  { href: '#contact',      ja: '連絡先' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(245,238,216,0.97)' : 'rgba(245,238,216,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(45,36,22,0.10)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(45,36,22,0.07)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); go('#hero'); }}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)' }}
            >
              U
            </div>
            <span className="font-black text-base tracking-tight" style={{ color: '#2d2416' }}>URAN</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ color: isActive ? '#2bb5a0' : '#5a4e3a' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(43,181,160,0.12)', border: '1px solid rgba(43,181,160,0.25)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.ja}</span>
                </button>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#34c78a' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#34c78a' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#34c78a' }} />
              </span>
              受付中
            </div>
            <a href="mailto:gold77chi11@gmail.com" className="btn-primary text-xs px-5 py-2">
              <Mail size={13} />
              お問い合わせ
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#5a4e3a' }}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(45,36,22,0.30)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute top-[64px] left-4 right-4 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(250,248,242,0.98)',
                border: '1px solid rgba(45,36,22,0.10)',
                boxShadow: '0 12px 40px rgba(45,36,22,0.14)',
              }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 space-y-0.5">
                {NAV_LINKS.map(link => {
                  const isActive = active === link.href;
                  return (
                    <button
                      key={link.href}
                      onClick={() => go(link.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: isActive ? 'rgba(43,181,160,0.10)' : 'transparent',
                        color: isActive ? '#2bb5a0' : '#5a4e3a',
                      }}
                    >
                      {link.ja}
                    </button>
                  );
                })}
              </div>
              <div className="px-4 pb-4 pt-1">
                <div className="h-px mb-3" style={{ background: 'rgba(45,36,22,0.08)' }} />
                <a
                  href="mailto:gold77chi11@gmail.com"
                  className="btn-primary w-full justify-center text-sm"
                  style={{ display: 'flex' }}
                  onClick={() => setOpen(false)}
                >
                  <Mail size={14} />
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
