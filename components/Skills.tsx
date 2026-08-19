'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircuitBackground from './backgrounds/CircuitBackground';

/* ── Data ───────────────────────────────────────── */
interface Skill { name: string; level: number; years: string; color: string; }

const CATEGORIES: { id: string; label: string; labelEn: string; color: string; skills: Skill[] }[] = [
  {
    id: 'lang', label: '言語', labelEn: 'Languages', color: '#00c8f0',
    skills: [
      { name: 'TypeScript',  level: 90, years: '6年', color: '#3178c6' },
      { name: 'JavaScript',  level: 90, years: '6年', color: '#f7df1e' },
      { name: 'PHP',         level: 85, years: '5年', color: '#8892bf' },
      { name: 'Java',        level: 80, years: '5年', color: '#f89820' },
      { name: 'Python',      level: 70, years: '6年', color: '#3776ab' },
    ],
  },
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend', color: '#61dafb',
    skills: [
      { name: 'React',     level: 90, years: '6年', color: '#61dafb' },
      { name: 'Next.js',   level: 85, years: '5年', color: '#e2e8f0' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend', color: '#e0234e',
    skills: [
      { name: 'NestJS',      level: 85, years: '5年', color: '#e0234e' },
      { name: 'Laravel',     level: 85, years: '5年', color: '#ff2d20' },
      { name: 'Spring Boot', level: 80, years: '5年', color: '#6db33f' },
      { name: 'Node.js',     level: 85, years: '6年', color: '#339933' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database', color: '#4479a1',
    skills: [
      { name: 'MySQL',      level: 85, years: '6年', color: '#4479a1' },
      { name: 'PostgreSQL', level: 80, years: '6年', color: '#336791' },
    ],
  },
  {
    id: 'infra', label: 'インフラ', labelEn: 'Infrastructure', color: '#ff9900',
    skills: [
      { name: 'AWS',            level: 75, years: '4年', color: '#ff9900' },
      { name: 'Docker',         level: 75, years: '4年', color: '#2496ed' },
      { name: 'GitHub Actions', level: 70, years: '3年', color: '#2ea44f' },
    ],
  },
];

const ALL_SKILLS = CATEGORIES.flatMap(c => c.skills.map(s => ({ ...s, category: c.id })));

/* ── Skill bar row ───────────────────────────────── */
function SkillRow({ skill, index, visible }: { skill: Skill; index: number; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: skill.color }} />
          <span className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{skill.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono" style={{ color: '#475569' }}>{skill.years}</span>
          <span className="text-xs font-bold w-8 text-right" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden mb-4"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={visible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

/* ── Radar / Hexagon visual ──────────────────────── */
function RadarChart() {
  const points = [
    { label: 'Frontend',     value: 0.90, angle: -90  },
    { label: 'Backend',      value: 0.85, angle: -18  },
    { label: 'Database',     value: 0.85, angle:  54  },
    { label: 'Infra/Cloud',  value: 0.75, angle:  126 },
    { label: 'Languages',    value: 0.88, angle:  198 },
  ];
  const cx = 130; const cy = 130; const R = 90;

  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });

  const polygon = points
    .map(p => { const { x, y } = toXY(p.angle, R * p.value); return `${x},${y}`; })
    .join(' ');

  return (
    <svg width="260" height="260" className="mx-auto">
      {/* Grid rings */}
      {[0.25, 0.5, 0.75, 1].map(r => (
        <polygon
          key={r}
          points={points.map(p => { const { x, y } = toXY(p.angle, R * r); return `${x},${y}`; }).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}
      {/* Spokes */}
      {points.map(p => {
        const outer = toXY(p.angle, R);
        return <line key={p.label} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />;
      })}
      {/* Filled polygon */}
      <motion.polygon
        points={polygon}
        fill="rgba(0,200,240,0.12)"
        stroke="rgba(0,200,240,0.6)"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Dots */}
      {points.map(p => {
        const { x, y } = toXY(p.angle, R * p.value);
        return (
          <motion.circle
            key={p.label}
            cx={x} cy={y} r={4}
            fill="#00c8f0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          />
        );
      })}
      {/* Labels */}
      {points.map(p => {
        const { x, y } = toXY(p.angle, R * 1.22);
        return (
          <text
            key={p.label}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#64748b"
            fontSize="10"
            fontFamily="monospace"
          >
            {p.label}
          </text>
        );
      })}
    </svg>
  );
}

/* ── Main component ──────────────────────────────── */
export default function Skills() {
  const [active, setActive] = useState<string>('all');

  const visibleCats = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === active);
  const visibleSkills = active === 'all'
    ? ALL_SKILLS
    : CATEGORIES.find(c => c.id === active)?.skills.map(s => ({ ...s, category: active })) ?? [];

  return (
    <section id="skills" className="section relative" style={{ background: '#050810' }}>
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="section-label justify-center">TECHNICAL SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            スキルセット
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {[{ id: 'all', label: 'すべて', color: '#00c8f0' }, ...CATEGORIES].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: active === tab.id ? `${tab.color}18` : 'rgba(255,255,255,0.03)',
                border:     active === tab.id ? `1px solid ${tab.color}40` : '1px solid rgba(255,255,255,0.07)',
                color:      active === tab.id ? tab.color : '#64748b',
                transform:  active === tab.id ? 'scale(1.04)' : 'scale(1)',
              }}
            >
              {'label' in tab ? tab.label : (tab as typeof CATEGORIES[0]).label}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Left: Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(14,22,40,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-xs font-mono tracking-widest mb-4 text-center" style={{ color: '#00c8f0' }}>
                SKILL RADAR
              </h3>
              <RadarChart />

              {/* Legend */}
              <div className="mt-4 space-y-2">
                {[
                  { range: '85–100%', label: '実務・自走可能',     color: '#00c8f0' },
                  { range: '70–84%',  label: 'チーム開発対応可',   color: '#8b5cf6' },
                  { range: '60–69%',  label: '実務経験あり',       color: '#10b981' },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
                    <span style={{ color: '#475569' }}>{l.range}</span>
                    <span style={{ color: '#94a3b8' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skill bars */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {visibleCats.map((cat, ci) => {
                  const catSkills = active === 'all' ? cat.skills : visibleSkills as Skill[];
                  if (active !== 'all' && cat.id !== active) return null;
                  return (
                    <div
                      key={cat.id}
                      className="p-6 rounded-2xl mb-5"
                      style={{
                        background: 'rgba(14,22,40,0.6)',
                        border: `1px solid ${cat.color}18`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-5 rounded-full" style={{ background: cat.color }} />
                        <h3 className="text-xs font-mono tracking-widest" style={{ color: cat.color }}>
                          {cat.labelEn.toUpperCase()}
                        </h3>
                        <span className="text-xs" style={{ color: '#334155' }}>/ {cat.label}</span>
                      </div>
                      {catSkills.map((s, si) => (
                        <SkillRow key={s.name} skill={s} index={si} visible={true} />
                      ))}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
