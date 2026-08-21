'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Project {
  num: string;
  title: string; titleEn: string; category: string;
  description: string; result: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  icon: string;
  /* Multiple scene images per project */
  images: { url: string; alt: string; caption: string }[];
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'EC サイトリニューアル', titleEn: 'EC Site Renewal', category: 'SaaS',
    description: '楽天・Yahoo! ショッピングの商品・在庫をリアルタイム同期する SaaS バックエンドを構築。複数モールの一括管理で運用コストを大幅削減。',
    result: '入力エラー率を約 20% 削減、商品登録工数を大幅に短縮。',
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'AWS ECS'],
    metrics: [{ label: '期間', value: '29ヶ月' }, { label: 'チーム', value: '5〜10名' }, { label: '成果', value: '20%↓エラー' }],
    accentColor: '#3a7bd5',
    icon: '🖥',
    images: [
      { url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=75', alt: 'ECショッピング', caption: '商品管理画面' },
      { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop&q=75', alt: 'チーム開発', caption: 'チーム協議' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=75', alt: 'データ分析', caption: 'KPI 分析' },
    ],
  },
  {
    num: '02',
    title: 'SaaS 予約管理システム', titleEn: 'SaaS Booking System', category: 'SaaS',
    description: 'TypeScript / React / Node.js スタックの企業向け予約管理 Web アプリ。要件定義から AWS デプロイまで一貫担当し、業務プロセスを全面的に改善。',
    result: '業務プロセス改善で生産性を約 30% 向上。手動作業時間を週数時間削減。',
    stack: ['TypeScript', 'React', 'Node.js', 'MySQL', 'AWS EC2'],
    metrics: [{ label: '期間', value: '22ヶ月' }, { label: 'チーム', value: '3〜5名' }, { label: '成果', value: '30%↑生産性' }],
    accentColor: '#e86c5d',
    icon: '📅',
    images: [
      { url: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=75', alt: 'スケジュール管理', caption: '予約フロー設計' },
      { url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&auto=format&fit=crop&q=75', alt: 'ミーティング', caption: '要件定義MTG' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=75', alt: 'チーム作業', caption: '開発チーム' },
    ],
  },
  {
    num: '03',
    title: 'リアルタイム在庫ダッシュボード', titleEn: 'Real-time Inventory Dashboard', category: '社内ツール',
    description: '製造・流通業向けの写真データと点検帳票を一元管理するシステム。Laravel API + React 管理画面で構成。DB インデックス最適化でレスポンスを改善。',
    result: 'DB インデックス最適化でデータ取得を高速化。3 年間継続開発で正社員登用を達成。',
    stack: ['PHP', 'Laravel', 'React', 'MySQL', 'Linux'],
    metrics: [{ label: '期間', value: '3年' }, { label: 'チーム', value: '25名' }, { label: '成果', value: 'クエリ高速化' }],
    accentColor: '#2bb5a0',
    icon: '📊',
    images: [
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=75', alt: '製造現場', caption: '製造ライン' },
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=75', alt: '在庫管理', caption: '倉庫・在庫' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=75', alt: 'ダッシュボード', caption: 'ダッシュボード' },
    ],
  },
  {
    num: '04',
    title: '保険管理バッチ処理システム', titleEn: 'Insurance Batch Processing', category: '社内ツール',
    description: 'Spring Boot による保険契約・給付データの大量バッチ処理システムを設計・実装。レガシーシステムの解析・機能改修・API 実装を担当。',
    result: 'レガシーシステムの解析・機能改修・API 実装を担当。処理時間を大幅に短縮。',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS ECS'],
    metrics: [{ label: '期間', value: '12ヶ月' }, { label: 'チーム', value: '5名' }, { label: '成果', value: '処理時間短縮' }],
    accentColor: '#8b5cf6',
    icon: '⚙',
    images: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=75', alt: 'オフィス開発', caption: '開発環境' },
      { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=75', alt: 'データ分析', caption: 'バッチ設計' },
      { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=75', alt: 'チーム協議', caption: 'コードレビュー' },
    ],
  },
  {
    num: '05',
    title: '不動産マッチングプラットフォーム', titleEn: 'Real Estate Matching Platform', category: 'プラットフォーム',
    description: '物件オーナーとテナントをマッチングするプラットフォームの API とフロントエンドを担当。物件掲載から契約までのフロー自動化を実現。',
    result: '物件掲載から契約までのフロー自動化。問い合わせ件数が 2 倍以上に増加。',
    stack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'S3'],
    metrics: [{ label: '期間', value: '8ヶ月' }, { label: 'チーム', value: '4名' }, { label: '成果', value: '問合 2x増' }],
    accentColor: '#e8a949',
    icon: '🏠',
    images: [
      { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=75', alt: '不動産物件', caption: '物件写真' },
      { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=75', alt: '商談', caption: '顧客商談' },
      { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=75', alt: 'モダンオフィス', caption: 'UI 設計' },
    ],
  },
  {
    num: '06',
    title: 'コーポレートサイト 多言語対応', titleEn: 'Corporate Site i18n', category: 'プラットフォーム',
    description: 'Next.js App Router + i18n による日本語・英語・中国語 3 言語対応のコーポレートサイトを構築。SEO 最適化で検索流入を大幅に改善。',
    result: '海外からのアクセスが 40% 増加。SEO スコアが大幅に改善。',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'i18n'],
    metrics: [{ label: '期間', value: '4ヶ月' }, { label: 'チーム', value: '2名' }, { label: '成果', value: '海外アクセス 40%↑' }],
    accentColor: '#34c78a',
    icon: '🌐',
    images: [
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=75', alt: 'グローバルチーム', caption: 'グローバル対応' },
      { url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&auto=format&fit=crop&q=75', alt: 'チームミーティング', caption: '多国籍チーム' },
      { url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&auto=format&fit=crop&q=75', alt: 'デザイン作業', caption: 'UI/UX デザイン' },
    ],
  },
];

const CATEGORIES = ['すべて', 'SaaS', '社内ツール', 'プラットフォーム'];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div
      variants={fadeUp(index * 0.09)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="card"
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      {/* ── Image gallery ── */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#1a1410' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={proj.images[activeImg].url}
              alt={proj.images[activeImg].alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.90) brightness(0.92)' }}
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Accent tint */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${proj.accentColor}15, transparent 60%)` }} />

        {/* Top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '0.75rem 1rem',
          background: 'linear-gradient(to bottom, rgba(10,8,4,0.65), transparent)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 900,
              color: `${proj.accentColor}90`, lineHeight: 1,
            }}>{proj.num}</span>
            <span style={{
              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em',
              color: proj.accentColor, background: `${proj.accentColor}20`,
              border: `1px solid ${proj.accentColor}40`, borderRadius: '999px',
              padding: '0.12rem 0.6rem',
            }}>{proj.category}</span>
          </div>
          <span style={{ fontSize: '1rem' }}>{proj.icon}</span>
        </div>

        {/* Image thumbnail selector */}
        <div style={{
          position: 'absolute', bottom: '0.65rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '0.35rem',
        }}>
          {proj.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              style={{
                width: activeImg === i ? '24px' : '6px',
                height: '6px',
                borderRadius: '999px',
                background: activeImg === i ? proj.accentColor : 'rgba(255,255,255,0.45)',
                border: 'none', cursor: 'pointer',
                transition: 'width 0.25s ease, background 0.2s',
                padding: 0,
              }}
              aria-label={img.caption}
            />
          ))}
        </div>

        {/* Caption */}
        <div style={{
          position: 'absolute', bottom: '1.65rem', right: '0.75rem',
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.60)', fontFamily: 'monospace',
          letterSpacing: '0.08em',
        }}>
          {proj.images[activeImg].caption}
        </div>
      </div>

      {/* ── Sub-image strip ── */}
      <div style={{ display: 'flex', gap: '2px', background: '#1a1410' }}>
        {proj.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            style={{
              flex: 1, height: '42px', overflow: 'hidden', border: 'none', cursor: 'pointer', padding: 0,
              outline: activeImg === i ? `2px solid ${proj.accentColor}` : 'none',
              outlineOffset: '-2px',
              transition: 'outline 0.15s',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.url} alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover',
                filter: activeImg === i ? 'none' : 'brightness(0.55) saturate(0.7)',
                transition: 'filter 0.2s',
              }}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* ── Text content ── */}
      <div style={{ padding: '1.25rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.08rem)', fontWeight: 800, color: '#2d2416', marginBottom: '0.5rem', lineHeight: 1.4 }}>
          {proj.title}
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#5a4e3a', lineHeight: 1.85, marginBottom: '0.75rem' }}>
          {proj.description}
        </p>

        {/* Result */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.45rem',
          padding: '0.5rem 0.75rem', borderRadius: '8px', marginBottom: '1rem',
          background: `${proj.accentColor}08`, border: `1px solid ${proj.accentColor}20`,
        }}>
          <TrendingUp size={12} style={{ color: proj.accentColor, flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.73rem', color: proj.accentColor, fontWeight: 600, lineHeight: 1.6 }}>{proj.result}</p>
        </div>

        {/* Metrics */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          {proj.metrics.map(m => (
            <span key={m.label} style={{
              fontSize: '0.68rem', fontFamily: 'monospace',
              color: proj.accentColor, background: `${proj.accentColor}0c`,
              border: `1px solid ${proj.accentColor}20`, borderRadius: '6px',
              padding: '0.18rem 0.55rem',
            }}>
              {m.label}: {m.value}
            </span>
          ))}
        </div>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
          {proj.stack.map(s => (
            <span key={s} className="tag-neutral" style={{ fontSize: '0.65rem' }}>{s}</span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(v => !v)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem', justifyContent: 'center',
            marginTop: '1rem', padding: '0.4rem', borderRadius: '8px',
            background: 'none', border: `1px solid ${proj.accentColor}20`, cursor: 'pointer',
            fontSize: '0.72rem', color: proj.accentColor, fontWeight: 600,
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = `${proj.accentColor}08`)}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          {expanded ? <><ChevronUp size={13} /> 詳細を閉じる</> : <><ChevronDown size={13} /> 詳細を見る</>}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                marginTop: '1rem', padding: '0.85rem', borderRadius: '10px',
                background: `${proj.accentColor}06`, border: `1px solid ${proj.accentColor}15`,
              }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: proj.accentColor, letterSpacing: '0.15em', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                  TECH STACK DETAIL
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.stack.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: si * 0.04 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '0.22rem 0.65rem', borderRadius: '999px',
                        fontSize: '0.72rem', fontWeight: 600,
                        background: `${proj.accentColor}12`, border: `1px solid ${proj.accentColor}30`, color: proj.accentColor,
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    marginTop: '0.75rem', fontSize: '0.72rem', fontWeight: 600, color: proj.accentColor, textDecoration: 'none',
                  }}
                >
                  <ExternalLink size={12} /> 類似案件を相談する
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('すべて');

  const filtered = activeCategory === 'すべて'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(245,238,216,0.95) 0%, rgba(240,233,210,0.92) 100%)' }}
      />

      <div className="section-inner container-wide">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Works</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2d2416', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            制作実績
          </h2>
          <div className="divider" />
          <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: '#8c7d65', lineHeight: 1.8 }}>
            要件定義から本番運用まで、一気通貫で担当した代表プロジェクトです。
          </p>
        </motion.div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.25rem', borderRadius: '999px',
                fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', border: 'none',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, #2bb5a0, #3a7bd5)'
                  : 'rgba(45,36,22,0.07)',
                color: activeCategory === cat ? '#fff' : '#5a4e3a',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(43,181,160,0.30)' : 'none',
                transition: 'all 0.22s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Project grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {filtered.map((proj, i) => (
              <ProjectCard key={proj.num} proj={proj} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
