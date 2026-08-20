'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, ExternalLink, Clock } from 'lucide-react';

const INFO = [
  { icon: <Mail size={18} />,        label: 'Email',    value: 'gold77chi11@gmail.com',   href: 'mailto:gold77chi11@gmail.com', color: '#0284c7' },
  { icon: <MapPin size={18} />,      label: '所在地',   value: '台北市 大安區（台湾）',      href: null, color: '#7c3aed' },
  { icon: <MessageSquare size={18}/>,label: '対応言語', value: '日本語・中国語・英語',         href: null, color: '#059669' },
  { icon: <Clock size={18} />,       label: '返信目安', value: '24 時間以内（営業日）',       href: null, color: '#d97706' },
];

const TOPICS = ['業務システム開発の依頼','Web アプリ新規開発','フルスタック要員としての参画','AWS インフラ構築・移行','コードレビュー・技術相談','その他お問い合わせ'];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center 35%',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(248,250,252,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.20), rgba(124,58,237,0.20), transparent)',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <p className="section-label justify-center">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#0f172a' }}>お問い合わせ</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-lg mx-auto leading-7" style={{ color: '#64748b' }}>
            案件のご相談・採用に関するお問い合わせはお気軽にご連絡ください。<br />
            <span style={{ color: '#94a3b8' }}>Feel free to reach out for project inquiries or employment opportunities.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left */}
          <motion.div className="md:col-span-2 flex flex-col gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}>
            {/* Availability */}
            <div className="p-4 rounded-2xl flex items-center gap-4"
              style={{ background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.18)' }}>
              <div className="relative flex-shrink-0">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: '#059669' }} />
                <div className="absolute inset-0 w-3.5 h-3.5 rounded-full" style={{ background: '#059669', animation: 'ripple 1.5s ease-out infinite' }} />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#059669' }}>現在、案件受付中</div>
                <div className="text-xs" style={{ color: '#64748b' }}>Available for new projects</div>
              </div>
            </div>

            {/* Info cards */}
            {INFO.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ background: '#ffffff', border: `1px solid ${item.color}12`, boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}10`, color: item.color }}>{item.icon}</div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono tracking-wide mb-0.5" style={{ color: item.color }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium truncate block hover:underline" style={{ color: item.color }}>{item.value}</a>
                  ) : (
                    <div className="text-sm font-medium" style={{ color: '#334155' }}>{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Topics */}
            <div className="mt-1">
              <div className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#94a3b8' }}>INQUIRY TOPICS</div>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map(t => <span key={t} className="tag-neutral text-[11px] px-2.5 py-1">{t}</span>)}
              </div>
            </div>
          </motion.div>

          {/* Right CTA card */}
          <motion.div className="md:col-span-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.2)}>
            <div className="h-full p-8 rounded-2xl flex flex-col"
              style={{ background: '#ffffff', border: '1px solid rgba(2,132,199,0.12)', boxShadow: '0 4px 24px rgba(15,23,42,0.07)' }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
                <div className="flex-1 h-px mx-2" style={{ background: 'rgba(15,23,42,0.06)' }} />
                <span className="text-[10px] font-mono" style={{ color: '#94a3b8' }}>contact.tsx</span>
              </div>

              <h3 className="text-2xl font-black mb-1" style={{ color: '#0f172a' }}>プロジェクトについて話しましょう</h3>
              <p className="text-sm mb-8" style={{ color: '#64748b' }}>Let&apos;s discuss your project and how I can help.</p>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  { title: 'フルスタック対応',       desc: '要件定義・設計・実装・デプロイまで一気通貫', color: '#0284c7' },
                  { title: '多言語コミュニケーション', desc: '日本語・中国語・英語で仕様確認・調整が可能', color: '#7c3aed' },
                  { title: '即戦力として参画',        desc: '5年以上の実績で早期に価値提供できます',     color: '#059669' },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}10`, color: item.color }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: '#1e293b' }}>{item.title}</div>
                      <div className="text-xs" style={{ color: '#64748b' }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a href="mailto:gold77chi11@gmail.com" className="btn-primary w-full justify-center text-sm mb-3" style={{ display: 'flex' }}>
                <Send size={15} />メールで連絡する
              </a>
              <a href="mailto:gold77chi11@gmail.com?subject=Portfolio%20Inquiry"
                className="flex items-center justify-center gap-2 text-xs py-2 transition-colors" style={{ color: '#94a3b8' }}>
                <ExternalLink size={12} />gold77chi11@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
