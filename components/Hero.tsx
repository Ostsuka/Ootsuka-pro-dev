'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* ── Background photo (existing section-bg pattern) ── */}
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center 20%',
          filter: 'brightness(0.60)',
        }}
      />

      {/* ── Dark gradient overlay — heavier on right side for text contrast ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to left, rgba(20,14,8,0.72) 0%, rgba(20,14,8,0.30) 55%, rgba(20,14,8,0.15) 100%)',
          zIndex: 1,
        }}
      />
      {/* Bottom fade into page */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to top, var(--bg), transparent)',
          zIndex: 2,
        }}
      />

      {/* ── Content layer ── */}
      <div
        className="section-inner"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingBottom: '7rem',
          minHeight: '100vh',
        }}
      >
        {/* Right-aligned text block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'right', maxWidth: '560px' }}
        >
          {/* PORTFOLIO large display */}
          <h1
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
              fontWeight: 900,
              letterSpacing: '0.12em',
              lineHeight: 1,
              color: '#ffffff',
              marginBottom: '1.25rem',
              fontFamily: "'Noto Sans JP', 'Inter', sans-serif",
            }}
          >
            PORTFOLIO
          </h1>

          {/* Thin gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              height: '1px',
              background: 'linear-gradient(to left, var(--teal), var(--blue))',
              marginBottom: '1.1rem',
            }}
          />

          {/* Sub-tagline — existing brand copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.80)',
              lineHeight: 1.9,
            }}
          >
            React · TypeScript · Java · PHP — フルスタックエンジニア URAN
          </motion.p>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            position: 'absolute',
            bottom: '2.2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <span
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.45em',
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'monospace',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, rgba(43,181,160,0.9), transparent)',
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
