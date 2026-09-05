'use client';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend',
    color: '#3a7bd5', bg: 'linear-gradient(135deg, #3a7bd5, #60a5fa)', icon: '💚',
    skills: [
      { name: 'HTML5',      level: 90, years: '8年', color: '#0ea5e3' },
      { name: 'SCSS',      level: 90, years: '8年', color: '#0ea5e1' },
      { name: 'React',      level: 90, years: '6年', color: '#0ea5e9' },
      { name: 'Next.js',    level: 85, years: '5年', color: '#334155' },
      { name: 'TypeScript', level: 90, years: '6年', color: '#3178c6' },
      { name: 'JavaScript', level: 90, years: '6年', color: '#ca8a04' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend',
    color: '#e86c5d', bg: 'linear-gradient(135deg, #e86c5d, #f97316)', icon: '❤️',
    skills: [
      { name: 'Node.js',      level: 85, years: '4年', color: '#e11d21' },
      { name: 'Python',      level: 85, years: '6年', color: '#e11d76' },
      { name: 'NestJS',     level: 85, years: '5年', color: '#ef4444' },
      { name: 'PHP,Laravel', level: 93, years: '5年', color: '#6db33f' },
      { name: 'Java, Spring Boott',     level: 95, years: '6年', color: '#16a34a' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database',
    color: '#2bb5a0', bg: 'linear-gradient(135deg, #2bb5a0, #34c78a)', icon: '❄️',
    skills: [
      { name: 'MySQL',      level: 85, years: '3年', color: '#2213eb' },
      { name: 'MongoDB', level: 83, years: '4年', color: '#1d4ed8' },
      { name: 'PostgreSQL', level: 95, years: '5年', color: '#1d4ed8' },
    ],
  },
  {
    id: 'infra', label: 'インフラ / クラウド', labelEn: 'Infrastructure',
    color: '#e8a949', bg: 'linear-gradient(135deg, #e8a949, #f59e0b)', icon: '☁',
    skills: [
      { name: 'AWS',            level: 90, years: '4年', color: '#d97706' },
      { name: 'Docker',         level: 85, years: '4年', color: '#0284c7' },
      { name: 'GitHub Actions', level: 86, years: '5年', color: '#16a34a' },
      { name: 'Sass / SCSS',          level: 70, years: '4年', color: '#6b2298' },
      { name: 'Linux',          level: 70, years: '4年', color: '#6b7567' },
      { name: 'Windows',          level: 96, years: '8年', color: '#6b3865' },
      { name: 'REST API設計',          level: 88, years: '5年', color: '#6b1113' },
      { name: 'UI/UX設計',          level: 97, years: '5年', color: '#6b7280' },
    ],
  },
    {
    id: 'design', label: 'デザイン', labelEn: 'Infrastructure',
    color: '#e8a153', bg: 'linear-gradient(573deg, #e8a333, #f59e0b)', icon: '🌸',
    skills: [
      { name: 'Figma',            level: 86, years: '4年', color: '#d74242' },
      { name: 'Canva',         level:95, years: '4年', color: '#0886c7' },
      { name: 'Adobe Photoshop', level: 99, years: '4年', color: '#16a97a' },
      { name: 'Adobe XD',          level: 70, years: '2年', color: '#6b1267' },
      { name: 'Wordpress',          level: 96, years: '5年', color: '#6b8565' },
      { name: 'jQuery',          level: 80, years: '3年', color: '#6b2114' },
    ],
  },
];

const SOFTWARES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Spring Boot', 'Laravel', 'PHP', 'Java',
  'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'Tailwind CSS', 'Figma'];

const TAG_COLORS = ['#3a7bd5','#2bb5a0','#e86c5d','#8b5cf6','#e8a949','#34c78a'];

const STATS = [
  { value: '5+',   label: '年の実務経験',   color: '#2bb5a0' },
  { value: '30+',  label: '完了プロジェクト', color: '#3a7bd5' },
  { value: '4社',  label: '継続取引実績',    color: '#8b5cf6' },
  { value: '99.9%',label: '稼働率',         color: '#e8a949' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(237,230,204,0.95) 0%, rgba(232,225,198,0.92) 100%)' }}
      />

      <div className="section-inner container-wide">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Skills & Fees</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2d2416', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            スキル・料金
          </h2>
          <div className="divider" />
        </motion.div>

        {/* ── 参考単価バナー ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', padding: '1.25rem 1.75rem', borderRadius: '16px', marginBottom: '3rem',
            background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', color: '#2bb5a0', fontFamily: 'monospace' }}>✦ 参考単価</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 900, color: '#2bb5a0' }}>¥30,000</span>
            <span style={{ fontSize: '0.8rem', color: '#8c7d65' }}>〜 / 回（スポット相談）</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--border2)', display: 'none' }} className="hidden sm:block" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 900, color: '#3a7bd5' }}>¥300,000</span>
            <span style={{ fontSize: '0.8rem', color: '#8c7d65' }}>〜 / プロジェクト</span>
          </div>
        </motion.div>

        {/* ── Skill categories grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.id}
              variants={fadeUp(0.1 + ci * 0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card"
              style={{ padding: '1.25rem', overflow: 'hidden', position: 'relative' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                }}>
                  {cat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#2d2416' }}>{cat.label}</div>
                  <div style={{ fontSize: '0.62rem', color: cat.color, fontFamily: 'monospace', letterSpacing: '0.1em' }}>{cat.labelEn}</div>
                </div>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cat.skills.map((s, si) => (
                  <div key={s.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#5a4e3a' }}>{s.name}</span>
                      <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: s.color, fontWeight: 700 }}>{s.years}</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        className="progress-bar"
                        style={{ background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.15 + si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.6rem', color: '#a89880', fontFamily: 'monospace' }}>{s.level}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Watermark */}
              <div style={{
                position: 'absolute', right: '-10px', bottom: '-10px',
                fontSize: '4.5rem', fontWeight: 900, color: `${cat.color}06`,
                fontFamily: 'monospace', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>
                {cat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom row: software + stats + working hours ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.25rem',
        }}>
          {/* Software tags */}
          <motion.div
            variants={fadeUp(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card"
            style={{ padding: '1.25rem', gridColumn: 'span 1' }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', color: '#2bb5a0', fontFamily: 'monospace', marginBottom: '1rem' }}>
              ✦ 使用可能ソフト
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {SOFTWARES.map((s, i) => {
                const c = TAG_COLORS[i % TAG_COLORS.length];
                return (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.025 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '0.22rem 0.7rem', borderRadius: '999px',
                      fontSize: '0.7rem', fontWeight: 600,
                      background: `${c}10`, border: `1px solid ${c}28`, color: c,
                      cursor: 'default',
                    }}
                  >
                    {s}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Stats + Working hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="card"
                  style={{ padding: '1rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', color: '#8c7d65', marginTop: '0.35rem', lineHeight: 1.3 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Working hours */}
            <motion.div
              variants={fadeUp(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="card"
              style={{ padding: '1.25rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(43,181,160,0.08), rgba(58,123,213,0.06))' }}
            >
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', color: '#2bb5a0', fontFamily: 'monospace', marginBottom: '0.6rem' }}>
                ✦ 稼働時間
              </div>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900, color: '#2d2416', marginBottom: '0.3rem' }}>
                週 30 時間
              </div>
              <p style={{ fontSize: '0.75rem', color: '#8c7d65' }}>案件に応じて柔軟に対応可能</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
