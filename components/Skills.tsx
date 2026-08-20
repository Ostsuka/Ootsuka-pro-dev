'use client';
import { motion } from 'framer-motion';

interface Skill { name: string; level: number; years: string; color: string; }

const CATEGORIES = [
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend',
    color: '#3a7bd5', bg: 'linear-gradient(135deg, #3a7bd5, #60a5fa)',
    icon: '⚛',
    skills: [
      { name: 'React',      level: 90, years: '6年', color: '#0ea5e9' },
      { name: 'Next.js',    level: 85, years: '5年', color: '#334155' },
      { name: 'TypeScript', level: 90, years: '6年', color: '#3178c6' },
      { name: 'JavaScript', level: 90, years: '6年', color: '#ca8a04' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend',
    color: '#e86c5d', bg: 'linear-gradient(135deg, #e86c5d, #f97316)',
    icon: '⚙',
    skills: [
      { name: 'NestJS',      level: 85, years: '5年', color: '#e11d48' },
      { name: 'Laravel',     level: 85, years: '5年', color: '#ef4444' },
      { name: 'Spring Boot', level: 80, years: '5年', color: '#6db33f' },
      { name: 'Node.js',     level: 85, years: '6年', color: '#16a34a' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database',
    color: '#2bb5a0', bg: 'linear-gradient(135deg, #2bb5a0, #34c78a)',
    icon: '🗄',
    skills: [
      { name: 'PostgreSQL', level: 80, years: '6年', color: '#1d4ed8' },
      { name: 'MySQL',      level: 85, years: '6年', color: '#2563eb' },
      { name: 'Redis',      level: 65, years: '3年', color: '#dc2626' },
    ],
  },
  {
    id: 'infra', label: 'インフラ', labelEn: 'Infrastructure',
    color: '#e8a949', bg: 'linear-gradient(135deg, #e8a949, #f59e0b)',
    icon: '☁',
    skills: [
      { name: 'AWS',            level: 75, years: '4年', color: '#d97706' },
      { name: 'Docker',         level: 75, years: '4年', color: '#0284c7' },
      { name: 'GitHub Actions', level: 70, years: '3年', color: '#16a34a' },
      { name: 'Linux',          level: 70, years: '5年', color: '#6b7280' },
    ],
  },
];

const ALL_TAGS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Jest',
  'Spring Boot', 'Laravel', 'PHP', 'Java', 'Python',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
  'AWS', 'Docker', 'Terraform', 'GitHub Actions', 'CI/CD',
  'Figma', 'Tailwind CSS',
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: skill.color }} />
          <span className="text-sm font-semibold" style={{ color: '#2d2416' }}>{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px]" style={{ color: '#a89880', fontFamily: 'monospace' }}>{skill.years}</span>
          <span className="text-xs font-black w-7 text-right" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-bar"
          style={{ background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: index * 0.07, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      {/* Background – programmer focused at laptop in warm office light */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(237,230,204,0.91)' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">SKILLS &amp; EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>スキル・技術スタック</h2>
          <div className="divider" />
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8c7d65' }}>
            100以上の案件でチームと協力して培い、プロジェクトマネジメントまで全スキルでご支援します。
          </p>
        </motion.div>

        {/* Category cards 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {CATEGORIES.map((cat, ci) => (
            <motion.div key={cat.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1 + ci * 0.08)}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: `1px solid ${cat.color}18`, boxShadow: '0 2px 16px rgba(45,36,22,0.07)' }}>
              {/* Coloured header */}
              <div className="px-5 py-3.5 flex items-center gap-3" style={{ background: cat.bg }}>
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <div className="font-bold text-sm text-white">{cat.label}</div>
                  <div className="text-[10px] text-white/70 font-mono">{cat.labelEn}</div>
                </div>
              </div>
              <div className="p-5">
                {cat.skills.map((s, si) => <SkillBar key={s.name} skill={s} index={si} />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.3)}>
          {[
            { value: '50+', label: 'プロジェクト数',  icon: '🚀', color: '#2bb5a0' },
            { value: '10+', label: '使用技術数',      icon: '🛠',  color: '#3a7bd5' },
            { value: '30+', label: 'クライアント数',   icon: '💜', color: '#8b5cf6' },
            { value: '99.9%', label: '稼働率',        icon: '⚡', color: '#e8a949' },
          ].map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: '#fff', border: `1px solid ${s.color}18`, boxShadow: '0 2px 10px rgba(45,36,22,0.06)' }}>
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-2xl font-black leading-none" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs mt-0.5" style={{ color: '#8c7d65' }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All tech tags */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.35)}
          className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(45,36,22,0.08)', boxShadow: '0 2px 12px rgba(45,36,22,0.06)' }}>
          <div className="text-[10px] font-bold tracking-[0.3em] mb-4" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ 使用技術一覧</div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag, i) => {
              const colors = ['#3a7bd5', '#2bb5a0', '#e86c5d', '#8b5cf6', '#e8a949', '#34c78a'];
              const c = colors[i % colors.length];
              return (
                <motion.span key={tag}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.025 }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: `${c}10`, border: `1px solid ${c}28`, color: c }}>
                  {tag}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
