'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero',       ja: 'ホーム' },
  { href: '#about',      ja: 'プロフィール' },
  { href: '#projects',   ja: '実績' },
  { href: '#services',   ja: 'サービス' },
  { href: '#skills',     ja: 'スキル' },
  { href: '#contact',    ja: '連絡先' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* ── Logo fixed top-left (always visible) ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '2rem',
          zIndex: 50,
        }}
      >
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); go('#hero'); }}
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          URAN
        </a>
      </motion.div>

      {/* ── Hamburger toggle top-right ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => setOpen(o => !o)}
        aria-label="メニューを開く"
        style={{
          position: 'fixed',
          top: '1.4rem',
          right: '2rem',
          zIndex: 50,
          background: scrolled ? 'rgba(245,238,216,0.92)' : 'rgba(245,238,216,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(45,36,22,0.15)',
          borderRadius: '8px',
          padding: '0.45rem 0.55rem',
          cursor: 'pointer',
          color: scrolled ? '#2d2416' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      {/* ── Slide-down drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 48,
                background: 'rgba(45,36,22,0.35)',
                backdropFilter: 'blur(4px)',
              }}
            />
            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              style={{
                position: 'fixed',
                top: '4.2rem',
                right: '2rem',
                zIndex: 49,
                background: 'rgba(250,248,242,0.97)',
                border: '1px solid rgba(45,36,22,0.10)',
                borderRadius: '14px',
                boxShadow: '0 12px 40px rgba(45,36,22,0.14)',
                minWidth: '160px',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '0.5rem' }}>
                {NAV_LINKS.map(link => (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#5a4e3a',
                      letterSpacing: '0.04em',
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(43,181,160,0.10)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#2bb5a0';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'none';
                      (e.currentTarget as HTMLButtonElement).style.color = '#5a4e3a';
                    }}
                  >
                    {link.ja}
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
