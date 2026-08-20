'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, Clock, CheckCircle2, ChevronDown } from 'lucide-react';

const INFO = [
  { icon: <Mail size={16} />,         label: 'Email',    value: 'gold77chi11@gmail.com',   href: 'mailto:gold77chi11@gmail.com', color: '#3a7bd5' },
  { icon: <MapPin size={16} />,       label: '所在地',   value: '台北市 大安區（台湾）',      href: null, color: '#8b5cf6' },
  { icon: <MessageSquare size={16} />,label: '対応言語', value: '日本語・中国語・英語',        href: null, color: '#2bb5a0' },
  { icon: <Clock size={16} />,        label: '返信目安', value: '24 時間以内（営業日）',       href: null, color: '#e8a949' },
];

const FAQ_ITEMS = [
  { q: '見積もりは無料ですか？',               a: 'はい、初回のご相談・見積もりは完全無料です。まずはお気軽にご連絡ください。' },
  { q: '対応できる案件の規模は？',              a: '個人の小規模案件から 25 名規模のチーム開発まで幅広く対応できます。' },
  { q: 'リモートワークは可能ですか？',           a: 'はい、フルリモートでの対応が可能です。台湾・日本どちらのプロジェクトも対応します。' },
];

const BUDGET_OPTIONS = ['〜 50万円', '50万〜100万円', '100万〜300万円', '300万円以上', '要相談'];
const TIMELINE_OPTIONS = ['1 ヶ月以内', '1〜3 ヶ月', '3〜6 ヶ月', '6 ヶ月以上', '未定'];
const TYPE_OPTIONS = ['業務システム開発', 'Web アプリ開発', 'フルスタック参画', 'AWS 構築・移行', 'コードレビュー', 'その他'];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

function SelectField({ label, options, id }: { label: string; options: string[]; id: string }) {
  return (
    <div className="flex-1 relative">
      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5a4e3a' }}>{label}</label>
      <div className="relative">
        <select
          id={id}
          className="w-full appearance-none px-3.5 py-2.5 rounded-xl text-sm pr-8"
          style={{
            background: '#fff',
            border: '1.5px solid rgba(45,36,22,0.12)',
            color: '#5a4e3a',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="">選択してください</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#a89880' }} />
      </div>
    </div>
  );
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)' }}>
      {/* Background – Japanese city nature blend / cherry blossoms */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(237,230,204,0.91)' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>お問い合わせ</h2>
          <div className="divider" />
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: '#8c7d65' }}>
            プロジェクトのご相談・お問い合わせはお気軽にご連絡ください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* ── Left: Info panel ── */}
          <motion.div className="md:col-span-2 space-y-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}>

            {/* Availability card */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)', boxShadow: '0 4px 24px rgba(43,181,160,0.25)' }}>
              <div className="p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <span className="font-bold text-sm">現在 案件受付中</span>
                </div>
                <div className="text-white/80 text-xs leading-6 mb-4">
                  フルスタック開発・AWS 構築・コンサルティングなど幅広く対応しています。
                  まずはお気軽にご連絡ください。
                </div>
                <a href="mailto:gold77chi11@gmail.com" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm"
                  style={{ background: 'rgba(255,255,255,0.20)', border: '1px solid rgba(255,255,255,0.30)', color: '#fff' }}>
                  <Mail size={14} />
                  gold77chi11@gmail.com
                </a>
              </div>
            </div>

            {/* Contact info */}
            {INFO.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{ background: '#fff', border: `1px solid ${item.color}14`, boxShadow: '0 1px 6px rgba(45,36,22,0.05)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}10`, color: item.color }}>{item.icon}</div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono tracking-wide mb-0.5" style={{ color: item.color }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-sm font-medium hover:underline truncate block" style={{ color: item.color }}>{item.value}</a>
                    : <div className="text-sm font-medium" style={{ color: '#5a4e3a' }}>{item.value}</div>
                  }
                </div>
              </motion.div>
            ))}

            {/* Mini FAQ */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(45,36,22,0.08)', boxShadow: '0 2px 12px rgba(45,36,22,0.06)' }}>
              <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(45,36,22,0.07)' }}>
                <span className="text-[10px] font-bold tracking-[0.3em]" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>よくある質問</span>
              </div>
              <div className="divide-y" style={{ borderColor: 'rgba(45,36,22,0.06)' }}>
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i}>
                    <button
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-2"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-xs font-semibold" style={{ color: '#2d2416' }}>{item.q}</span>
                      <ChevronDown size={13} style={{ color: '#a89880', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-3 text-xs leading-6" style={{ color: '#8c7d65' }}>{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div className="md:col-span-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.2)}>
            <div className="rounded-2xl p-6"
              style={{ background: '#fff', border: '1px solid rgba(45,36,22,0.08)', boxShadow: '0 4px 24px rgba(45,36,22,0.08)' }}>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(43,181,160,0.12)' }}>
                    <CheckCircle2 size={32} style={{ color: '#2bb5a0' }} />
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: '#2d2416' }}>送信が完了しました</h3>
                  <p className="text-sm" style={{ color: '#8c7d65' }}>24 時間以内にご連絡いたします。</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <h3 className="text-lg font-black mb-4" style={{ color: '#2d2416' }}>プロジェクトのご相談、お気軽に</h3>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5a4e3a' }}>お名前 <span style={{ color: '#e86c5d' }}>*</span></label>
                      <input required placeholder="山田 太郎" className="w-full px-3.5 py-2.5 rounded-xl text-sm"
                        style={{ background: '#fff', border: '1.5px solid rgba(45,36,22,0.12)', color: '#2d2416', outline: 'none' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5a4e3a' }}>メールアドレス <span style={{ color: '#e86c5d' }}>*</span></label>
                      <input required type="email" placeholder="your@email.com" className="w-full px-3.5 py-2.5 rounded-xl text-sm"
                        style={{ background: '#fff', border: '1.5px solid rgba(45,36,22,0.12)', color: '#2d2416', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Budget + Timeline + Type */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <SelectField label="予算規模" options={BUDGET_OPTIONS} id="budget" />
                    <SelectField label="希望期間" options={TIMELINE_OPTIONS} id="timeline" />
                    <SelectField label="案件種別" options={TYPE_OPTIONS} id="type" />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5a4e3a' }}>お問い合わせ内容</label>
                    <textarea rows={4} placeholder="ご依頼の内容・ご要望をお知らせください..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm resize-none"
                      style={{ background: '#fff', border: '1.5px solid rgba(45,36,22,0.12)', color: '#2d2416', outline: 'none' }} />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} />
                    相談内容を送信する
                  </button>
                  <p className="text-center text-xs" style={{ color: '#a89880' }}>
                    ✦ 無料でご相談いただけます — 返信まで最大 24 時間
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
