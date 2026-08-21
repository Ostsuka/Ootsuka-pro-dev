'use client';
import { motion } from 'framer-motion';

/* ── Pill / chip コンポーネント ── */
function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.4rem 1.1rem',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: '2px',
        fontSize: '0.8rem',
        color: '#c8c0b0',
        background: 'rgba(201,168,76,0.05)',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

/* ── 稼働時間アニメーションブロック ── */
function WorkingHoursBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '4px',
        padding: '1.75rem 2rem',
        textAlign: 'center',
        background: 'rgba(201,168,76,0.04)',
        maxWidth: '380px',
        margin: '0 auto',
      }}
    >
      <p
        className="gold-line font-display"
        style={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: '#c9a84c',
          letterSpacing: '0.18em',
          marginBottom: '1.1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        ー稼働時間ー
      </p>
      <p
        className="font-display"
        style={{
          fontSize: 'clamp(1.4rem, 4vw, 2rem)',
          fontWeight: 400,
          color: '#f0ece4',
          letterSpacing: '0.12em',
          marginBottom: '0.6rem',
        }}
      >
        週３０程度
      </p>
      <p
        style={{
          fontSize: '0.78rem',
          color: '#8a8278',
          letterSpacing: '0.06em',
        }}
      >
        （案件に応じて柔軟に対応可能）
      </p>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

const SOFTWARE = ['Googleドキュメント', 'スプレッドシート', 'Canva'];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: '#0d0d0d', padding: '6rem 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label-en" style={{ marginBottom: '0.75rem' }}>Skills and Fees</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#f0ece4',
              letterSpacing: '0.1em',
            }}
          >
            スキル・料金等
          </h2>
        </motion.div>

        {/* 参考単価 */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3
            className="gold-line font-display"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#c9a84c',
              letterSpacing: '0.18em',
              marginBottom: '1.25rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            ー参考単価ー
          </h3>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.55rem 2rem',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '999px',
              fontSize: '0.9rem',
              color: '#c8c0b0',
              background: 'rgba(201,168,76,0.05)',
              letterSpacing: '0.06em',
            }}
          >
            １文字１〜３円
          </span>
        </motion.div>

        {/* 使用可能ソフト */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3
            className="gold-line font-display"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#c9a84c',
              letterSpacing: '0.18em',
              marginBottom: '1.25rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            ー使用可能ソフトー
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            {SOFTWARE.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              >
                <Chip label={s} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 稼働時間 */}
        <WorkingHoursBlock />
      </div>
    </section>
  );
}
