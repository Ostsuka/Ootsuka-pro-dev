'use client';
import { motion } from 'framer-motion';
import { Monitor, Server, Cloud, RefreshCw, MessageSquare, CheckCircle2 } from 'lucide-react';

/* ── Data (unchanged) ── */
const GENRES = [
  { icon: <Monitor size={15} />,     label: '業務 Web システム開発',    color: '#0284c7' },
  { icon: <Server size={15} />,      label: 'バックエンド・API 開発',   color: '#7c3aed' },
  { icon: <Cloud size={15} />,       label: 'AWS 構築・クラウド移行',   color: '#d97706' },
  { icon: <RefreshCw size={15} />,   label: 'レガシー刷新・リプレイス', color: '#059669' },
  { icon: <MessageSquare size={15} />,label: '技術相談・コードレビュー', color: '#e11d48' },
];

const TASKS = [
  { label: '要件ヒアリング・仕様書作成',              color: '#0284c7' },
  { label: 'フロントエンド開発（React / Next.js）',   color: '#3a7bd5' },
  { label: 'バックエンド API 設計・実装',              color: '#7c3aed' },
  { label: 'DB 設計・パフォーマンス最適化',            color: '#059669' },
  { label: 'AWS / Docker デプロイ',                  color: '#d97706' },
  { label: 'テスト・ドキュメント整備',                 color: '#2bb5a0' },
  { label: 'コードレビュー・技術サポート',             color: '#e11d48' },
];

const STRENGTHS = [
  '即戦力・即日対応可',
  '日本語・中文・EN 対応',
  '要件定義から運用まで一気通貫',
  '現在 案件受付中',
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
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
        style={{ background: 'linear-gradient(160deg, rgba(245,238,216,0.93) 0%, rgba(237,230,204,0.90) 100%)' }}
      />

      <div className="section-inner max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Services</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>
            得意ジャンルと対応可能業務
          </h2>
          <div className="divider" />
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 得意ジャンル */}
          <motion.div
            variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-[10px] font-bold tracking-[0.3em] mb-5" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>
              ✦ 得意ジャンル
            </div>
            <ul className="space-y-2.5">
              {GENRES.map((g, i) => (
                <motion.li
                  key={g.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'var(--surface)',
                    border: `1px solid ${g.color}18`,
                  }}
                >
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${g.color}12`, color: g.color,
                  }}>
                    {g.icon}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#2d2416', fontWeight: 500 }}>{g.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 対応可能業務 */}
          <motion.div
            variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-[10px] font-bold tracking-[0.3em] mb-5" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>
              ✦ 対応可能業務
            </div>
            <ul className="space-y-2.5">
              {TASKS.map((t, i) => (
                <motion.li
                  key={t.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.65rem 1rem',
                    borderRadius: '10px',
                    background: 'var(--surface)',
                    border: `1px solid ${t.color}14`,
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: t.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.83rem', color: '#5a4e3a' }}>{t.label}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {STRENGTHS.map(s => (
                <span key={s} className="tag text-[11px]">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
