'use client';
import { motion } from 'framer-motion';
import { Monitor, Server, Cloud, RefreshCw, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: <Monitor size={22} />,
    label: '業務 Web システム開発',
    labelEn: 'Web System Development',
    desc: '要件定義から設計・実装・テスト・デプロイまで一気通貫で担当。React / Next.js による高品質なフロントエンドと堅牢なバックエンドを構築します。',
    color: '#3a7bd5',
    tasks: ['要件ヒアリング・仕様書作成', 'フロントエンド開発（React / Next.js）', 'バックエンド API 設計・実装', 'DB 設計・パフォーマンス最適化'],
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&auto=format&fit=crop&q=80',
  },
  {
    icon: <Server size={22} />,
    label: 'バックエンド・API 開発',
    labelEn: 'Backend & API Development',
    desc: 'NestJS・Laravel・Spring Boot を用いた RESTful / GraphQL API の設計・実装。セキュリティと保守性を重視した堅牢なバックエンドを提供します。',
    color: '#8b5cf6',
    tasks: ['REST / GraphQL API 設計', 'Spring Boot / NestJS 実装', 'OAuth2 認証・認可', 'バッチ処理・スケジューリング'],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80',
  },
  {
    icon: <Cloud size={22} />,
    label: 'AWS 構築・クラウド移行',
    labelEn: 'AWS & Cloud Migration',
    desc: 'AWS を活用したインフラ構築・クラウド移行・コスト最適化。ECS / EC2 / RDS / S3 など主要サービスを組み合わせた安定した運用環境を構築します。',
    color: '#e8a949',
    tasks: ['AWS ECS / EC2 構築', 'RDS / S3 / CloudFront 設定', 'CI/CD パイプライン構築', 'コスト最適化・監視設定'],
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=80',
  },
  {
    icon: <RefreshCw size={22} />,
    label: 'レガシー刷新・リプレイス',
    labelEn: 'Legacy Modernization',
    desc: 'レガシーシステムの解析・分析から現代技術への移行まで対応。既存資産を活かしながら段階的にモダンアーキテクチャへリプレイスします。',
    color: '#2bb5a0',
    tasks: ['既存システム解析・調査', '段階的移行計画の策定', 'データ移行・整合性確保', 'テスト・並行運用支援'],
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=80',
  },
  {
    icon: <MessageSquare size={22} />,
    label: '技術相談・コードレビュー',
    labelEn: 'Tech Consulting & Review',
    desc: 'アーキテクチャ設計・技術選定・コードレビューなど技術的な相談に幅広く対応。チームの技術力向上やプロジェクト品質改善をサポートします。',
    color: '#e86c5d',
    tasks: ['アーキテクチャ設計相談', 'コードレビュー・指摘', '技術選定アドバイス', 'チームの技術力底上げ'],
    img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=80',
  },
];

const STRENGTHS = [
  { label: '即戦力・即日対応可', color: '#2bb5a0' },
  { label: '日本語・中文・EN 対応', color: '#3a7bd5' },
  { label: '要件定義から運用まで一気通貫', color: '#8b5cf6' },
  { label: '現在 案件受付中', color: '#34c78a' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Services() {
  return (
    <section id="services" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center 40%',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(245,238,216,0.95) 0%, rgba(237,230,204,0.92) 100%)' }}
      />

      <div className="section-inner container-wide">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Services</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2d2416', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            提供サービス
          </h2>
          <div className="divider" />
          <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: '#8c7d65', lineHeight: 1.8, maxWidth: '540px', margin: '1.25rem auto 0' }}>
            フロントエンドからインフラまで、幅広い領域で高品質なサービスを提供します。
          </p>
        </motion.div>

        {/* ── Service cards grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.label}
              variants={fadeUp(0.08 + i * 0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card"
              whileHover={{ y: -5 }}
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.img} alt={svc.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'brightness(0.75) saturate(0.85)' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${svc.color}50, rgba(0,0,0,0.35))`,
                }} />
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.30)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff',
                }}>
                  {svc.icon}
                </div>
                <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', right: '1rem' }}>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.65)', fontFamily: 'monospace', letterSpacing: '0.18em', marginBottom: '0.2rem' }}>
                    {svc.labelEn.toUpperCase()}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                    {svc.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.2rem 1.3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.8rem', color: '#5a4e3a', lineHeight: 1.85, marginBottom: '1rem' }}>
                  {svc.desc}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: 'auto' }}>
                  {svc.tasks.map(t => (
                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.76rem', color: '#5a4e3a' }}>
                      <CheckCircle2 size={12} style={{ color: svc.color, flexShrink: 0 }} />
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    marginTop: '1.1rem', fontSize: '0.75rem', fontWeight: 700,
                    color: svc.color, textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.65rem'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.4rem'; }}
                >
                  相談する <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Strengths banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center',
            padding: '1.5rem', borderRadius: '16px',
            background: 'rgba(255,255,255,0.60)', border: '1px solid var(--border)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {STRENGTHS.map((s, i) => (
            <motion.span
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.35rem 1rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700,
                background: `${s.color}10`, border: `1px solid ${s.color}28`, color: s.color,
              }}
            >
              <CheckCircle2 size={12} />
              {s.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
