'use client';
import { motion } from 'framer-motion';

/* ── Data (unchanged) ── */
const CATEGORIES = [
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend',
    color: '#3a7bd5', bg: 'linear-gradient(135deg, #3a7bd5, #60a5fa)', icon: '⚛',
    skills: [
      { name: 'React',      level: 90, years: '6年', color: '#0ea5e9' },
      { name: 'Next.js',    level: 85, years: '5年', color: '#334155' },
      { name: 'TypeScript', level: 90, years: '6年', color: '#3178c6' },
      { name: 'JavaScript', level: 90, years: '6年', color: '#ca8a04' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend',
    color: '#e86c5d', bg: 'linear-gradient(135deg, #e86c5d, #f97316)', icon: '⚙',
    skills: [
      { name: 'NestJS',      level: 85, years: '5年', color: '#e11d48' },
      { name: 'Laravel',     level: 85, years: '5年', color: '#ef4444' },
      { name: 'Spring Boot', level: 80, years: '5年', color: '#6db33f' },
      { name: 'Node.js',     level: 85, years: '6年', color: '#16a34a' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database',
    color: '#2bb5a0', bg: 'linear-gradient(135deg, #2bb5a0, #34c78a)', icon: '🗄',
    skills: [
      { name: 'PostgreSQL', level: 80, years: '6年', color: '#1d4ed8' },
      { name: 'MySQL',      level: 85, years: '6年', color: '#2563eb' },
      { name: 'Redis',      level: 65, years: '3年', color: '#dc2626' },
    ],
  },
  {
    id: 'infra', label: 'インフラ', labelEn: 'Infrastructure',
    color: '#e8a949', bg: 'linear-gradient(135deg, #e8a949, #f59e0b)', icon: '☁',
    skills: [
      { name: 'AWS',            level: 75, years: '4年', color: '#d97706' },
      { name: 'Docker',         level: 75, years: '4年', color: '#0284c7' },
      { name: 'GitHub Actions', level: 70, years: '3年', color: '#16a34a' },
      { name: 'Linux',          level: 70, years: '5年', color: '#6b7280' },
    ],
  },
];

const SOFTWARES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Spring Boot', 'Laravel', 'PHP', 'Java',
  'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'Tailwind CSS', 'Figma'];

const STATS = [
  { value: '5+',   label: '年の実務経験',   color: '#2bb5a0' },
  { value: '30+',  label: '完了プロジェクト', color: '#3a7bd5' },
  { value: '4社',  label: '継続取引実績',    color: '#8b5cf6' },
  { value: '99.9%',label: '稼働率',         color: '#e8a949' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
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
        style={{ background: 'linear-gradient(160deg, rgba(237,230,204,0.93) 0%, rgba(232,225,198,0.90) 100%)' }}
      />

      <div className="section-inner max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Skills and Fees</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>
            スキル・料金等
          </h2>
          <div className="divider" />
        </motion.div>

        {/* ── Block 1: 参考単価 ── */}
        <motion.div className="text-center mb-10"
          variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-[10px] font-bold tracking-[0.3em] mb-4" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>
            ✦ 参考単価
          </div>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <span className="text-xl font-black" style={{ color: '#2bb5a0' }}>¥30,000</span>
            <span style={{ color: '#8c7d65', fontSize: '0.8rem' }}>〜 / 回（スポット相談）</span>
            <span style={{ color: '#a89880', fontSize: '0.7rem' }}>|</span>
            <span className="text-xl font-black" style={{ color: '#3a7bd5' }}>¥300,000</span>
            <span style={{ color: '#8c7d65', fontSize: '0.8rem' }}>〜 / プロジェクト</span>
          </div>
        </motion.div>

        {/* ── Block 2: 使用可能ソフト / スキルカテゴリ ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Skill categories with progress bars */}
          <motion.div
            variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div className="text-[10px] font-bold tracking-[0.3em] px-5 pt-4 pb-2"
              style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ スキルレベル</div>
            <div className="px-5 pb-5 space-y-4">
              {CATEGORIES.map(cat => (
                <div key={cat.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ fontSize: '0.9rem' }}>{cat.icon}</span>
                    <span className="text-xs font-bold" style={{ color: cat.color }}>{cat.label}</span>
                  </div>
                  <div className="space-y-1.5">
                    {cat.skills.map((s, si) => (
                      <div key={s.name}>
                        <div className="flex justify-between mb-0.5">
                          <span className="text-[11px] font-medium" style={{ color: '#5a4e3a' }}>{s.name}</span>
                          <span className="text-[10px] font-mono" style={{ color: s.color }}>{s.years}</span>
                        </div>
                        <div className="progress-track">
                          <motion.div
                            className="progress-bar"
                            style={{ background: `linear-gradient(90deg, ${s.color}66, ${s.color})` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: si * 0.06, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 使用可能ソフト + 稼働時間 */}
          <div className="space-y-5">
            {/* Software */}
            <motion.div
              variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl p-5"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="text-[10px] font-bold tracking-[0.3em] mb-3"
                style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ 使用可能ソフト</div>
              <div className="flex flex-wrap gap-1.5">
                {SOFTWARES.map((s, i) => {
                  const colors = ['#3a7bd5','#2bb5a0','#e86c5d','#8b5cf6','#e8a949','#34c78a'];
                  const c = colors[i % colors.length];
                  return (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.025 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '0.2rem 0.65rem', borderRadius: '999px',
                        fontSize: '0.7rem', fontWeight: 600,
                        background: `${c}10`, border: `1px solid ${c}28`, color: c,
                      }}
                    >
                      {s}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            {/* 稼働時間 */}
            <motion.div
              variants={fadeUp(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl p-5 text-center"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(43,181,160,0.20)',
                boxShadow: 'var(--shadow-sm)',
              }}>
              <div className="text-[10px] font-bold tracking-[0.3em] mb-3"
                style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ 稼働時間</div>
              <p className="text-2xl font-black mb-1" style={{ color: '#2d2416' }}>週３０時間程度</p>
              <p className="text-xs" style={{ color: '#8c7d65' }}>（案件に応じて柔軟に対応可能）</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="p-3 rounded-xl text-center"
                  style={{ background: 'var(--surface)', border: `1px solid ${s.color}18` }}
                >
                  <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] leading-tight mt-0.5" style={{ color: '#8c7d65' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
