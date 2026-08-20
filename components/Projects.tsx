'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, TrendingUp, Users, Calendar } from 'lucide-react';

interface Metric { label: string; value: string; }
interface Project {
  title: string; titleEn: string; category: string; categoryId: string;
  description: string; result: string;
  stack: string[]; metrics: Metric[];
  accentColor: string; headerBg: string;
  icon: string;
}

const PROJECTS: Project[] = [
  {
    title: 'EC サイトリニューアル', titleEn: 'EC Site Renewal',
    category: 'SaaS', categoryId: 'saas',
    description: '楽天・Yahoo! ショッピングの商品・在庫をリアルタイム同期する SaaS バックエンドを構築。',
    result: '入力エラー率を約 20% 削減、商品登録工数を大幅に短縮。',
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'AWS ECS'],
    metrics: [{ label: '期間', value: '29ヶ月' }, { label: 'チーム', value: '5〜10名' }, { label: '成果', value: '20%↓' }],
    accentColor: '#3a7bd5', headerBg: 'linear-gradient(135deg, #3a7bd5 0%, #60a5fa 100%)',
    icon: '🖥',
  },
  {
    title: 'SaaS 予約管理システム', titleEn: 'SaaS Booking System',
    category: 'SaaS', categoryId: 'saas',
    description: 'TypeScript / React / Node.js スタックの企業向け予約管理 Web アプリ。要件定義から AWS デプロイまで一貫担当。',
    result: '業務プロセス改善で生産性を約 30% 向上。手動作業時間を週数時間削減。',
    stack: ['TypeScript', 'React', 'Node.js', 'MySQL', 'AWS EC2'],
    metrics: [{ label: '期間', value: '22ヶ月' }, { label: 'チーム', value: '3〜5名' }, { label: '成果', value: '30%↑' }],
    accentColor: '#e86c5d', headerBg: 'linear-gradient(135deg, #e86c5d 0%, #f97316 100%)',
    icon: '📅',
  },
  {
    title: 'リアルタイム在庫ダッシュボード', titleEn: 'Real-time Inventory Dashboard',
    category: '社内ツール', categoryId: 'tool',
    description: '製造・流通業向けの写真データと点検帳票を一元管理するシステム。Laravel API + React 管理画面で構成。',
    result: 'DB インデックス最適化でデータ取得を高速化。3 年間継続開発で正社員登用を達成。',
    stack: ['PHP', 'Laravel', 'React', 'MySQL', 'Linux'],
    metrics: [{ label: '期間', value: '3年' }, { label: 'チーム', value: '25名' }, { label: '成果', value: '高速化' }],
    accentColor: '#2bb5a0', headerBg: 'linear-gradient(135deg, #2bb5a0 0%, #34c78a 100%)',
    icon: '📊',
  },
  {
    title: '保険管理バッチ処理システム', titleEn: 'Insurance Batch Processing',
    category: '社内ツール', categoryId: 'tool',
    description: 'Spring Boot による保険契約・給付データの大量バッチ処理システムを設計・実装。',
    result: 'レガシーシステムの解析・機能改修・API 実装を担当。処理時間を大幅に短縮。',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS ECS'],
    metrics: [{ label: '期間', value: '12ヶ月' }, { label: 'チーム', value: '5名' }, { label: '成果', value: '高速化' }],
    accentColor: '#8b5cf6', headerBg: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    icon: '⚙',
  },
  {
    title: '不動産マッチングプラットフォーム', titleEn: 'Real Estate Matching Platform',
    category: 'プラットフォーム', categoryId: 'platform',
    description: '物件オーナーとテナントをマッチングするプラットフォームの API とフロントエンドを担当。',
    result: '物件掲載から契約までのフロー自動化。問い合わせ件数が 2 倍以上に増加。',
    stack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'S3'],
    metrics: [{ label: '期間', value: '8ヶ月' }, { label: 'チーム', value: '4名' }, { label: '成果', value: '2x問合' }],
    accentColor: '#e8a949', headerBg: 'linear-gradient(135deg, #e8a949 0%, #fbbf24 100%)',
    icon: '🏠',
  },
  {
    title: 'コーポレートサイト 多言語対応', titleEn: 'Corporate Site i18n',
    category: 'プラットフォーム', categoryId: 'platform',
    description: 'Next.js App Router + i18n による日本語・英語・中国語 3 言語対応のコーポレートサイトを構築。',
    result: '海外からのアクセスが 40% 増加。SEO スコアが大幅に改善。',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'i18n'],
    metrics: [{ label: '期間', value: '4ヶ月' }, { label: 'チーム', value: '2名' }, { label: '成果', value: '40%↑' }],
    accentColor: '#34c78a', headerBg: 'linear-gradient(135deg, #34c78a 0%, #2bb5a0 100%)',
    icon: '🌐',
  },
];

const FILTER_TABS = [
  { id: 'all',      label: 'すべて' },
  { id: 'saas',     label: 'SaaS' },
  { id: 'tool',     label: '社内ツール' },
  { id: 'platform', label: 'プラットフォーム' },
];

function ProjectCard({ proj }: { proj: Project }) {
  const ac = proj.accentColor;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: '#fff', border: `1px solid ${ac}18`, boxShadow: '0 2px 16px rgba(45,36,22,0.07)' }}
    >
      {/* Gradient header */}
      <div className="px-5 py-4 flex items-center gap-3" style={{ background: proj.headerBg }}>
        <span className="text-2xl">{proj.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-white/70 font-mono mb-0.5">{proj.category}</div>
          <div className="font-bold text-sm text-white leading-snug">{proj.title}</div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm leading-6 mb-3 flex-1" style={{ color: '#5a4e3a' }}>{proj.description}</p>

        {/* Result badge */}
        <div className="flex items-start gap-2 mb-4 p-3 rounded-xl"
          style={{ background: `${ac}08`, border: `1px solid ${ac}18` }}>
          <TrendingUp size={13} style={{ color: ac, flexShrink: 0, marginTop: '2px' }} />
          <p className="text-xs leading-5" style={{ color: ac, fontWeight: 600 }}>{proj.result}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {proj.metrics.map(m => (
            <div key={m.label} className="text-center p-2 rounded-lg"
              style={{ background: `${ac}08`, border: `1px solid ${ac}14` }}>
              <div className="text-sm font-black" style={{ color: ac }}>{m.value}</div>
              <div className="text-[10px] mt-0.5" style={{ color: '#a89880' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.stack.map(s => <span key={s} className="tag-neutral">{s}</span>)}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 mt-auto">
          <a href="#contact" className="btn-ghost text-xs flex-1 justify-center"
            style={{ color: ac, borderColor: `${ac}30` }}>
            <ExternalLink size={12} />
            詳細を見る
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
            <GitBranch size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categoryId === activeFilter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      {/* Background – design workspace with sketches and tech */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(245,238,216,0.90)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">FEATURED PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>実績・プロジェクト</h2>
          <div className="divider" />
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: '#8c7d65' }}>
            細かい実務まで担当してプロジェクトで学び、さまざまな技術でクライアントの課題を解決してきました。
            設計・開発・保守まで幅広くご対応します。
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {FILTER_TABS.map(tab => {
            const isActive = activeFilter === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveFilter(tab.id)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: isActive ? '#2bb5a0' : '#fff',
                  color: isActive ? '#fff' : '#5a4e3a',
                  border: isActive ? '1px solid #2bb5a0' : '1px solid rgba(45,36,22,0.12)',
                  boxShadow: isActive ? '0 4px 12px rgba(43,181,160,0.25)' : '0 1px 4px rgba(45,36,22,0.06)',
                }}>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((proj) => <ProjectCard key={proj.title} proj={proj} />)}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-12"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <div className="inline-flex items-center gap-2 text-sm mb-4" style={{ color: '#8c7d65' }}>
            <Calendar size={14} />
            <span>さらに多くのプロジェクトをご紹介できます</span>
          </div>
          <div>
            <a href="#contact" className="btn-primary">
              <Users size={16} />
              すべての実績を確認する
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
