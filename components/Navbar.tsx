'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about',   label: '私について' },
  { href: '#works',   label: '制作実績' },
  { href: '#services',label: '対応業務' },
  { href: '#skills',  label: 'スキル・料金' },
  { href: '#contact', label: 'お問い合わせ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
          transition: 'all 0.4s',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); go('#hero'); }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.4rem',
              fontWeight: 600,
              color: '#f0ece4',
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            MarcoPagot
          </a>

          {/* Desktop nav — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  color: '#c8c0b0',
                  transition: 'color 0.2s',
                  padding: '0.25rem 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={e => (e.currentTarget.style.color = '#c8c0b0')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0ece4', padding: '0.5rem' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 49,
              background: 'rgba(10,10,10,0.98)',
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    letterSpacing: '0.08em',
                    color: '#c8c0b0',
                    textAlign: 'left',
                    padding: '0.25rem 0',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
