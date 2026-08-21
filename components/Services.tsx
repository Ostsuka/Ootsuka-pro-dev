'use client';
import { motion } from 'framer-motion';

/* 小さなゴールドの矢印 */
function Bullet() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: 'var(--gold)',
        flexShrink: 0,
        marginTop: '9px',
      }}
    />
  );
}

const GENRES = [
  'SEO',
  'ライティング全般',
  '美容',
  '転職',
  '製造業（現場作業）',
];

const TASKS = [
  'SEOライティング',
  '商品リサーチ',
  '構成作成',
  'WordPress入稿',
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: '#0a0a0a', padding: '6rem 0', position: 'relative' }}
    >
      {/* Subtle background photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&auto=format&fit=crop&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label-en" style={{ marginBottom: '0.75rem' }}>Services</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#f0ece4',
              letterSpacing: '0.1em',
            }}
          >
            得意ジャンルと対応可能業務
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* 得意ジャンル */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className="gold-line font-display"
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#c9a84c',
                letterSpacing: '0.15em',
                marginBottom: '1.75rem',
              }}
            >
              ー得意ジャンルー
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {GENRES.map((g, i) => (
                <motion.li
                  key={g}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <Bullet />
                  <span style={{ fontSize: '0.85rem', color: '#c8c0b0', letterSpacing: '0.03em' }}>
                    {g}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 対応可能業務 */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className="gold-line font-display"
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#c9a84c',
                letterSpacing: '0.15em',
                marginBottom: '1.75rem',
              }}
            >
              ー対応可能業務ー
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {TASKS.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <Bullet />
                  <span style={{ fontSize: '0.85rem', color: '#c8c0b0', letterSpacing: '0.03em' }}>
                    {t}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
