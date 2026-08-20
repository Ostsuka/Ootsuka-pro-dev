'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type Level = 'Expert' | 'Advanced' | 'Proficient';

interface Tech {
  name: string; abbr: string; color: string; bg: string;
  years: string; level: Level; desc: string; highlights: string[];
}

const LEVEL_CONFIG: Record<Level, { label: string; labelJa: string; color: string; bar: number }> = {
  Expert:     { label: 'Expert',     labelJa: '実務・自走可能',   color: '#0284c7', bar: 95 },
  Advanced:   { label: 'Advanced',   labelJa: 'チーム開発対応可', color: '#7c3aed', bar: 80 },
  Proficient: { label: 'Proficient', labelJa: '実務経験あり',     color: '#059669', bar: 65 },
};

interface Group { category: string; categoryEn: string; color: string; icon: string; techs: Tech[]; }

const GROUPS: Group[] = [
  {
    category: 'フロントエンド', categoryEn: 'Frontend', color: '#0ea5e9', icon: '⚛',
    techs: [
      { name:'React',      abbr:'Re', color:'#0ea5e9', bg:'rgba(14,165,233,0.05)', years:'6年', level:'Expert',     desc:'Hooks・状態管理・コンポーネント設計', highlights:['Hooks 完全習得','Context / Zustand','パフォーマンス最適化'] },
      { name:'Next.js',    abbr:'Nx', color:'#334155', bg:'rgba(51,65,85,0.04)',   years:'5年', level:'Advanced',   desc:'App Router・SSR / SSG・API Routes', highlights:['App Router対応','SSR / SSG / ISR','Image / Font 最適化'] },
      { name:'TypeScript', abbr:'TS', color:'#3178c6', bg:'rgba(49,120,198,0.05)', years:'6年', level:'Expert',     desc:'型設計・ジェネリクス・型安全 API', highlights:['型安全API設計','ジェネリクス活用','Strict モード運用'] },
      { name:'JavaScript', abbr:'JS', color:'#ca8a04', bg:'rgba(202,138,4,0.05)',  years:'6年', level:'Expert',     desc:'ES2022+・非同期・DOM 操作', highlights:['ES2022+ 完全対応','非同期処理設計','Webpack / Vite 設定'] },
    ],
  },
  {
    category: 'バックエンド', categoryEn: 'Backend', color: '#e11d48', icon: '⚙',
    techs: [
      { name:'NestJS',      abbr:'Ns', color:'#e11d48', bg:'rgba(225,29,72,0.05)',  years:'5年', level:'Advanced',   desc:'DI・Guards・Bull Queue・モジュール設計', highlights:['DI / IoC パターン','Bull キュー非同期処理','Swagger 自動生成'] },
      { name:'Laravel',     abbr:'La', color:'#ef4444', bg:'rgba(239,68,68,0.05)', years:'5年', level:'Advanced',   desc:'Eloquent・Policy・Queue・API 実装', highlights:['Eloquent ORM','Policy / Gate 認可','PHPUnit テスト'] },
      { name:'Spring Boot', abbr:'Sb', color:'#6db33f', bg:'rgba(109,179,63,0.05)',years:'5年', level:'Advanced',   desc:'REST API・JPA・レガシーシステム移行', highlights:['REST API 設計','JPA / Hibernate','レガシー AWS 移行'] },
      { name:'Node.js',     abbr:'No', color:'#16a34a', bg:'rgba(22,163,74,0.05)', years:'6年', level:'Advanced',   desc:'Express・非同期処理・ミドルウェア', highlights:['Express ミドルウェア','非同期ストリーム','JWT / OAuth2 認証'] },
      { name:'PHP',         abbr:'Ph', color:'#6366f1', bg:'rgba(99,102,241,0.05)',years:'5年', level:'Advanced',   desc:'Laravel・API 実装・PHPUnit テスト', highlights:['Laravel フレームワーク','RESTful API','PHPUnit / Feature Test'] },
      { name:'Python',      abbr:'Py', color:'#3776ab', bg:'rgba(55,118,171,0.05)',years:'6年', level:'Proficient', desc:'データ処理・バッチスクリプト補助', highlights:['データ処理スクリプト','バッチ自動化','AWS Lambda 補助'] },
    ],
  },
  {
    category: 'データベース', categoryEn: 'Database', color: '#2563eb', icon: '🗄',
    techs: [
      { name:'MySQL',      abbr:'My', color:'#2563eb', bg:'rgba(37,99,235,0.05)', years:'6年', level:'Advanced', desc:'インデックス最適化・スキーマ設計', highlights:['インデックス最適化','ストアドプロシージャ','バルクインサート対応'] },
      { name:'PostgreSQL', abbr:'Pg', color:'#1d4ed8', bg:'rgba(29,78,216,0.05)', years:'6年', level:'Advanced', desc:'トランザクション・パフォーマンスチューニング', highlights:['EXPLAIN ANALYZE','トランザクション制御','データ移行・整合性保証'] },
    ],
  },
  {
    category: 'インフラ / DevOps', categoryEn: 'Infrastructure', color: '#d97706', icon: '☁',
    techs: [
      { name:'AWS',            abbr:'Aw', color:'#d97706', bg:'rgba(217,119,6,0.05)',  years:'4年', level:'Proficient', desc:'EC2・ECS Fargate・RDS・S3・CloudWatch', highlights:['ECS Fargate 本番運用','CloudWatch 監視設定','VPC / IAM 設計'] },
      { name:'Docker',         abbr:'Do', color:'#0284c7', bg:'rgba(2,132,199,0.05)', years:'4年', level:'Proficient', desc:'コンテナ化・Docker Compose・CI/CD 連携', highlights:['マルチステージビルド','Compose 開発環境','イメージ最適化'] },
      { name:'GitHub Actions', abbr:'Ga', color:'#16a34a', bg:'rgba(22,163,74,0.05)', years:'3年', level:'Proficient', desc:'自動テスト・自動デプロイパイプライン', highlights:['CI/CD パイプライン','テスト自動実行','AWS デプロイ自動化'] },
      { name:'Git / GitHub',   abbr:'Gi', color:'#e11d48', bg:'rgba(225,29,72,0.05)', years:'6年', level:'Advanced',   desc:'PR レビュー・ブランチ戦略・チーム開発', highlights:['Git Flow 運用','PR レビュー経験','コンフリクト解消'] },
    ],
  },
];

function TechCard({ tech, gi, ti }: { tech: Tech; gi: number; ti: number }) {
  const [hovered, setHovered] = useState(false);
  const lc = LEVEL_CONFIG[tech.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: gi * 0.04 + ti * 0.03, duration: 0.45 }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
      className="relative rounded-xl flex flex-col overflow-hidden"
      style={{
        background: hovered ? '#ffffff' : '#fafafa',
        border: `1px solid ${hovered ? tech.color + '30' : 'rgba(15,23,42,0.08)'}`,
        boxShadow: hovered ? `0 6px 20px ${tech.color}12` : '0 1px 4px rgba(15,23,42,0.04)',
        transition: 'all 0.25s',
      }}>
      <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${tech.color}, ${tech.color}44, transparent)`, opacity: hovered ? 1 : 0.5 }} />
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
              style={{ background: `${tech.color}12`, color: tech.color, border: `1px solid ${tech.color}22`, fontFamily: 'monospace' }}>
              {tech.abbr}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm truncate" style={{ color: '#1e293b' }}>{tech.name}</div>
              <div className="text-[10px] font-mono" style={{ color: '#94a3b8' }}>{tech.years}</div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 whitespace-nowrap"
            style={{ background: `${lc.color}10`, color: lc.color, border: `1px solid ${lc.color}22` }}>
            {lc.label}
          </span>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[9px] font-mono" style={{ color: '#94a3b8' }}>proficiency</span>
            <span className="text-[10px] font-black font-mono" style={{ color: lc.color }}>{lc.bar}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(15,23,42,0.07)' }}>
            <motion.div className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${tech.color}66, ${tech.color})` }}
              initial={{ width: 0 }} whileInView={{ width: `${lc.bar}%` }} viewport={{ once: true }}
              transition={{ duration: 1.0, delay: gi * 0.04 + ti * 0.03 + 0.2, ease: 'easeOut' }} />
          </div>
        </div>
        <p className="text-[11px] leading-5" style={{ color: '#64748b' }}>{tech.desc}</p>
        <AnimatePresence>
          {hovered && (
            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="space-y-1 overflow-hidden">
              {tech.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 size={10} className="flex-shrink-0" style={{ color: lc.color }} />
                  <span style={{ color: '#475569' }}>{h}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [activeGroup, setActiveGroup] = useState('all');
  const tabs = [{ id: 'all', label: 'すべて', color: '#0284c7' }, ...GROUPS.map(g => ({ id: g.categoryEn, label: g.category, color: g.color }))];
  const visible = activeGroup === 'all' ? GROUPS : GROUPS.filter(g => g.categoryEn === activeGroup);

  return (
    <section id="tech" className="section" style={{ background: '#ffffff' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(255,255,255,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label justify-center">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#0f172a' }}>技術スタック</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-lg mx-auto" style={{ color: '#64748b' }}>
            実務で積み上げた技術の一覧です。カードにカーソルを合わせると詳細が確認できます。
          </p>
        </motion.div>

        {/* Level legend */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {Object.entries(LEVEL_CONFIG).map(([key, lc]) => (
            <div key={key} className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: `${lc.color}08`, color: lc.color, border: `1px solid ${lc.color}22` }}>
              <div className="w-2 h-2 rounded-full" style={{ background: lc.color }} />
              {lc.label} <span style={{ color: lc.color + '80', fontWeight: 400 }}>— {lc.labelJa}</span>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
          {tabs.map(tab => {
            const isActive = activeGroup === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveGroup(tab.id)}
                className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: isActive ? `${tab.color}10` : '#ffffff',
                  border: isActive ? `1.5px solid ${tab.color}40` : '1.5px solid rgba(15,23,42,0.10)',
                  color: isActive ? tab.color : '#64748b',
                  boxShadow: isActive ? `0 2px 10px ${tab.color}15` : '0 1px 3px rgba(15,23,42,0.05)',
                }}>{tab.label}</button>
            );
          })}
        </motion.div>

        {/* Groups */}
        <AnimatePresence mode="wait">
          <motion.div key={activeGroup} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {visible.map((group, gi) => (
              <motion.div key={group.categoryEn} className="mb-10 last:mb-0"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: `${group.color}10`, color: group.color, border: `1px solid ${group.color}22` }}>{group.icon}</div>
                  <h3 className="text-xs font-mono font-bold tracking-widest" style={{ color: group.color }}>{group.categoryEn.toUpperCase()}</h3>
                  <span className="text-xs" style={{ color: '#94a3b8' }}>/ {group.category}</span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(15,23,42,0.06)' }} />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{ background: `${group.color}08`, color: `${group.color}99` }}>{group.techs.length} items</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {group.techs.map((tech, ti) => <TechCard key={tech.name} tech={tech} gi={gi} ti={ti} />)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary */}
        <motion.div className="mt-14 rounded-2xl p-6 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
          {[
            { label: '習得言語・FW数',  value: `${GROUPS.reduce((a,g)=>a+g.techs.length,0)}+`, color: '#0284c7' },
            { label: 'Expert レベル',   value: `${GROUPS.flatMap(g=>g.techs).filter(t=>t.level==='Expert').length}項目`,   color: '#059669' },
            { label: 'Advanced レベル', value: `${GROUPS.flatMap(g=>g.techs).filter(t=>t.level==='Advanced').length}項目`, color: '#7c3aed' },
            { label: '実務経験年数',    value: '5年+', color: '#d97706' },
          ].map((s,i) => (
            <motion.div key={i} className="text-center"
              initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.07}}>
              <div className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[11px]" style={{ color: '#64748b' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
