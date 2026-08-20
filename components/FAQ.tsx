'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import CircuitBackground from './backgrounds/CircuitBackground';

/* ── Data ────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
  category: string;
  color: string;
}

const FAQS: FaqItem[] = [
  /* ── 依頼前 ── */
  {
    category: '依頼前',
    color: '#00d4ff',
    q: 'まず何をすれば良いですか？',
    a: 'まずはお問い合わせフォームかメールでご連絡ください。「こんなものを作りたい」「こんな課題がある」という段階で十分です。詳細はヒアリングを通じて一緒に整理します。費用・スケジュールへのご不安もお気軽にお話しください。',
  },
  {
    category: '依頼前',
    color: '#00d4ff',
    q: '技術的な知識がなくても依頼できますか？',
    a: 'もちろん大丈夫です。「このExcel作業を自動化したい」「お問い合わせフォームを作りたい」など、業務課題や目的をお話しいただければ、技術的な提案はこちらで行います。専門用語は使わず分かりやすく説明します。',
  },
  {
    category: '依頼前',
    color: '#00d4ff',
    q: '今すぐ依頼できない場合は？',
    a: '「予算の目安が知りたい」「将来的に発注を検討している」という段階でのご相談も歓迎です。早めにご連絡いただくほど、スケジュールの調整がしやすくなります。',
  },
  /* ── 費用・契約 ── */
  {
    category: '費用・契約',
    color: '#a78bfa',
    q: '見積もりは無料ですか？',
    a: 'はい、お見積もりは無料です。ヒアリング後に詳細な提案書・見積書を作成してご提出します。見積もりを見てからご判断いただいて構いません。',
  },
  {
    category: '費用・契約',
    color: '#a78bfa',
    q: '支払いのタイミングはいつですか？',
    a: '基本的には着手金50%・納品時50%の2回払いです。長期プロジェクトは月次払いにも対応します。銀行振込・クレジットカード（PayPal）に対応しています。',
  },
  {
    category: '費用・契約',
    color: '#a78bfa',
    q: '予算が限られている場合はどうなりますか？',
    a: '予算に合わせてスコープを調整するご提案をします。「まずフェーズ1のコア機能だけ」「段階的に拡張する」という進め方も可能です。予算感を共有いただけると最適な提案ができます。',
  },
  /* ── 開発・進め方 ── */
  {
    category: '開発・進め方',
    color: '#10b981',
    q: '途中で仕様を変更できますか？',
    a: '軽微な変更は都度対応します。大きな仕様変更は追加工数・費用が発生する場合がありますが、事前にご相談の上で対応します。週次の進捗共有で早期に方向修正できるため、大幅な手戻りは起きにくい進め方をしています。',
  },
  {
    category: '開発・進め方',
    color: '#10b981',
    q: '進捗はどのように確認できますか？',
    a: 'Slack でリアルタイムに連絡が取れる環境を整えます。加えて週次または隔週でのZoom定例・進捗レポート・GitHubのPR単位でのデモ共有を行います。「連絡が取れない」「何をやっているか分からない」という状況にはなりません。',
  },
  {
    category: '開発・進め方',
    color: '#10b981',
    q: '開発中に別の会社やエンジニアと並行して進めても良いですか？',
    a: '問題ありません。ただし、コードベースの一貫性・セキュリティの観点から、事前に関係者を共有いただけると助かります。チーム開発への参画形式にも対応できます。',
  },
  /* ── 納品後 ── */
  {
    category: '納品後',
    color: '#f59e0b',
    q: '納品後にバグが見つかったら？',
    a: '納品から1ヶ月間は無償でバグ修正に対応します。それ以降は月額保守プランまたはスポット対応でサポートします。納品時に引き継ぎ資料と操作マニュアルもお渡ししますので、他のエンジニアへの引き継ぎも容易です。',
  },
  {
    category: '納品後',
    color: '#f59e0b',
    q: 'ソースコードの所有権はどうなりますか？',
    a: '納品完了・入金確認後に、制作物の著作権・所有権はすべてお客様に帰属します。GitHubリポジトリごと移管しますので、将来的に別のエンジニアへ引き継ぐことも可能です。',
  },
  {
    category: '納品後',
    color: '#f59e0b',
    q: '将来的な機能追加はお願いできますか？',
    a: 'はい、継続的なお付き合いを歓迎しています。月額保守プランの契約により、機能追加・改修・技術相談を継続してご依頼いただけます。システムの成長に合わせて長期的にサポートします。',
  },
];

/* ── Categories ─────────────────────────────────── */
const CATEGORIES = [
  { id: 'all',     label: 'すべて',     color: '#00d4ff' },
  { id: '依頼前',  label: '依頼前',     color: '#00d4ff' },
  { id: '費用・契約', label: '費用・契約', color: '#a78bfa' },
  { id: '開発・進め方', label: '開発・進め方', color: '#10b981' },
  { id: '納品後',  label: '納品後',     color: '#f59e0b' },
];

/* ── FAQ Item ────────────────────────────────────── */
function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: open ? `${item.color}04` : 'rgba(11,18,34,0.65)',
        border: `1px solid ${open ? item.color + '28' : 'rgba(255,255,255,0.06)'}`,
        backdropFilter: 'blur(12px)',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Question row */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-4 p-5 text-left"
      >
        {/* Q badge */}
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black mt-0.5"
          style={{ background: `${item.color}18`, color: item.color }}
        >
          Q
        </div>

        <span className="flex-1 text-sm font-semibold leading-6" style={{ color: '#e2e8f0' }}>
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={16} style={{ color: open ? item.color : '#3d5470' }} />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 flex gap-4" style={{ borderTop: `1px solid ${item.color}10` }}>
              {/* A badge */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black mt-4"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#3d5470' }}
              >
                A
              </div>
              <p className="text-sm leading-8 pt-4" style={{ color: '#94a3b8' }}>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main ────────────────────────────────────────── */
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visible = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="section relative" style={{ background: '#060b18' }}>
      {/* Background photo — person thinking / studying at desk */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1920&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(160deg, rgba(6,11,24,0.95) 0%, rgba(6,11,24,0.91) 50%, rgba(6,11,24,0.95) 100%)',
      }} />

      <CircuitBackground />

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(167,139,250,0.2), transparent)',
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.25)',
                boxShadow: '0 0 24px rgba(0,212,255,0.15)',
              }}
            >
              <HelpCircle size={26} style={{ color: '#00d4ff' }} />
            </div>
          </div>
          <p className="section-label justify-center">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#f0f6ff' }}>
            よくある質問
          </h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>
            依頼前の不安・疑問を解消します。
            ここにない質問もお気軽にご連絡ください。
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  background: isActive ? `${cat.color}18` : 'rgba(255,255,255,0.03)',
                  border:     isActive ? `1px solid ${cat.color}44` : '1px solid rgba(255,255,255,0.07)',
                  color:      isActive ? cat.color : '#3d5470',
                  transform:  isActive ? 'scale(1.05)' : 'scale(1)',
                  boxShadow:  isActive ? `0 0 14px ${cat.color}18` : 'none',
                }}
              >
                {cat.label}
                <span className="ml-1.5 opacity-60">
                  ({cat.id === 'all' ? FAQS.length : FAQS.filter(f => f.category === cat.id).length})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* FAQ list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {visible.map((item, i) => (
              <FaqRow key={item.q} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 p-7 rounded-2xl text-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            background: 'rgba(11,18,34,0.8)',
            border: '1px solid rgba(0,212,255,0.12)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="flex justify-center mb-3">
            <MessageSquare size={20} style={{ color: '#00d4ff' }} />
          </div>
          <h3 className="text-lg font-black mb-2" style={{ color: '#f1f5f9' }}>
            まだ疑問がありますか？
          </h3>
          <p className="text-sm mb-5" style={{ color: '#64748b' }}>
            どんな小さな質問でもお気軽にどうぞ。<br />
            24時間以内に返信します（営業日）。
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            <MessageSquare size={15} />
            直接質問する
          </a>
        </motion.div>

      </div>
    </section>
  );
}
