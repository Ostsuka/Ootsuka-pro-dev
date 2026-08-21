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
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background photo — laptop hands (existing public image placeholder; kept as-is) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1920&auto=format&fit=crop&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          zIndex: 0,
          filter: 'brightness(0.55)',
        }}
      />

      {/* Gradient overlay — darken left, keep right lighter */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 100%)',
          zIndex: 1,
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, #0a0a0a, transparent)',
          zIndex: 2,
        }}
      />

      {/* Content — right-aligned, lower half */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2.5rem 6rem',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '520px', textAlign: 'right' }}
        >
          {/* Large display title */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '0.15em',
              lineHeight: 1,
              color: '#f0ece4',
              marginBottom: '1.2rem',
            }}
          >
            PORTFOLIO
          </h1>

          {/* Divider line */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(201,168,76,0.5)',
              marginBottom: '1.2rem',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              color: '#c8c0b0',
              lineHeight: 1.9,
            }}
          >
            多彩な現場経験を、読者目線で伝える共感力ライター
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#8a8278',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, #c9a84c, transparent)',
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
