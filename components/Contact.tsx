'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, ExternalLink, Clock } from 'lucide-react';
import WaveBackground from './backgrounds/WaveBackground';

/* ── Data ───────────────────────────────────────── */
const INFO = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'gold77chi11@gmail.com',
    href: 'mailto:gold77chi11@gmail.com',
    color: '#00c8f0',
  },
  {
    icon: <MapPin size={18} />,
    label: '所在地',
    value: '台北市 大安區（台湾）',
    href: null,
    color: '#8b5cf6',
  },
  {
    icon: <MessageSquare size={18} />,
    label: '対応言語',
    value: '日本語・中国語・英語',
    href: null,
    color: '#10b981',
  },
  {
    icon: <Clock size={18} />,
    label: '返信目安',
    value: '24 時間以内（営業日）',
    href: null,
    color: '#f59e0b',
  },
];

const TOPICS = [
  '業務システム開発の依頼',
  'Web アプリ新規開発',
  'フルスタック要員としての参画',
  'AWS インフラ構築・移行',
  'コードレビュー・技術相談',
  'その他お問い合わせ',
];

/* ── Animation variants ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
});

/* ── Main ────────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="section relative" style={{ background: '#050810' }}>
      {/* Background photo — professional woman working at desk, thoughtful expression */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(160deg, rgba(5,8,16,0.95) 0%, rgba(5,8,16,0.90) 50%, rgba(5,8,16,0.95) 100%)',
      }} />

      <WaveBackground />

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #00c8f0 30%, #8b5cf6 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
        >
          <p className="section-label justify-center">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            お問い合わせ
          </h2>
          <div className="divider" />
          <p className="mt-6 text-sm max-w-lg mx-auto leading-7" style={{ color: '#64748b' }}>
            案件のご相談・採用に関するお問い合わせはお気軽にご連絡ください。
            <br />
            <span style={{ color: '#334155' }}>
              Feel free to reach out for project inquiries or employment opportunities.
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* ── Left column: info ── */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp(0.1)}
          >
            {/* Availability banner */}
            <div
              className="p-4 rounded-2xl flex items-center gap-4 mb-2"
              style={{
                background: 'rgba(16,185,129,0.07)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: '#10b981' }} />
                <div
                  className="absolute inset-0 w-3.5 h-3.5 rounded-full"
                  style={{ background: '#10b981', animation: 'ripple 1.5s ease-out infinite' }}
                />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#10b981' }}>現在、案件受付中</div>
                <div className="text-xs" style={{ color: '#334155' }}>Available for new projects</div>
              </div>
            </div>

            {/* Contact info cards */}
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: 'rgba(14,22,40,0.6)',
                  border: `1px solid ${item.color}18`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono tracking-wide mb-0.5" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium truncate block transition-colors hover:underline"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Topic tags */}
            <div className="mt-2">
              <div className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#334155' }}>
                INQUIRY TOPICS
              </div>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map(t => (
                  <span key={t} className="tag-neutral text-[11px] px-2.5 py-1">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column: CTA card ── */}
          <motion.div
            className="md:col-span-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp(0.2)}
          >
            <div
              className="h-full p-8 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(14,22,40,0.75)',
                border: '1px solid rgba(0,200,240,0.12)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Top decoration */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
                <div className="flex-1 h-px mx-2" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <span className="text-[10px] font-mono" style={{ color: '#334155' }}>contact.tsx</span>
              </div>

              <h3 className="text-2xl font-black mb-1" style={{ color: '#f1f5f9' }}>
                プロジェクトについて話しましょう
              </h3>
              <p className="text-sm mb-8" style={{ color: '#475569' }}>
                Let&apos;s discuss your project and how I can help.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8 flex-1">
                {[
                  {
                    title: 'フルスタック対応',
                    desc:  '要件定義・設計・実装・デプロイまで一気通貫',
                    color: '#00c8f0',
                  },
                  {
                    title: '多言語コミュニケーション',
                    desc:  '日本語・中国語・英語で仕様確認・調整が可能',
                    color: '#8b5cf6',
                  },
                  {
                    title: '即戦力として参画',
                    desc:  '5年以上の実績で早期に価値提供できます',
                    color: '#10b981',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: '#e2e8f0' }}>{item.title}</div>
                      <div className="text-xs" style={{ color: '#64748b' }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Primary CTA */}
              <a
                href="mailto:gold77chi11@gmail.com"
                className="btn-primary w-full justify-center text-sm mb-3"
                style={{ display: 'flex' }}
              >
                <Send size={15} />
                メールで連絡する
              </a>

              {/* Secondary */}
              <a
                href="mailto:gold77chi11@gmail.com?subject=Portfolio%20Inquiry"
                className="flex items-center justify-center gap-2 text-xs py-2 transition-colors"
                style={{ color: '#334155' }}
              >
                <ExternalLink size={12} />
                gold77chi11@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
