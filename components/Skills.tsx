'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircuitBackground from './backgrounds/CircuitBackground';

/* ── Data ────────────────────────────────────────── */
interface Skill { name: string; level: number; years: string; color: string; desc: string; }
interface Category {
  id: string; label: string; labelEn: string; color: string; icon: string; skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    id: 'lang', label: '言語', labelEn: 'Languages', color: '#00d4ff', icon: '{ }',
    skills: [
      { name: 'TypeScript',  level: 90, years: '6年', color: '#3178c6', desc: '型設計・ジェネリクス・型安全API' },
      { name: 'JavaScript',  level: 90, years: '6年', color: '#f7df1e', desc: 'ES2022+・非同期・モジュール設計' },
      { name: 'PHP',         level: 85, years: '5年', color: '#8892bf', desc: 'Laravel・API実装・テスト記述' },
      { name: 'Java',        level: 80, years: '5年', color: '#f89820', desc: 'Spring Boot・JPA・REST API' },
      { name: 'Python',      level: 70, years: '6年', color: '#3776ab', desc: 'データ処理・スクリプト補助' },
    ],
  },
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend', color: '#61dafb', icon: '⚛',
    skills: [
      { name: 'React',   level: 90, years: '6年', color: '#61dafb', desc: 'Hooks・状態管理・コンポーネント設計' },
      { name: 'Next.js', level: 85, years: '5年', color: '#e2e8f0', desc: 'App Router・SSR/SSG・最適化' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend', color: '#e0234e', icon: '⚙',
    skills: [
      { name: 'NestJS',      level: 85, years: '5年', color: '#e0234e', desc: 'DI・Guards・Queue・モジュール設計' },
      { name: 'Laravel',     level: 85, years: '5年', color: '#ff2d20', desc: 'Eloquent・Policy・API実装' },
      { name: 'Spring Boot', level: 80, years: '5年', color: '#6db33f', desc: 'REST API・JPA・レガシー移行' },
      { name: 'Node.js',     level: 85, years: '6年', color: '#339933', desc: 'Express・非同期・ミドルウェア' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database', color: '#4479a1', icon: '🗄',
    skills: [
      { name: 'MySQL',      level: 85, years: '6年', color: '#4479a1', desc: 'インデックス最適化・スキーマ設計' },
      { name: 'PostgreSQL', level: 80, years: '6年', color: '#336791', desc: 'トランザクション・パフォーマンス最適化' },
    ],
  },
  {
    id: 'infra', label: 'インフラ', labelEn: 'Infrastructure', color: '#ff9900', icon: '☁',
    skills: [
      { name: 'AWS',            level: 75, years: '4年', color: '#ff9900', desc: 'EC2・ECS Fargate・RDS・S3・CloudWatch' },
      { name: 'Docker',         level: 75, years: '4年', color: '#2496ed', desc: 'コンテナ化・Compose・CI/CD連携' },
      { name: 'GitHub Actions', level: 70, years: '3年', color: '#2ea44f', desc: '自動テスト・自動デプロイパイプライン' },
    ],
  },
];

/* ── Radar Chart ─────────────────────────────────── */
function RadarChart() {
  const points = [
    { label: 'Frontend',   value: 0.90, angle: -90  },
    { label: 'Backend',    value: 0.85, angle: -18  },
    { label: 'Database',   value: 0.85, angle:  54  },
    { label: 'Infra',      value: 0.75, angle:  126 },
    { label: 'Languages',  value: 0.88, angle:  198 },
  ];
  const cx = 140; const cy = 140; const R = 96;

  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });

  const polygon = points.map(p => {
    const { x, y } = toXY(p.angle, R * p.value);
    return `${x},${y}`;
  }).join(' ');

  const outerPolygon = points.map(p => {
    const { x, y } = toXY(p.angle, R);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="280" height="280" className="mx-auto">
      {/* Outer polygon fill */}
      <polygon points={outerPolygon} fill="rgba(0,212,255,0.02)" stroke="none" />

      {/* Grid rings */}
      {[0.25, 0.5, 0.75, 1].map(r => (
        <polygon
          key={r}
          points={points.map(p => { const { x, y } = toXY(p.angle, R * r); return `${x},${y}`; }).join(' ')}
          fill="none"
          stroke={r === 1 ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.05)'}
          strokeWidth="1"
        />
      ))}

      {/* Spokes */}
      {points.map(p => {
        const outer = toXY(p.angle, R);
        return (
          <line
            key={p.label}
            x1={cx} y1={cy}
            x2={outer.x} y2={outer.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        );
      })}

      {/* Level markers */}
      {[0.5, 0.75].map(r => (
        <text
          key={r}
          x={cx + 4}
          y={cy - R * r - 4}
          fill="rgba(255,255,255,0.15)"
          fontSize="8"
          fontFamily="monospace"
        >
          {Math.round(r * 100)}%
        </text>
      ))}

      {/* Filled polygon */}
      <motion.polygon
        points={polygon}
        fill="rgba(0,212,255,0.10)"
        stroke="#00d4ff"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Secondary polygon (violet tint) */}
      <motion.polygon
        points={points.map(p => {
          const { x, y } = toXY(p.angle, R * p.value * 0.88);
          return `${x},${y}`;
        }).join(' ')}
        fill="rgba(167,139,250,0.06)"
        stroke="rgba(167,139,250,0.3)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Dots */}
      {points.map(p => {
        const { x, y } = toXY(p.angle, R * p.value);
        return (
          <motion.g key={p.label}>
            <motion.circle
              cx={x} cy={y} r={6}
              fill="rgba(0,212,255,0.15)"
              stroke="#00d4ff"
              strokeWidth="0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            />
            <motion.circle
              cx={x} cy={y} r={3.5}
              fill="#00d4ff"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, type: 'spring', stiffness: 400 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
          </motion.g>
        );
      })}

      {/* Labels */}
      {points.map(p => {
        const { x, y } = toXY(p.angle, R * 1.25);
        return (
          <text
            key={p.label}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#3d5470"
            fontSize="9.5"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="500"
          >
            {p.label}
          </text>
        );
      })}

      {/* Center label */}
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#3d5470" fontSize="9" fontFamily="monospace">URAN</text>
      <text x={cx} y={cy + 4}  textAnchor="middle" fill="#1e293b" fontSize="8" fontFamily="monospace">SKILL MAP</text>
    </svg>
  );
}

/* ── Skill bar ───────────────────────────────────── */
function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: skill.color, boxShadow: `0 0 6px ${skill.color}88` }} />
          <span className="text-sm font-bold" style={{ color: '#e2e8f0' }}>{skill.name}</span>
          <span className="text-[10px] hidden group-hover:inline-block transition-opacity" style={{ color: '#3d5470' }}>
            — {skill.desc}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px]" style={{ color: '#3d5470', fontFamily: 'monospace' }}>{skill.years}</span>
          <span className="text-xs font-black w-8 text-right" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div className="progress-track mb-4">
        <motion.div
          className="progress-bar"
          style={{ background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.06 + 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

/* ── Main ────────────────────────────────────────── */
export default function Skills() {
  const [active, setActive] = useState<string>('all');

  const tabs = [{ id: 'all', label: 'すべて', color: '#00d4ff', icon: '⊞' }, ...CATEGORIES];
  const visibleCats = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === active);

  return (
    <section id="skills" className="section relative" style={{ background: '#04070f' }}>
      {/* Background photo — developer focused on code / technology workspace */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(160deg, rgba(4,7,15,0.95) 0%, rgba(4,7,15,0.90) 50%, rgba(4,7,15,0.95) 100%)',
      }} />

      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="section-label justify-center">TECHNICAL SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#f0f6ff' }}>
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
          {tabs.map(tab => {
            const isActive = active === tab.id;
            const color = 'color' in tab ? tab.color : '#00d4ff';
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  background: isActive ? `${color}18` : 'rgba(255,255,255,0.03)',
                  border:     isActive ? `1px solid ${color}44` : '1px solid rgba(255,255,255,0.07)',
                  color:      isActive ? color : '#3d5470',
                  transform:  isActive ? 'scale(1.05)' : 'scale(1)',
                  boxShadow:  isActive ? `0 0 16px ${color}20` : 'none',
                }}
              >
                <span>{'icon' in tab ? tab.icon : ''}</span>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1 sticky top-24"
          >
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(11,18,34,0.7)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div className="text-[10px] font-bold tracking-widest mb-2 text-center" style={{ color: '#00d4ff', fontFamily: 'monospace' }}>
                SKILL RADAR
              </div>
              <RadarChart />

              {/* Legend */}
              <div className="mt-4 space-y-2.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {[
                  { range: '85–100%', label: '実務・自走可能',   color: '#00d4ff' },
                  { range: '70–84%',  label: 'チーム開発対応可', color: '#a78bfa' },
                  { range: '60–69%',  label: '実務経験あり',     color: '#10b981' },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-2.5 text-[11px]">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
                    <span style={{ color: '#3d5470', fontFamily: 'monospace' }}>{l.range}</span>
                    <span style={{ color: '#8fa3bf' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill bars */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
              >
                {visibleCats.map(cat => (
                  <div
                    key={cat.id}
                    className="p-6 rounded-2xl mb-5 last:mb-0"
                    style={{
                      background: 'rgba(11,18,34,0.65)',
                      border: `1px solid ${cat.color}18`,
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: `${cat.color}18`, color: cat.color }}
                      >
                        {cat.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold tracking-widest" style={{ color: cat.color, fontFamily: 'monospace' }}>
                          {cat.labelEn.toUpperCase()}
                        </h3>
                        <span className="text-[11px]" style={{ color: '#1e293b' }}>/ {cat.label}</span>
                      </div>
                      <div className="ml-auto">
                        <span
                          className="text-[10px] px-2 py-0.5 rounded"
                          style={{ background: `${cat.color}10`, color: `${cat.color}88`, fontFamily: 'monospace' }}
                        >
                          {cat.skills.length} items
                        </span>
                      </div>
                    </div>

                    {/* Skills */}
                    {cat.skills.map((s, si) => (
                      <SkillBar key={s.name} skill={s} index={si} />
                    ))}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
