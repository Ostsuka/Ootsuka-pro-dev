'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import WaveBackground from './backgrounds/WaveBackground';

/* ── Data ────────────────────────────────────────── */
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  comment: string;
  result?: string;       /* 具体的な成果数字 */
  resultLabel?: string;
  color: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'A.S. 様',
    role: '代表取締役',
    company: 'EC事業会社',
    industry: 'EC / 小売',
    avatar: 'AS',
    rating: 5,
    comment:
      '複数のECモールに跨る在庫・商品管理が煩雑で困っていたところ、丁寧にヒアリングしていただき、こちらの業務フローを正確に理解した上でシステムを設計・実装していただきました。リリース後は入力ミスが明らかに減り、スタッフの作業時間が大幅に短縮されました。',
    result: '20%',
    resultLabel: '入力エラー削減',
    color: '#00d4ff',
    tag: 'SaaS / EC管理システム',
  },
  {
    id: 2,
    name: 'T.M. 様',
    role: '情報システム部 マネージャー',
    company: '製造業（中堅企業）',
    industry: '製造・流通',
    avatar: 'TM',
    rating: 5,
    comment:
      '長年Excelと紙で管理していた点検帳票・写真データをシステム化したいというご相談でした。既存業務を深く理解した上で段階的に移行していただき、現場スタッフも違和感なく使い始めることができました。レスポンスも早く、細かい修正にも快く対応いただけました。',
    result: '30%',
    resultLabel: '業務効率向上',
    color: '#10b981',
    tag: '業務システム開発',
  },
  {
    id: 3,
    name: 'K.O. 様',
    role: 'CTO',
    company: 'SaaS スタートアップ',
    industry: 'SaaS / B2B',
    avatar: 'KO',
    rating: 5,
    comment:
      '初期フェーズのMVP開発から参画していただきました。技術的な判断が的確で、スケールを見据えたアーキテクチャを提案してくれたおかげで、後のリファクタリングコストが大幅に抑えられました。日本語でのコミュニケーションも問題なく、仕様確認もスムーズです。',
    result: '3ヶ月',
    resultLabel: 'でMVPリリース',
    color: '#a78bfa',
    tag: 'バックエンド / API開発',
  },
  {
    id: 4,
    name: 'H.Y. 様',
    role: 'プロジェクトマネージャー',
    company: '卸売業',
    industry: '卸売・流通',
    avatar: 'HY',
    rating: 5,
    comment:
      'オンプレで動いていた基幹システムのAWS移行を依頼しました。ダウンタイムを最小限に抑えながら段階的に移行するプランを立案・実行していただき、本番環境への切り替えもトラブルなく完了。CloudWatchによる監視体制も整備いただき、運用が格段に楽になりました。',
    result: '0',
    resultLabel: 'ダウンタイムで移行完了',
    color: '#f59e0b',
    tag: 'AWS移行 / インフラ',
  },
  {
    id: 5,
    name: 'R.N. 様',
    role: 'エンジニアリングマネージャー',
    company: 'Web系サービス会社',
    industry: 'Webサービス',
    avatar: 'RN',
    rating: 5,
    comment:
      'チームのコードレビュー体制の強化と、パフォーマンス改善を依頼しました。具体的な数値で改善効果を示してくれるのが非常に分かりやすく、チームメンバーへの説明もしやすかったです。今後も継続的にお願いしたいと思っています。',
    color: '#f43f5e',
    tag: 'コードレビュー / 技術相談',
  },
];

/* ── Stars ──────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
      ))}
    </div>
  );
}

/* ── Summary numbers ────────────────────────────── */
const SUMMARY = [
  { value: '100%',  label: 'リピート・継続意向',    icon: <CheckCircle2 size={18} />, color: '#10b981' },
  { value: '5.0',   label: '平均評価 / 5.0',        icon: <Star size={18} />,         color: '#f59e0b' },
  { value: '4社+',  label: '継続取引実績',           icon: <Building2 size={18} />,    color: '#00d4ff' },
  { value: '定量',   label: '成果を数字で報告',      icon: <TrendingUp size={18} />,   color: '#a78bfa' },
];

/* ── Main ────────────────────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  return (
    <section id="testimonials" className="section relative" style={{ background: '#07090f' }}>
      <WaveBackground />

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.25), rgba(167,139,250,0.25), transparent)',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="section-label justify-center">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#f0f6ff' }}>
            お客様の声
          </h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>
            実際にご依頼いただいたお客様からの声です。具体的な成果とともにご紹介します。
          </p>
        </motion.div>

        {/* ── Summary numbers ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {SUMMARY.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="p-4 rounded-2xl text-center relative overflow-hidden"
              style={{
                background: 'rgba(11,18,34,0.75)',
                border: `1px solid ${s.color}18`,
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(ellipse at 50% 0%, ${s.color}0c 0%, transparent 70%)`,
              }} />
              <div className="relative z-10">
                <div className="flex justify-center mb-2" style={{ color: s.color }}>{s.icon}</div>
                <div className="text-2xl font-black mb-1" style={{
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{s.value}</div>
                <div className="text-[10px] leading-tight" style={{ color: '#3d5470' }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Featured carousel ── */}
        <div className="relative mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {(() => {
                const t = TESTIMONIALS[current];
                return (
                  <div
                    className="rounded-2xl p-8 relative overflow-hidden"
                    style={{
                      background: 'rgba(11,18,34,0.85)',
                      border: `1px solid ${t.color}20`,
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* BG accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{
                      background: `radial-gradient(circle at 100% 0%, ${t.color}06 0%, transparent 65%)`,
                    }} />
                    <div className="h-[2px] absolute top-0 left-0 right-0" style={{
                      background: `linear-gradient(90deg, ${t.color}, ${t.color}44, transparent)`,
                    }} />

                    <div className="relative z-10">
                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                              border: `1px solid ${t.color}35`,
                              color: t.color,
                              letterSpacing: '0.05em',
                            }}
                          >
                            {t.avatar}
                          </div>
                          <div>
                            <div className="font-black text-base" style={{ color: '#f0f6ff' }}>{t.name}</div>
                            <div className="text-xs" style={{ color: '#3d5470' }}>{t.role} | {t.company}</div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <Stars count={t.rating} />
                              <span
                                className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                                style={{ background: `${t.color}12`, color: t.color }}
                              >
                                {t.tag}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Result badge */}
                        {t.result && (
                          <div
                            className="flex flex-col items-center px-5 py-3 rounded-2xl flex-shrink-0 text-center"
                            style={{
                              background: `${t.color}0e`,
                              border: `1px solid ${t.color}28`,
                            }}
                          >
                            <div className="text-2xl font-black mb-0.5" style={{
                              background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)`,
                              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}>{t.result}</div>
                            <div className="text-[10px]" style={{ color: '#3d5470' }}>{t.resultLabel}</div>
                          </div>
                        )}
                      </div>

                      {/* Quote */}
                      <div className="relative pl-5" style={{ borderLeft: `3px solid ${t.color}35` }}>
                        <Quote size={22} className="absolute -top-1 -left-1.5" style={{ color: t.color, opacity: 0.35 }} />
                        <p className="text-sm leading-8" style={{ color: '#94a3b8' }}>{t.comment}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={prev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#475569',
              }}
            >
              <ChevronLeft size={15} /> 前へ
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: current === i ? '24px' : '8px',
                    height: '8px',
                    background: current === i ? t.color : 'rgba(255,255,255,0.12)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#475569',
              }}
            >
              次へ <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* ── Mini cards (all testimonials) ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="text-left p-4 rounded-xl transition-all"
              style={{
                background: current === i ? `${t.color}0d` : 'rgba(11,18,34,0.6)',
                border: `1px solid ${current === i ? t.color + '30' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: '#e2e8f0' }}>{t.name}</div>
                  <div className="text-[10px]" style={{ color: '#334155' }}>{t.industry}</div>
                </div>
              </div>
              <Stars count={t.rating} />
              <p className="text-[11px] mt-2 leading-5 line-clamp-2" style={{ color: '#64748b' }}>
                {t.comment.slice(0, 60)}…
              </p>
            </motion.button>
          ))}
        </div>

        {/* ── Note on self-produced works ── */}
        <motion.div
          className="mt-10 p-4 rounded-2xl text-center text-xs"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            color: '#334155',
          }}
        >
          ※ 掲載にあたりお客様のお名前・企業名は匿名表示としています。詳細は個別にご確認ください。
        </motion.div>

      </div>
    </section>
  );
}
