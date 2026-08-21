'use client';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

/* ── Data (unchanged) ── */
interface Project {
  num: string;
  title: string; titleEn: string; category: string;
  description: string; result: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  icon: string;
  /* SVG illustration URL (thematic, field-experience) */
  illustUrl: string;
  illustAlt: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'EC サイトリニューアル', titleEn: 'EC Site Renewal', category: 'SaaS',
    description: '楽天・Yahoo! ショッピングの商品・在庫をリアルタイム同期する SaaS バックエンドを構築。',
    result: '入力エラー率を約 20% 削減、商品登録工数を大幅に短縮。',
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'AWS ECS'],
    metrics: [{ label: '期間', value: '29ヶ月' }, { label: 'チーム', value: '5〜10名' }, { label: '成果', value: '20%↓エラー' }],
    accentColor: '#3a7bd5',
    icon: '🖥',
    illustUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&auto=format&fit=crop&q=75',
    illustAlt: 'EC・オンラインショッピングの現場',
  },
  {
    num: '02',
    title: 'SaaS 予約管理システム', titleEn: 'SaaS Booking System', category: 'SaaS',
    description: 'TypeScript / React / Node.js スタックの企業向け予約管理 Web アプリ。要件定義から AWS デプロイまで一貫担当。',
    result: '業務プロセス改善で生産性を約 30% 向上。手動作業時間を週数時間削減。',
    stack: ['TypeScript', 'React', 'Node.js', 'MySQL', 'AWS EC2'],
    metrics: [{ label: '期間', value: '22ヶ月' }, { label: 'チーム', value: '3〜5名' }, { label: '成果', value: '30%↑生産性' }],
    accentColor: '#e86c5d',
    icon: '📅',
    illustUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&auto=format&fit=crop&q=75',
    illustAlt: '予約・スケジュール管理の現場',
  },
  {
    num: '03',
    title: 'リアルタイム在庫ダッシュボード', titleEn: 'Real-time Inventory Dashboard', category: '社内ツール',
    description: '製造・流通業向けの写真データと点検帳票を一元管理するシステム。Laravel API + React 管理画面で構成。',
    result: 'DB インデックス最適化でデータ取得を高速化。3 年間継続開発で正社員登用を達成。',
    stack: ['PHP', 'Laravel', 'React', 'MySQL', 'Linux'],
    metrics: [{ label: '期間', value: '3年' }, { label: 'チーム', value: '25名' }, { label: '成果', value: 'クエリ高速化' }],
    accentColor: '#2bb5a0',
    icon: '📊',
    illustUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=75',
    illustAlt: '製造・工場の現場作業',
  },
  {
    num: '04',
    title: '保険管理バッチ処理システム', titleEn: 'Insurance Batch Processing', category: '社内ツール',
    description: 'Spring Boot による保険契約・給付データの大量バッチ処理システムを設計・実装。',
    result: 'レガシーシステムの解析・機能改修・API 実装を担当。処理時間を大幅に短縮。',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS ECS'],
    metrics: [{ label: '期間', value: '12ヶ月' }, { label: 'チーム', value: '5名' }, { label: '成果', value: '処理時間短縮' }],
    accentColor: '#8b5cf6',
    icon: '⚙',
    illustUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=75',
    illustAlt: 'オフィスでのシステム開発',
  },
  {
    num: '05',
    title: '不動産マッチングプラットフォーム', titleEn: 'Real Estate Matching Platform', category: 'プラットフォーム',
    description: '物件オーナーとテナントをマッチングするプラットフォームの API とフロントエンドを担当。',
    result: '物件掲載から契約までのフロー自動化。問い合わせ件数が 2 倍以上に増加。',
    stack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'S3'],
    metrics: [{ label: '期間', value: '8ヶ月' }, { label: 'チーム', value: '4名' }, { label: '成果', value: '問合 2x増' }],
    accentColor: '#e8a949',
    icon: '🏠',
    illustUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&auto=format&fit=crop&q=75',
    illustAlt: '不動産・建物の現場',
  },
  {
    num: '06',
    title: 'コーポレートサイト 多言語対応', titleEn: 'Corporate Site i18n', category: 'プラットフォーム',
    description: 'Next.js App Router + i18n による日本語・英語・中国語 3 言語対応のコーポレートサイトを構築。',
    result: '海外からのアクセスが 40% 増加。SEO スコアが大幅に改善。',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'i18n'],
    metrics: [{ label: '期間', value: '4ヶ月' }, { label: 'チーム', value: '2名' }, { label: '成果', value: '海外アクセス 40%↑' }],
    accentColor: '#34c78a',
    icon: '🌐',
    illustUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=75',
    illustAlt: 'グローバルチームの現場',
  },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Projects() {
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
        style={{ background: 'linear-gradient(160deg, rgba(245,238,216,0.92) 0%, rgba(240,233,210,0.89) 100%)' }}
      />

      <div className="section-inner max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Works</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>制作実績</h2>
          <div className="divider" />
        </motion.div>

        {/* ── Numbered list layout ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(45,36,22,0.08)' }}>
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.num}
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                background: 'var(--surface)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1.5rem',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                transition: 'background 0.2s',
              }}
            >
              {/* ── Left: content ── */}
              <div style={{ minWidth: 0 }}>

                {/* Number + category */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: `${proj.accentColor}40`,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {proj.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      color: proj.accentColor,
                      background: `${proj.accentColor}12`,
                      border: `1px solid ${proj.accentColor}28`,
                      borderRadius: '999px',
                      padding: '0.15rem 0.7rem',
                    }}
                  >
                    {proj.category}
                  </span>
                  <span style={{ fontSize: '1.1rem' }}>{proj.icon}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                    fontWeight: 700,
                    color: '#2d2416',
                    marginBottom: '0.6rem',
                    lineHeight: 1.5,
                  }}
                >
                  {proj.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.8rem', color: '#5a4e3a', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                  {proj.description}
                </p>

                {/* Result */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.85rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    background: `${proj.accentColor}08`,
                    border: `1px solid ${proj.accentColor}18`,
                  }}
                >
                  <TrendingUp size={12} style={{ color: proj.accentColor, flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.75rem', color: proj.accentColor, fontWeight: 600, lineHeight: 1.6 }}>
                    {proj.result}
                  </p>
                </div>

                {/* Metrics + Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  {proj.metrics.map(m => (
                    <span
                      key={m.label}
                      style={{
                        fontSize: '0.7rem',
                        color: proj.accentColor,
                        background: `${proj.accentColor}0c`,
                        border: `1px solid ${proj.accentColor}20`,
                        borderRadius: '6px',
                        padding: '0.2rem 0.6rem',
                        fontFamily: 'monospace',
                      }}
                    >
                      {m.label}: {m.value}
                    </span>
                  ))}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {proj.stack.map(s => (
                      <span key={s} className="tag-neutral" style={{ fontSize: '0.65rem' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right: thematic illustration photo ── */}
              <div
                style={{
                  flexShrink: 0,
                  width: 'clamp(110px, 16vw, 168px)',
                  aspectRatio: '4/3',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  border: `1px solid ${proj.accentColor}25`,
                  alignSelf: 'flex-start',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.illustUrl}
                  alt={proj.illustAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'saturate(0.85) brightness(0.95)',
                  }}
                  loading="lazy"
                />
                {/* Accent tint overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `${proj.accentColor}10`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
