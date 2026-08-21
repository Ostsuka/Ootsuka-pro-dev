'use client';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Code2, TestTube2, Rocket, HeartHandshake, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

interface Step {
  number: string; icon: React.ReactNode; title: string; titleEn: string;
  duration: string; description: string; details: string[]; output: string; color: string;
}

const STEPS: Step[] = [
  {
    number: '01', icon: <MessageSquare size={20} />, title: 'ヒアリング・無料相談', titleEn: 'Discovery Call',
    duration: '1〜3日', color: '#0284c7',
    description: 'まずはお気軽にご連絡ください。現在の課題・やりたいこと・予算感・スケジュールを共有いただくだけでOKです。Zoom / メール / チャットで対応します。',
    details: ['現状の課題・目的をヒアリング','技術的な実現可能性の確認','おおよそのスコープ・スケジュール感のご提示','ご質問・不安点の解消'],
    output: 'ヒアリングメモ・方向性の合意',
  },
  {
    number: '02', icon: <FileText size={20} />, title: '要件定義・お見積もり', titleEn: 'Proposal & Estimate',
    duration: '3〜7日', color: '#7c3aed',
    description: 'ヒアリング内容をもとに、要件定義書・システム概要・使用技術・工数見積もりをまとめた提案書を作成します。内容に納得いただいてからご契約となります。',
    details: ['要件定義書・機能一覧の作成','技術スタック・アーキテクチャの提案','工数・費用の詳細見積もり','スケジュール（WBS）のご提示'],
    output: '提案書・見積書・契約書',
  },
  {
    number: '03', icon: <Code2 size={20} />, title: '設計・開発', titleEn: 'Design & Development',
    duration: '2週間〜数ヶ月', color: '#059669',
    description: 'アジャイル的に週次または隔週で進捗を共有しながら開発を進めます。Slack / GitHub で随時コミュニケーションを取り、仕様変更にも柔軟に対応します。',
    details: ['DB・API・画面設計','フロントエンド / バックエンド実装','週次進捗レポート・デモ共有','仕様変更への柔軟な対応'],
    output: '動作するコード・中間デモ',
  },
  {
    number: '04', icon: <TestTube2 size={20} />, title: 'テスト・品質確認', titleEn: 'Testing & QA',
    duration: '3〜10日', color: '#d97706',
    description: '単体テスト・結合テスト・受け入れテストを実施します。テスト仕様書と結果レポートを提出し、バグ修正・最終調整を行います。',
    details: ['単体テスト・結合テストの実施','クロスブラウザ・レスポンシブ確認','セキュリティ・パフォーマンスチェック','受け入れテスト立会い・修正対応'],
    output: 'テスト結果レポート・修正済みコード',
  },
  {
    number: '05', icon: <Rocket size={20} />, title: '納品・デプロイ', titleEn: 'Delivery & Deployment',
    duration: '1〜3日', color: '#e11d48',
    description: '本番環境へのデプロイ・動作確認・ソースコード納品・操作マニュアルの提出を行います。リリース直後の緊急対応も含まれます。',
    details: ['本番環境へのデプロイ・最終確認','ソースコード・設計書一式の納品','操作マニュアル / 引き継ぎ資料の提出','リリース直後の緊急対応'],
    output: 'ソースコード一式・マニュアル・本番稼働',
  },
  {
    number: '06', icon: <HeartHandshake size={20} />, title: '保守・アフターサポート', titleEn: 'Maintenance & Support',
    duration: '継続', color: '#0284c7',
    description: '納品後も安心してご利用いただけるよう、バグ修正・機能追加・サーバー監視などの継続サポートを提供します。',
    details: ['1ヶ月の無料バグ修正対応','追加機能の開発・改修','サーバー監視・障害対応','定期レポート・改善提案'],
    output: '安定稼働・継続改善',
  },
];

const MINI_FAQ = [
  { q: '仕様が変わっても大丈夫ですか？', a: '週次の進捗確認で早期に方向修正できます。大きな変更は都度お見積もりします。' },
  { q: '途中で連絡が途絶えることはありませんか？', a: 'Slack / GitHub / Zoom での定期報告を徹底しています。24時間以内に返信します。' },
  { q: '納品後に問題が起きたら？', a: '1ヶ月間は無償でバグ修正対応します。以降は保守契約での対応が可能です。' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center 45%',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(248,250,252,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <p className="section-label justify-center">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#0f172a' }}>制作の流れ</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-lg mx-auto leading-7" style={{ color: '#64748b' }}>
            「依頼したらどう進むのか」を明確にすることで、<br />
            <span style={{ color: '#0f172a', fontWeight: 600 }}>初めてのご依頼でも安心して</span>プロジェクトを進められます。
          </p>
        </motion.div>

        {/* Timeline strip */}
        <motion.div className="flex items-center justify-center flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full"
                style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}25` }}>
                {s.number}. {s.title}
              </span>
              {i < STEPS.length - 1 && <ArrowRight size={11} style={{ color: '#cbd5e1' }} />}
            </div>
          ))}
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {STEPS.map((step, i) => (
            <motion.div key={step.number}
              variants={fadeUp(i * 0.07)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: '#ffffff', border: `1px solid ${step.color}12`, boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}55, transparent)` }} />
              {/* BG number watermark */}
              <div className="absolute right-4 top-2 font-black pointer-events-none select-none"
                style={{ fontSize: '5rem', lineHeight: 1, color: `${step.color}06`, fontFamily: 'monospace' }}>
                {step.number}
              </div>
              <div className="relative z-10">
                {/* Icon + step */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}22` }}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded font-mono"
                      style={{ background: `${step.color}10`, color: step.color }}>STEP {step.number}</span>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]" style={{ color: '#94a3b8' }}>
                      <Clock size={10} /><span style={{ fontFamily: 'monospace' }}>{step.duration}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-black mb-0.5" style={{ color: '#1e293b' }}>{step.title}</h3>
                <p className="text-[11px] font-mono mb-3" style={{ color: '#94a3b8' }}>{step.titleEn}</p>
                <p className="text-sm leading-6 mb-3" style={{ color: '#475569' }}>{step.description}</p>
                <ul className="space-y-1 mb-3">
                  {step.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-xs leading-5" style={{ color: '#64748b' }}>
                      <CheckCircle2 size={11} className="flex-shrink-0 mt-0.5" style={{ color: step.color }} />{d}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                  style={{ background: `${step.color}08`, border: `1px solid ${step.color}18`, color: step.color }}>
                  <ArrowRight size={11} />成果物: {step.output}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ reassurance */}
        <motion.div className="rounded-2xl p-7"
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: '#ffffff', border: '1px solid rgba(2,132,199,0.12)', boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}>
          <div className="text-[10px] font-bold tracking-widest mb-5 text-center" style={{ color: '#0284c7', fontFamily: 'monospace' }}>
            よくある不安・疑問
          </div>
          <div className="space-y-4">
            {MINI_FAQ.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="flex gap-4">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5"
                  style={{ background: 'rgba(2,132,199,0.08)', color: '#0284c7' }}>Q</div>
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>{faq.q}</div>
                  <div className="text-xs leading-6" style={{ color: '#64748b' }}>→ {faq.a}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#contact" className="btn-primary inline-flex text-sm px-7 py-3">
              <MessageSquare size={15} />まずは無料相談する
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
