'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero',         ja: 'ホーム' },
  { href: '#about',        ja: 'プロフィール' },
  { href: '#projects',     ja: '実績' },
  { href: '#services',     ja: 'サービス' },
  { href: '#skills',       ja: 'スキル' },
  { href: '#experience',   ja: '経歴' },
  { href: '#process',      ja: '開発フロー' },
  { href: '#contact',      ja: '連絡先' },
];

/* ─── Shion brand logo SVG ─── */
function ShionLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="大塚詩音 logo">
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" stroke="url(#logo-ring)" strokeWidth="1.5" />
      {/* Orbit arc */}
      <ellipse cx="20" cy="20" rx="10" ry="5.5" stroke="url(#logo-orbit)" strokeWidth="1.2"
        transform="rotate(-30 20 20)" strokeDasharray="18 8" />
      {/* Core circle */}
      <circle cx="20" cy="20" r="5.5" fill="url(#logo-core)" />
      {/* Atom dot */}
      <circle cx="28" cy="14" r="2" fill="url(#logo-dot)" />
      <defs>
        <linearGradient id="logo-ring" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2bb5a0" />
          <stop offset="1" stopColor="#3a7bd5" />
        </linearGradient>
        <linearGradient id="logo-orbit" x1="10" y1="15" x2="30" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3fd0bb" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="logo-core" x1="14.5" y1="14.5" x2="25.5" y2="25.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2bb5a0" />
          <stop offset="1" stopColor="#3a7bd5" />
        </linearGradient>
        <linearGradient id="logo-dot" x1="26" y1="12" x2="30" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8a949" />
          <stop offset="1" stopColor="#f4914e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [activeSection, setActive]  = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const navBg = scrolled
    ? 'rgba(245,238,216,0.96)'
    : 'transparent';
  const navBorder = scrolled ? 'rgba(45,36,22,0.10)' : 'transparent';

  return (
    <>
      {/* ── Full-width top bar ── */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: navBg,
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${navBorder}`,
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(45,36,22,0.08)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 3rem)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* ── Brand / Logo ── */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); go('#hero'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <ShionLogo size={36} />
            </motion.div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 900,
                letterSpacing: '0.10em',
                color: scrolled ? '#2d2416' : '#ffffff',
                textShadow: scrolled ? 'none' : '0 1px 12px rgba(0,0,0,0.45)',
                transition: 'color 0.3s',
              }}>
                大塚詩音
              </div>
              <div style={{
                fontSize: '0.5rem',
                fontFamily: 'monospace',
                letterSpacing: '0.22em',
                color: scrolled ? '#8c7d65' : 'rgba(255,255,255,0.65)',
                transition: 'color 0.3s',
              }}>
                FULL-STACK ENGINEER
              </div>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            className="hidden md:flex">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: isActive ? 700 : 500,
                    color: scrolled
                      ? (isActive ? '#2bb5a0' : '#5a4e3a')
                      : (isActive ? '#3fd0bb' : 'rgba(255,255,255,0.82)'),
                    transition: 'color 0.2s, background 0.2s',
                    position: 'relative',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      scrolled ? 'rgba(43,181,160,0.10)' : 'rgba(255,255,255,0.12)';
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.color =
                      scrolled ? '#2bb5a0' : '#ffffff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color = scrolled
                      ? (isActive ? '#2bb5a0' : '#5a4e3a')
                      : (isActive ? '#3fd0bb' : 'rgba(255,255,255,0.82)');
                  }}
                >
                  {link.ja}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 2,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 14,
                        height: 2,
                        borderRadius: 999,
                        background: 'var(--teal)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* CTA button */}
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); go('#contact'); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginLeft: '0.5rem',
                padding: '0.42rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(43,181,160,0.35)',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}
            >
              お問い合わせ
            </motion.a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(o => !o)}
            aria-label="メニューを開く"
            className="md:hidden"
            style={{
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
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={18} />
                  </motion.div>
                : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={18} />
                  </motion.div>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile slide-down drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 48,
                background: 'rgba(45,36,22,0.40)',
                backdropFilter: 'blur(4px)',
              }}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: '72px',
                left: 'clamp(1rem, 4vw, 2rem)',
                right: 'clamp(1rem, 4vw, 2rem)',
                zIndex: 49,
                background: 'rgba(250,248,242,0.98)',
                border: '1px solid rgba(45,36,22,0.10)',
                borderRadius: '16px',
                boxShadow: '0 16px 48px rgba(45,36,22,0.16)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '0.75rem' }}>
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => go(link.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        width: '100%',
                        textAlign: 'left',
                        background: isActive ? 'rgba(43,181,160,0.10)' : 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.7rem 1rem',
                        borderRadius: '10px',
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#2bb5a0' : '#5a4e3a',
                        letterSpacing: '0.03em',
                        transition: 'background 0.15s, color 0.15s',
                      }}
                    >
                      {isActive && (
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#2bb5a0', flexShrink: 0 }} />
                      )}
                      {link.ja}
                    </motion.button>
                  );
                })}
                <div style={{ padding: '0.5rem 0.5rem 0.25rem' }}>
                  <button
                    onClick={() => go('#contact')}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    お問い合わせ
                  </button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
