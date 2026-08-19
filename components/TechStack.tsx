'use client';
import { motion } from 'framer-motion';
import CircuitBackground from './backgrounds/CircuitBackground';

/* ── Data ───────────────────────────────────────── */
type Level = 'Expert' | 'Advanced' | 'Proficient';

interface Tech {
  name: string;
  icon: string;
  color: string;
  years: string;
  level: Level;
  desc: string;
}

const LEVEL_CONFIG: Record<Level, { label: string; color: string; bg: string; bar: number }> = {
  Expert:     { label: 'Expert',     color: '#00c8f0', bg: 'rgba(0,200,240,0.1)',    bar: 95 },
  Advanced:   { label: 'Advanced',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',  bar: 80 },
  Proficient: { label: 'Proficient', color: '#10b981', bg: 'rgba(16,185,129,0.1)',  bar: 65 },
};

const GROUPS: { category: string; categoryEn: string; color: string; techs: Tech[] }[] = [
  {
    category: 'フロントエンド', categoryEn: 'Frontend', color: '#61dafb',
    techs: [
      { name: 'React',      icon: '⚛',  color: '#61dafb', years: '6年', level: 'Expert',    desc: 'コンポーネント設計・hooks・状態管理・API 連携' },
      { name: 'Next.js',    icon: '▲',  color: '#e2e8f0', years: '5年', level: 'Advanced',  desc: 'App Router・SSR / SSG・API Routes・最適化' },
      { name: 'TypeScript', icon: 'TS', color: '#3178c6', years: '6年', level: 'Expert',    desc: '型設計・ジェネリクス・型安全 API・ユーティリティ型' },
      { name: 'JavaScript', icon: 'JS', color: '#f7df1e', years: '6年', level: 'Expert',    desc: 'ES2022+・非同期・DOM 操作・モジュール設計' },
    ],
  },
  {
    category: 'バックエンド', categoryEn: 'Backend', color: '#e0234e',
    techs: [
      { name: 'NestJS',      icon: '🦁', color: '#e0234e', years: '5年', level: 'Advanced',  desc: 'DI・Guards・Pipes・Queue・モジュール設計' },
      { name: 'Laravel',     icon: '🔴', color: '#ff2d20', years: '5年', level: 'Advanced',  desc: 'Eloquent・Policy・Queue・API 実装' },
      { name: 'Spring Boot', icon: '🍃', color: '#6db33f', years: '5年', level: 'Advanced',  desc: 'REST API・JPA・バグ修正・レガシー移行' },
      { name: 'Node.js',     icon: '🟢', color: '#339933', years: '6年', level: 'Advanced',  desc: 'Express・非同期処理・ストリーム・ミドルウェア' },
      { name: 'PHP',         icon: '🐘', color: '#8892bf', years: '5年', level: 'Advanced',  desc: 'Laravel・API 実装・PHPUnit テスト記述' },
      { name: 'Python',      icon: '🐍', color: '#3776ab', years: '6年', level: 'Proficient', desc: 'データ処理・スクリプト・バックエンド補助' },
    ],
  },
  {
    category: 'データベース', categoryEn: 'Database', color: '#4479a1',
    techs: [
      { name: 'MySQL',      icon: '🐬', color: '#4479a1', years: '6年', level: 'Advanced', desc: 'インデックス最適化・スキーマ設計・複雑 SQL' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791', years: '6年', level: 'Advanced', desc: 'CRUD・トランザクション・パフォーマンスチューニング' },
    ],
  },
  {
    category: 'インフラ / DevOps', categoryEn: 'Infrastructure', color: '#ff9900',
    techs: [
      { name: 'AWS',            icon: '☁',  color: '#ff9900', years: '4年', level: 'Proficient', desc: 'EC2・ECS Fargate・RDS・S3・CloudWatch' },
      { name: 'Docker',         icon: '🐳', color: '#2496ed', years: '4年', level: 'Proficient', desc: 'コンテナ化・Compose・CI/CD 連携' },
      { name: 'GitHub Actions', icon: '⚙',  color: '#2ea44f', years: '3年', level: 'Proficient', desc: '自動テスト・自動デプロイパイプライン構築' },
      { name: 'Git / GitHub',   icon: '🌿', color: '#f1502f', years: '4年', level: 'Advanced',   desc: 'PR レビュー・ブランチ戦略・チーム開発運用' },
    ],
  },
];

/* ── Tech card ───────────────────────────────────── */
function TechCard({ tech, gi, ti }: { tech: Tech; gi: number; ti: number }) {
  const lc = LEVEL_CONFIG[tech.level];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: gi * 0.08 + ti * 0.05, duration: 0.5 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="p-4 rounded-xl flex flex-col gap-3"
      style={{
        background: 'rgba(14,22,40,0.7)',
        border: `1px solid ${tech.color}18`,
        backdropFilter: 'blur(8px)',
        cursor: 'default',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{ background: `${tech.color}15`, color: tech.color }}
          >
            {tech.icon}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-sm truncate" style={{ color: '#f1f5f9' }}>{tech.name}</div>
            <div className="text-[11px] font-mono" style={{ color: '#334155' }}>{tech.years}</div>
          </div>
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
          style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.color}30` }}
        >
          {lc.label}
        </span>
      </div>

      {/* Mini progress bar */}
      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${tech.color}66, ${tech.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${lc.bar}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: gi * 0.08 + ti * 0.05 + 0.2, ease: 'easeOut' }}
        />
      </div>

      {/* Description */}
      <p className="text-[11px] leading-5" style={{ color: '#64748b' }}>{tech.desc}</p>
    </motion.div>
  );
}

/* ── Main ────────────────────────────────────────── */
export default function TechStack() {
  return (
    <section id="tech" className="section relative" style={{ background: '#080d1a' }}>
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="section-label justify-center">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            技術スタック
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Level legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {Object.entries(LEVEL_CONFIG).map(([key, lc]) => (
            <div
              key={key}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.color}35` }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: lc.color }} />
              {lc.label}
              <span style={{ color: lc.color + '80', fontWeight: 400 }}>— {
                key === 'Expert' ? '実務・自走可' :
                key === 'Advanced' ? 'チーム開発対応可' : '実務経験あり'
              }</span>
            </div>
          ))}
        </motion.div>

        {/* Groups */}
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            className="mb-12 last:mb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
          >
            {/* Group header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 rounded-full" style={{ background: group.color }} />
              <h3 className="text-xs font-mono tracking-widest" style={{ color: group.color }}>
                {group.categoryEn.toUpperCase()}
              </h3>
              <span className="text-xs" style={{ color: '#1e293b' }}>/ {group.category}</span>
              <div className="flex-1 h-px" style={{ background: `${group.color}18` }} />
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded"
                style={{ background: `${group.color}10`, color: group.color + '80' }}
              >
                {group.techs.length} items
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {group.techs.map((tech, ti) => (
                <TechCard key={tech.name} tech={tech} gi={gi} ti={ti} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
