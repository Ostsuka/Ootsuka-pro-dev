'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Zap, Building2, Crown, Clock, Info, ArrowRight } from 'lucide-react';

interface PlanFeature { text: string; included: boolean; note?: string; }
interface Plan {
  id: string; icon: React.ReactNode; name: string; nameEn: string; tagline: string;
  priceFrom: string; priceUnit: string; duration: string; features: PlanFeature[];
  bestFor: string; color: string; popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'light', icon: <Zap size={22} />, name: 'スポット相談', nameEn: 'Spot Consulting',
    tagline: '1回きりの技術相談・レビュー', priceFrom: '¥30,000', priceUnit: '〜 / 回', duration: '1〜3日',
    bestFor: 'コードレビュー・設計相談・技術選定など', color: '#059669',
    features: [
      { text: 'Zoom / メールでの技術相談（1〜2時間）', included: true },
      { text: 'コードレビュー（PR単位）', included: true },
      { text: 'アーキテクチャ相談', included: true },
      { text: 'レビューレポート提出', included: true },
      { text: '継続サポート', included: false, note: '別途契約' },
      { text: '実装・開発作業', included: false, note: '別途見積' },
    ],
  },
  {
    id: 'standard', icon: <Building2 size={22} />, name: 'スタンダード', nameEn: 'Standard Development',
    tagline: '中小規模の業務システム・Web開発', priceFrom: '¥300,000', priceUnit: '〜 / プロジェクト', duration: '1〜3ヶ月',
    bestFor: '業務システム・社内ツール・APIサーバー開発', color: '#0284c7', popular: true,
    features: [
      { text: 'ヒアリング・要件定義', included: true },
      { text: 'フロントエンド / バックエンド開発', included: true },
      { text: 'テスト・品質保証', included: true },
      { text: 'AWS / Docker デプロイ', included: true },
      { text: '操作マニュアル・設計書', included: true },
      { text: '1ヶ月間の無償バグ対応', included: true },
    ],
  },
  {
    id: 'enterprise', icon: <Crown size={22} />, name: 'エンタープライズ', nameEn: 'Enterprise / Long-term',
    tagline: '大規模システム・長期継続開発', priceFrom: '¥600,000', priceUnit: '〜 / プロジェクト', duration: '3ヶ月〜',
    bestFor: 'SaaS開発・クラウド移行・レガシーリプレイス', color: '#7c3aed',
    features: [
      { text: 'フルサイクル開発（設計〜運用）', included: true },
      { text: 'アーキテクチャ設計・技術選定', included: true },
      { text: 'CI/CD パイプライン構築', included: true },
      { text: 'AWS インフラ設計・構築', included: true },
      { text: '週次進捗レポート・Slack常時対応', included: true },
      { text: '3ヶ月間の保守サポート', included: true },
    ],
  },
];

const RETAINER = [
  { name: 'ライト保守',    hours: '月5時間まで',  price: '¥50,000 / 月〜',  desc: 'バグ修正・軽微な改修・質問対応', color: '#059669' },
  { name: 'スタンダード保守', hours: '月15時間まで', price: '¥120,000 / 月〜', desc: '機能追加・パフォーマンス監視・月次レポート', color: '#0284c7' },
  { name: '専任サポート',  hours: '月30時間〜',    price: 'ご相談ください',   desc: '継続開発・チーム参画・技術顧問', color: '#7c3aed' },
];

const FACTORS = [
  { label: '機能の数・複雑さ', desc: '画面数・API エンドポイント数・ビジネスロジックの複雑さによって変わります' },
  { label: '対応技術スタック', desc: 'React / Node.js が標準。Java / PHP はやや工数が増える場合があります' },
  { label: '納期の余裕',       desc: '急ぎ対応（2週間以内）は割増料金が発生する場合があります' },
  { label: '既存システムの有無', desc: 'ゼロからの新規開発より、既存コードへの追加改修の方が工数見積もりが難しくなります' },
  { label: 'デプロイ先環境',   desc: 'AWS ECS / EC2 のインフラ構築が必要な場合は別途費用が発生します' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { color } = plan;
  return (
    <motion.div variants={fadeUp(index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
      className="rounded-2xl flex flex-col relative overflow-hidden"
      style={{ background: plan.popular ? `${color}04` : '#ffffff', border: `1px solid ${color}${plan.popular ? '28' : '14'}`,
        boxShadow: plan.popular ? `0 4px 24px ${color}12` : '0 2px 12px rgba(15,23,42,0.05)' }}>
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 text-center text-[10px] font-bold py-1.5"
          style={{ background: `${color}10`, color, borderBottom: `1px solid ${color}20` }}>★ 最多ご依頼プラン</div>
      )}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}55, transparent)` }} />
      <div className={`p-6 flex flex-col flex-1 ${plan.popular ? 'pt-10' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${color}10`, color, border: `1px solid ${color}22` }}>{plan.icon}</div>
          <div>
            <h3 className="font-black text-base" style={{ color: '#0f172a' }}>{plan.name}</h3>
            <p className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>{plan.nameEn}</p>
          </div>
        </div>
        <p className="text-xs mb-4 leading-5" style={{ color: '#64748b' }}>{plan.tagline}</p>
        <div className="mb-1">
          <span className="text-3xl font-black" style={{ color }}>{plan.priceFrom}</span>
          <span className="text-xs ml-1.5" style={{ color: '#94a3b8' }}>{plan.priceUnit}</span>
        </div>
        <div className="flex items-center gap-1.5 mb-4 text-[11px]" style={{ color: '#94a3b8' }}>
          <Clock size={11} /><span style={{ fontFamily: 'monospace' }}>標準期間: {plan.duration}</span>
        </div>
        <div className="text-[11px] px-3 py-2 rounded-xl mb-4 leading-5"
          style={{ background: `${color}06`, border: `1px solid ${color}14`, color: '#475569' }}>
          <span style={{ color, fontWeight: 700 }}>こんな方に: </span>{plan.bestFor}
        </div>
        <ul className="space-y-2 mb-5 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-5">
              <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: f.included ? color : '#cbd5e1' }} />
              <span style={{ color: f.included ? '#475569' : '#cbd5e1' }}>
                {f.text}{f.note && <span className="text-[10px] ml-1" style={{ color: '#94a3b8' }}>({f.note})</span>}
              </span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all"
          style={{
            background: plan.popular ? `linear-gradient(135deg, ${color}, ${color}cc)` : `${color}10`,
            color: plan.popular ? '#fff' : color,
            border: plan.popular ? 'none' : `1px solid ${color}28`,
            boxShadow: plan.popular ? `0 4px 16px ${color}28` : 'none',
          }}>
          このプランで相談する <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [showFactors, setShowFactors] = useState(false);

  return (
    <section id="pricing" className="section" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(248,250,252,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <p className="section-label justify-center">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#0f172a' }}>料金・納期</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-xl mx-auto leading-7" style={{ color: '#64748b' }}>
            すべての案件はご要望・規模・納期に応じてお見積もりします。<br />
            下記は<span style={{ color: '#0f172a', fontWeight: 600 }}>目安の料金帯</span>です。まずはお気軽にご相談ください。
          </p>
        </motion.div>

        <motion.div className="flex items-start gap-3 p-4 rounded-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ background: '#ffffff', border: '1px solid rgba(2,132,199,0.14)', boxShadow: '0 2px 10px rgba(15,23,42,0.04)' }}>
          <Info size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#0284c7' }} />
          <p className="text-xs leading-6" style={{ color: '#64748b' }}>
            表示金額はすべて<strong style={{ color: '#334155' }}>税抜・目安</strong>です。
            実際の料金はヒアリング後に詳細見積もりを提出します。
            「料金が高い・安い」ではなく「<strong style={{ color: '#334155' }}>費用対効果があるか</strong>」を一緒に考えます。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {PLANS.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} />)}
        </div>

        {/* Retainer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)} className="mb-14">
          <div className="text-center mb-7">
            <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#7c3aed', fontFamily: 'monospace' }}>MONTHLY RETAINER</p>
            <h3 className="text-2xl font-black" style={{ color: '#0f172a' }}>月額保守プラン</h3>
            <p className="text-sm mt-2" style={{ color: '#64748b' }}>納品後も安心して運用できるよう、継続サポートをご用意しています。</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {RETAINER.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className="p-5 rounded-2xl"
                style={{ background: '#ffffff', border: `1px solid ${r.color}14`, boxShadow: '0 2px 10px rgba(15,23,42,0.05)' }}>
                <div className="text-sm font-black mb-1" style={{ color: '#0f172a' }}>{r.name}</div>
                <div className="text-[11px] font-mono mb-3" style={{ color: r.color }}>{r.hours}</div>
                <div className="text-xl font-black mb-2" style={{ color: r.color }}>{r.price}</div>
                <p className="text-xs leading-5" style={{ color: '#64748b' }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Factors accordion */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-8"
          style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 2px 10px rgba(15,23,42,0.04)' }}>
          <button onClick={() => setShowFactors(o => !o)} className="w-full flex items-center justify-between p-5 text-left">
            <div className="flex items-center gap-3">
              <Info size={16} style={{ color: '#0284c7' }} />
              <span className="text-sm font-bold" style={{ color: '#1e293b' }}>料金が変わる主な要因</span>
            </div>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{showFactors ? '▲ 閉じる' : '▼ 見る'}</span>
          </button>
          {showFactors && (
            <div className="px-5 pb-5 grid sm:grid-cols-2 gap-3" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
              {FACTORS.map((f, i) => (
                <div key={i} className="flex gap-3 pt-4">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#0284c7' }} />
                  <div>
                    <div className="text-xs font-bold mb-0.5" style={{ color: '#1e293b' }}>{f.label}</div>
                    <div className="text-[11px] leading-5" style={{ color: '#64748b' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div className="text-center" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm mb-5" style={{ color: '#64748b' }}>「予算があるか分からない」「まず相談だけしたい」でも大丈夫です。</p>
          <a href="#contact" className="btn-primary inline-flex"><MessageSquare size={16} />無料見積もりを相談する</a>
        </motion.div>
      </div>
    </section>
  );
}
