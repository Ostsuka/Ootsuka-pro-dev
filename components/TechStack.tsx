'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CircuitBackground from './backgrounds/CircuitBackground';

/* ── Data ───────────────────────────────────────── */
type Level = 'Expert' | 'Advanced' | 'Proficient';

interface Tech {
  name: string;
  abbr: string;        /* short badge text */
  color: string;
  bg: string;          /* card bg tint */
  years: string;
  level: Level;
  desc: string;
  highlights: string[];
}

const LEVEL_CONFIG: Record<Level, { label: string; labelJa: string; color: string; bar: number; glow: string }> = {
  Expert:     { label: 'Expert',     labelJa: '実務・自走可能',     color: '#00c8f0', bar: 95, glow: 'rgba(0,200,240,0.25)' },
  Advanced:   { label: 'Advanced',   labelJa: 'チーム開発対応可',   color: '#8b5cf6', bar: 80, glow: 'rgba(139,92,246,0.25)' },
  Proficient: { label: 'Proficient', labelJa: '実務経験あり',       color: '#10b981', bar: 65, glow: 'rgba(16,185,129,0.25)' },
};

interface Group {
  category: string;
  categoryEn: string;
  color: string;
  icon: string;
  techs: Tech[];
}

const GROUPS: Group[] = [
  {
    category: 'フロントエンド', categoryEn: 'Frontend', color: '#61dafb', icon: '⚛',
    techs: [
      {
        name: 'React', abbr: 'Re', color: '#61dafb', bg: 'rgba(97,218,251,0.05)',
        years: '6年', level: 'Expert',
        desc: 'Hooks・状態管理・コンポーネント設計・API 連携',
        highlights: ['Hooks 完全習得', 'Context / Zustand', 'パフォーマンス最適化'],
      },
      {
        name: 'Next.js', abbr: 'Nx', color: '#e2e8f0', bg: 'rgba(226,232,240,0.04)',
        years: '5年', level: 'Advanced',
        desc: 'App Router・SSR / SSG・API Routes・最適化',
        highlights: ['App Router対応', 'SSR / SSG / ISR', 'Image / Font 最適化'],
      },
      {
        name: 'TypeScript', abbr: 'TS', color: '#3178c6', bg: 'rgba(49,120,198,0.06)',
        years: '6年', level: 'Expert',
        desc: '型設計・ジェネリクス・型安全 API・ユーティリティ型',
        highlights: ['型安全API設計', 'ジェネリクス活用', 'Strict モード運用'],
      },
      {
        name: 'JavaScript', abbr: 'JS', color: '#f7df1e', bg: 'rgba(247,223,30,0.04)',
        years: '6年', level: 'Expert',
        desc: 'ES2022+・非同期・DOM 操作・モジュール設計',
        highlights: ['ES2022+ 完全対応', '非同期処理設計', 'Webpack / Vite 設定'],
      },
    ],
  },
  {
    category: 'バックエンド', categoryEn: 'Backend', color: '#e0234e', icon: '⚙',
    techs: [
      {
        name: 'NestJS', abbr: 'Ns', color: '#e0234e', bg: 'rgba(224,35,78,0.05)',
        years: '5年', level: 'Advanced',
        desc: 'DI・Guards・Pipes・Bull Queue・モジュール設計',
        highlights: ['DI / IoC パターン', 'Bull キュー非同期処理', 'Swagger 自動生成'],
      },
      {
        name: 'Laravel', abbr: 'La', color: '#ff2d20', bg: 'rgba(255,45,32,0.05)',
        years: '5年', level: 'Advanced',
        desc: 'Eloquent・Policy・Queue・API 実装',
        highlights: ['Eloquent ORM', 'Policy / Gate 認可', 'PHPUnit テスト'],
      },
      {
        name: 'Spring Boot', abbr: 'Sb', color: '#6db33f', bg: 'rgba(109,179,63,0.05)',
        years: '5年', level: 'Advanced',
        desc: 'REST API・JPA・レガシーシステム移行',
        highlights: ['REST API 設計', 'JPA / Hibernate', 'レガシー AWS 移行'],
      },
      {
        name: 'Node.js', abbr: 'No', color: '#339933', bg: 'rgba(51,153,51,0.05)',
        years: '6年', level: 'Advanced',
        desc: 'Express・非同期処理・ストリーム・ミドルウェア',
        highlights: ['Express ミドルウェア', '非同期ストリーム', 'JWT / OAuth2 認証'],
      },
      {
        name: 'PHP', abbr: 'Ph', color: '#8892bf', bg: 'rgba(136,146,191,0.05)',
        years: '5年', level: 'Advanced',
        desc: 'Laravel・API 実装・PHPUnit テスト',
        highlights: ['Laravel フレームワーク', 'RESTful API', 'PHPUnit / Feature Test'],
      },
      {
        name: 'Python', abbr: 'Py', color: '#3776ab', bg: 'rgba(55,118,171,0.05)',
        years: '6年', level: 'Proficient',
        desc: 'データ処理・バッチスクリプト・バックエンド補助',
        highlights: ['データ処理スクリプト', 'バッチ自動化', 'AWS Lambda 補助'],
      },
    ],
  },
  {
    category: 'データベース', categoryEn: 'Database', color: '#4479a1', icon: '🗄',
    techs: [
      {
        name: 'MySQL', abbr: 'My', color: '#4479a1', bg: 'rgba(68,121,161,0.06)',
        years: '6年', level: 'Advanced',
        desc: 'インデックス最適化・スキーマ設計・複雑 SQL',
        highlights: ['インデックス最適化', 'ストアドプロシージャ', 'バルクインサート対応'],
      },
      {
        name: 'PostgreSQL', abbr: 'Pg', color: '#336791', bg: 'rgba(51,103,145,0.06)',
        years: '6年', level: 'Advanced',
        desc: 'トランザクション・パフォーマンスチューニング',
        highlights: ['EXPLAIN ANALYZE', 'トランザクション制御', 'データ移行・整合性保証'],
      },
    ],
  },
  {
    category: 'インフラ / DevOps', categoryEn: 'Infrastructure', color: '#ff9900', icon: '☁',
    techs: [
      {
        name: 'AWS', abbr: 'Aw', color: '#ff9900', bg: 'rgba(255,153,0,0.05)',
        years: '4年', level: 'Proficient',
        desc: 'EC2・ECS Fargate・RDS・S3・CloudWatch',
        highlights: ['ECS Fargate 本番運用', 'CloudWatch 監視設定', 'VPC / IAM 設計'],
      },
      {
        name: 'Docker', abbr: 'Do', color: '#2496ed', bg: 'rgba(36,150,237,0.05)',
        years: '4年', level: 'Proficient',
        desc: 'コンテナ化・Docker Compose・CI/CD 連携',
        highlights: ['マルチステージビルド', 'Compose 開発環境', 'イメージ最適化'],
      },
      {
        name: 'GitHub Actions', abbr: 'Ga', color: '#2ea44f', bg: 'rgba(46,164,79,0.05)',
        years: '3年', level: 'Proficient',
        desc: '自動テスト・自動デプロイパイプライン',
        highlights: ['CI/CD パイプライン', 'テスト自動実行', 'AWS デプロイ自動化'],
      },
      {
        name: 'Git / GitHub', abbr: 'Gi', color: '#f1502f', bg: 'rgba(241,80,47,0.05)',
        years: '6年', level: 'Advanced',
        desc: 'PR レビュー・ブランチ戦略・チーム開発',
        highlights: ['Git Flow 運用', 'PR レビュー経験', 'コンフリクト解消'],
      },
    ],
  },
];

/* ── Tech Card ───────────────────────────────────── */
function TechCard({ tech, gi, ti }: { tech: Tech; gi: number; ti: number }) {
  const [hovered, setHovered] = useState(false);
  const lc = LEVEL_CONFIG[tech.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: gi * 0.05 + ti * 0.04, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl flex flex-col overflow-hidden cursor-default"
      style={{
        background: tech.bg,
        border: `1px solid ${hovered ? tech.color + '35' : tech.color + '14'}`,
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 8px 32px ${tech.color}18, 0 0 0 1px ${tech.color}12` : 'none',
      }}
    >
      {/* Top color accent */}
      <div className="h-[2px]" style={{
        background: `linear-gradient(90deg, ${tech.color}, ${tech.color}44, transparent)`,
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s',
      }} />

      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            {/* Abbr badge */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
              style={{
                background: `${tech.color}18`,
                color: tech.color,
                border: `1px solid ${tech.color}28`,
                boxShadow: hovered ? `0 0 16px ${tech.color}30` : 'none',
                transition: 'box-shadow 0.3s',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '-0.02em',
              }}>
              {tech.abbr}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm truncate" style={{ color: '#f1f5f9' }}>{tech.name}</div>
              <div className="text-[10px] font-mono" style={{ color: '#334155' }}>{tech.years}</div>
            </div>
          </div>
          {/* Level chip */}
          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 whitespace-nowrap"
            style={{ background: `${lc.color}12`, color: lc.color, border: `1px solid ${lc.color}28` }}>
            {lc.label}
          </span>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[9px] font-mono" style={{ color: '#1e293b' }}>proficiency</span>
            <span className="text-[10px] font-black font-mono" style={{ color: lc.color }}>{lc.bar}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <motion.div className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${tech.color}55, ${tech.color})` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${lc.bar}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: gi * 0.05 + ti * 0.04 + 0.2, ease: 'easeOut' }} />
          </div>
        </div>

        {/* Description */}
        <p className="text-[11px] leading-5" style={{ color: '#64748b' }}>{tech.desc}</p>

        {/* Highlights (visible on hover) */}
        <AnimatePresence>
          {hovered && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="space-y-1 overflow-hidden"
            >
              {tech.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[11px]" style={{ color: lc.color }}>
                  <CheckCircle2 size={10} className="flex-shrink-0" />
                  <span style={{ color: '#8fa3bf' }}>{h}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ── Main ────────────────────────────────────────── */
export default function TechStack() {
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const tabs = [{ id: 'all', label: 'すべて', color: '#00d4ff' }, ...GROUPS.map(g => ({ id: g.categoryEn, label: g.category, color: g.color }))];
  const visible = activeGroup === 'all' ? GROUPS : GROUPS.filter(g => g.categoryEn === activeGroup);

  return (
    <section id="tech" className="section relative" style={{ background: '#080d1a' }}>
      <CircuitBackground />

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.25), rgba(139,92,246,0.25), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label justify-center">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            技術スタック
          </h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-lg mx-auto" style={{ color: '#64748b' }}>
            実務で積み上げた技術の一覧です。カードをホバーすると詳細なハイライトが確認できます。
          </p>
        </motion.div>

        {/* Level legend */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {Object.entries(LEVEL_CONFIG).map(([key, lc]) => (
            <div key={key} className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: `${lc.color}0d`, color: lc.color, border: `1px solid ${lc.color}28` }}>
              <div className="w-2 h-2 rounded-full" style={{ background: lc.color, boxShadow: `0 0 8px ${lc.glow}` }} />
              {lc.label}
              <span style={{ color: lc.color + '70', fontWeight: 400 }}>— {lc.labelJa}</span>
            </div>
          ))}
        </motion.div>

        {/* Category tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
          {tabs.map(tab => {
            const isActive = activeGroup === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveGroup(tab.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  background: isActive ? `${tab.color}18` : 'rgba(255,255,255,0.03)',
                  border: isActive ? `1px solid ${tab.color}44` : '1px solid rgba(255,255,255,0.07)',
                  color: isActive ? tab.color : '#3d5470',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 16px ${tab.color}20` : 'none',
                }}>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Groups */}
        <AnimatePresence mode="wait">
          <motion.div key={activeGroup}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}>
            {visible.map((group, gi) => (
              <motion.div key={group.categoryEn} className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: gi * 0.06, duration: 0.5 }}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: `${group.color}14`, color: group.color, border: `1px solid ${group.color}25` }}>
                    {group.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-mono font-bold tracking-widest" style={{ color: group.color }}>
                      {group.categoryEn.toUpperCase()}
                    </h3>
                    <span className="text-xs" style={{ color: '#1e293b' }}>/ {group.category}</span>
                  </div>
                  <div className="flex-1 h-px" style={{ background: `${group.color}14` }} />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{ background: `${group.color}0d`, color: group.color + '88' }}>
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
          </motion.div>
        </AnimatePresence>

        {/* Bottom summary strip */}
        <motion.div
          className="mt-16 rounded-2xl p-6 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ background: 'rgba(11,18,34,0.7)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}>
          {[
            { label: '習得言語・FW数',  value: `${GROUPS.reduce((a, g) => a + g.techs.length, 0)}+`, color: '#00d4ff' },
            { label: 'Expert レベル',   value: `${GROUPS.flatMap(g => g.techs).filter(t => t.level === 'Expert').length}項目`,   color: '#10b981' },
            { label: 'Advanced レベル', value: `${GROUPS.flatMap(g => g.techs).filter(t => t.level === 'Advanced').length}項目`, color: '#8b5cf6' },
            { label: '実務経験年数',    value: '5年+',   color: '#f59e0b' },
          ].map((s, i) => (
            <motion.div key={i} className="text-center"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[11px]" style={{ color: '#3d5470' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
