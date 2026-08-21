'use client';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(201,168,76,0.12)',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <p
        className="font-display"
        style={{
          fontSize: '1.2rem',
          fontWeight: 400,
          color: '#f0ece4',
          letterSpacing: '0.08em',
        }}
      >
        MarcoPagot
      </p>

      {/* Email */}
      <a
        href="mailto:marcopagot0114@gmail.com"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          color: '#8a8278',
          letterSpacing: '0.08em',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
        onMouseLeave={e => (e.currentTarget.style.color = '#8a8278')}
      >
        <Mail size={13} />
        marcopagot0114@gmail.com
      </a>

      {/* Divider */}
      <div
        style={{
          width: '40px',
          height: '1px',
          background: 'rgba(201,168,76,0.3)',
        }}
      />

      {/* Copyright + scroll-to-top */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ fontSize: '0.7rem', color: '#5a5450', letterSpacing: '0.08em' }}>
          © 2026 MarcoPagot. All rights reserved.
        </p>
        <motion.button
          onClick={scrollTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="ページトップへ"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '2px',
            background: 'transparent',
            color: '#c9a84c',
            cursor: 'pointer',
          }}
        >
          <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
}
