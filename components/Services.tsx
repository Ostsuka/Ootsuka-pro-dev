'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Cloud, RefreshCw, MessageSquare, CheckCircle2, ArrowRight, Clock, Layers, Star } from 'lucide-react';

interface Service {
  id: string; icon: React.ReactNode; title: string; titleEn: string; tagline: string;
  description: string; features: { text: string }[]; deliverables: string[];
  duration: string; badge?: string; color: string; popular?: boolean;
}

const SERVICES: Service[] = [
  {
    id: 'webapp', icon: <Monitor size={22} />, title: '業務Webシステム開発', titleEn: 'Business Web Application',
    tagline: '紙・Excel運用を、自動化されたシステムに置き換えます',
    description: '要件定義・設計・実装・テスト・デプロイまで一気通貫で対応。React + TypeScript のフロントエンドと Node.js / Java のバックエンドで、チームの生産性を数字で改善します。',
    features: [
      { text: '要件ヒアリング・仕様書作成' }, { text: 'フロントエンド（React / Next.js）' },
      { text: 'バックエンド API 設計・実装' }, { text: 'DB 設計・パフォーマンス最適化' },
      { text: 'テスト・ドキュメント整備' },   { text: 'AWS / Docker へのデプロイ' },
    ],
    deliverables: ['ソースコード一式', '設計書・API ドキュメント', '操作マニュアル', '1ヶ月の保守サポート'],
    duration: '2〜6ヶ月', color: '#0284c7', popular: true, badge: '最多依頼',
  },
  {
    id: 'backend', icon: <Server size={22} />, title: 'バックエンド・API開発', titleEn: 'Backend & API Development',
    tagline: '複雑な業務ロジックを、堅牢で高速なAPIに変換します',
    description: 'NestJS / Spring Boot / Laravel を用いた高品質な REST API を設計・実装。既存システムへの機能追加やマイクロサービス化にも対応します。',
    features: [
      { text: 'REST API 設計・実装（NestJS / Spring Boot / Laravel）' },
      { text: '認証・認可（JWT / OAuth2）' }, { text: 'バリデーション・エラーハンドリング' },
      { text: 'Bull キューによる非同期処理' }, { text: 'API ドキュメント（Swagger）整備' },
      { text: '単体・統合テスト記述' },
    ],
    deliverables: ['API ソースコード', 'Swagger ドキュメント', 'テストコード', 'デプロイ手順書'],
    duration: '1〜3ヶ月', color: '#7c3aed', badge: '得意分野',
  },
  {
    id: 'aws', icon: <Cloud size={22} />, title: 'AWS構築・クラウド移行', titleEn: 'AWS Setup & Cloud Migration',
    tagline: 'オンプレ・旧システムを、スケーラブルなAWS環境へ移行します',
    description: 'EC2・ECS Fargate・RDS・S3・CloudWatch を組み合わせた本番環境を構築。Docker コンテナ化と GitHub Actions による CI/CD パイプラインも整備します。',
    features: [
      { text: 'AWS アーキテクチャ設計・構築' }, { text: 'ECS Fargate / EC2 環境セットアップ' },
      { text: 'RDS / Aurora によるデータベース構築' }, { text: 'CloudWatch 監視・アラート設定' },
      { text: 'GitHub Actions CI/CD パイプライン' }, { text: 'Docker コンテナ化・最適化' },
    ],
    deliverables: ['インフラ構成図', 'Terraform / スクリプト一式', '監視設定', 'CI/CD パイプライン', '運用手順書'],
    duration: '1〜2ヶ月', color: '#d97706',
  },
  {
    id: 'migration', icon: <RefreshCw size={22} />, title: 'レガシー刷新・リプレイス', titleEn: 'Legacy System Migration',
    tagline: '老朽化したシステムを、止めずに現代技術へ移行します',
    description: '稼働中のレガシーシステムを段階的に現代化。PHP → Laravel、Java モノリス → Spring Boot、オンプレ → AWS など幅広い移行実績があります。',
    features: [
      { text: 'レガシーコード解析・ドキュメント化' }, { text: '段階的移行計画の策定' },
      { text: 'リファクタリング・機能移植' }, { text: 'データ移行・整合性検証' },
      { text: 'テスト整備・品質保証' }, { text: 'ダウンタイム最小化戦略' },
    ],
    deliverables: ['移行後ソースコード', '移行手順書', 'テスト結果レポート', '新旧対応表'],
    duration: '3〜12ヶ月', color: '#059669',
  },
  {
    id: 'consult', icon: <MessageSquare size={22} />, title: '技術相談・コードレビュー', titleEn: 'Tech Consulting & Code Review',
    tagline: '技術選定・設計の迷いを、経験者の視点で解消します',
    description: '設計方針の壁打ち・技術スタック選定・コードレビュー・パフォーマンス改善など、スポットでの技術支援に対応します。',
    features: [
      { text: 'アーキテクチャ設計レビュー' }, { text: 'コードレビュー（PR レビュー対応可）' },
      { text: '技術スタック選定サポート' }, { text: 'パフォーマンスボトルネック調査' },
      { text: 'セキュリティ観点のレビュー' }, { text: 'チーム開発プロセス改善提案' },
    ],
    deliverables: ['レビューレポート', '改善提案書', 'Q&A セッション（Zoom）'],
    duration: '単発〜継続', color: '#e11d48',
  },
];

const SPECIALTIES = [
  { label: '飲食・小売業向けEC',    color: '#0284c7' },
  { label: '製造・流通業務システム', color: '#7c3aed' },
  { label: 'SaaS バックエンド',      color: '#059669' },
  { label: 'スタートアップ MVP',     color: '#d97706' },
  { label: 'クラウド移行',           color: '#e11d48' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { color } = svc;
  return (
    <motion.div
      variants={fadeUp(index * 0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
      className="rounded-2xl flex flex-col relative overflow-hidden"
      style={{ background: '#ffffff', border: `1px solid ${color}14`, boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}
    >
      {svc.badge && (
        <div className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full z-10"
          style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}>
          {svc.popular && <Star size={9} className="inline mr-1" />}{svc.badge}
        </div>
      )}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}55, transparent)` }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${color}10`, color, border: `1px solid ${color}22` }}>{svc.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base leading-snug mb-0.5" style={{ color: '#0f172a' }}>{svc.title}</h3>
            <p className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>{svc.titleEn}</p>
          </div>
        </div>
        <div className="rounded-xl px-4 py-3 mb-4 text-sm font-semibold leading-6"
          style={{ background: `${color}08`, border: `1px solid ${color}15`, color }}>✦ {svc.tagline}</div>
        <p className="text-sm leading-7 mb-4 flex-1" style={{ color: '#475569' }}>{svc.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <Clock size={12} style={{ color: '#94a3b8' }} />
          <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>標準期間:</span>
          <span className="text-[11px] font-bold" style={{ color }}>{svc.duration}</span>
        </div>
        <button onClick={() => setExpanded(o => !o)} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color }}>
          {expanded ? '詳細を閉じる ▲' : '含まれる内容を見る ▼'}
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div className="mt-4 pt-4 space-y-4" style={{ borderTop: `1px solid ${color}10` }}>
                <div>
                  <div className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#94a3b8', fontFamily: 'monospace' }}>SCOPE OF WORK</div>
                  <ul className="space-y-1.5">
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] leading-5" style={{ color: '#475569' }}>
                        <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color }} />{f.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#94a3b8', fontFamily: 'monospace' }}>DELIVERABLES</div>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.deliverables.map((d, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg"
                        style={{ background: `${color}08`, border: `1px solid ${color}18`, color: '#475569' }}>{d}</span>
                    ))}
                  </div>
                </div>
                <a href="#contact" className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold"
                  style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}>
                  この内容で相談する <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#ffffff' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(255,255,255,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div className="text-center mb-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <p className="section-label justify-center">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#0f172a' }}>サービス内容</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-xl mx-auto leading-7" style={{ color: '#64748b' }}>
            「何でもできます」より<span style={{ color: '#0f172a', fontWeight: 600 }}>「あなたの課題をこうやって解決します」</span>。<br />
            得意領域に絞った、具体的なサービスをご提供します。
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}>
          <span className="text-[10px] font-mono tracking-widest mr-1" style={{ color: '#94a3b8' }}>得意な業界・領域:</span>
          {SPECIALTIES.map(s => (
            <span key={s.label} className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{ background: `${s.color}08`, border: `1px solid ${s.color}22`, color: s.color }}>{s.label}</span>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => <ServiceCard key={svc.id} svc={svc} index={i} />)}
        </div>

        <motion.div className="mt-14 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: '#f8fafc', border: '1px solid rgba(2,132,199,0.12)', boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Layers size={18} style={{ color: '#0284c7' }} />
            <span className="text-[11px] font-bold tracking-widest font-mono" style={{ color: '#0284c7' }}>CUSTOM SOLUTIONS</span>
          </div>
          <h3 className="text-2xl font-black mb-2" style={{ color: '#0f172a' }}>上記以外のご相談も承ります</h3>
          <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: '#64748b' }}>
            既存システムへの機能追加、チームへの参画、コードレビューなど、まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary"><MessageSquare size={16} />無料で相談する</a>
            <a href="#process" className="btn-outline"><ArrowRight size={16} />依頼の流れを見る</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
