'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

const inputCls: React.CSSProperties = {
  width: '100%',
  background: 'var(--surface2)',
  border: '1.5px solid rgba(45,36,22,0.12)',
  color: '#2d2416',
  borderRadius: '10px',
  padding: '0.78rem 1rem',
  fontSize: '0.85rem',
  fontFamily: "'Noto Sans JP', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const INFO_ITEMS = [
  { icon: <Mail size={16} />,        label: 'メール',     value: 'gold77chi11@gmail.com',    color: '#3a7bd5', href: 'mailto:gold77chi11@gmail.com' },
  { icon: <MapPin size={16} />,      label: '所在地',     value: '台北市 大安區（台湾）',      color: '#8b5cf6', href: null },
  { icon: <Clock size={16} />,       label: '対応時間',   value: '平日 9:00〜18:00（JST）',   color: '#2bb5a0', href: null },
  { icon: <MessageCircle size={16} />,label: '返信目安',  value: '24 時間以内にご返信',        color: '#e8a949', href: null },
  { icon: <Phone size={16} />,       label: '対応言語',   value: '日本語・中国語・英語',        color: '#34c78a', href: null },
];

export default function Contact() {
  const [sent, setSent]       = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [focus, setFocus]     = useState<string | null>(null);

  return (
    <section id="contact" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(237,230,204,0.95) 0%, rgba(232,225,198,0.93) 100%)' }}
      />

      <div className="section-inner container-wide">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Contact</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2d2416', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            お問い合わせ
          </h2>
          <div className="divider" />
          <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: '#8c7d65', lineHeight: 1.8, maxWidth: '500px', margin: '1.25rem auto 0' }}>
            お仕事のご依頼・ご相談はお気軽にどうぞ。24 時間以内にご返信いたします。
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>

          {/* ── Left: Contact info ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Hero photo */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=700&auto=format&fit=crop&q=80"
                alt="連絡・相談シーン"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.82)' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(43,181,160,0.25), rgba(58,123,213,0.20))',
              }} />
              <div style={{
                position: 'absolute', bottom: '1.25rem', left: '1.25rem',
                padding: '0.75rem 1.25rem', borderRadius: '12px',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  AVAILABLE FOR PROJECTS
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34c78a', display: 'inline-block', animation: 'pulse-dot 1.5s ease-out infinite' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>現在 案件受付中</span>
                </div>
              </div>
            </div>

            {/* Info items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {INFO_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.9rem',
                    padding: '0.85rem 1rem', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.85)', border: `1px solid ${item.color}18`,
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${item.color}12`, color: item.color,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, color: item.color, letterSpacing: '0.15em', fontFamily: 'monospace', marginBottom: '0.1rem' }}>
                      {item.label.toUpperCase()}
                    </div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '0.82rem', color: '#2d2416', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                      : <span style={{ fontSize: '0.82rem', color: '#5a4e3a' }}>{item.value}</span>
                    }
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.15)}
          >
            <div style={{
              background: 'rgba(255,255,255,0.90)',
              border: '1px solid rgba(45,36,22,0.09)',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: '20px',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              backdropFilter: 'blur(8px)',
            }}>
              {sent ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 0', gap: '1rem', textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: 'rgba(43,181,160,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <CheckCircle2 size={32} style={{ color: '#2bb5a0' }} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#2d2416' }}>送信が完了しました</h3>
                  <p style={{ fontSize: '0.85rem', color: '#8c7d65' }}>24 時間以内にご連絡いたします。</p>
                </div>
              ) : (
                <>
                  {/* Intro */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    marginBottom: '1.75rem', padding: '0.9rem 1.1rem', borderRadius: '12px',
                    background: 'rgba(43,181,160,0.06)', border: '1px solid rgba(43,181,160,0.15)',
                  }}>
                    <Mail size={16} style={{ color: '#2bb5a0', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '0.8rem', color: '#5a4e3a', lineHeight: 1.85 }}>
                      ポートフォリオサイトへのご訪問ありがとうございます。<br />
                      お仕事のご依頼・ご相談はこちらのフォームからどうぞ。<br />
                      メール：<a href="mailto:gold77chi11@gmail.com" style={{ color: '#2bb5a0', fontWeight: 700 }}>gold77chi11@gmail.com</a>
                    </p>
                  </div>

                  <form
                    onSubmit={e => { e.preventDefault(); if (privacy) setSent(true); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    {/* Name + Email row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#5a4e3a', marginBottom: '0.4rem' }}>
                          お名前 <span style={{ color: '#e86c5d' }}>*</span>
                        </label>
                        <input
                          required
                          placeholder="Your Name"
                          style={{ ...inputCls, borderColor: focus === 'name' ? 'rgba(43,181,160,0.55)' : 'rgba(45,36,22,0.12)', boxShadow: focus === 'name' ? '0 0 0 3px rgba(43,181,160,0.10)' : 'none' }}
                          onFocus={() => setFocus('name')}
                          onBlur={() => setFocus(null)}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#5a4e3a', marginBottom: '0.4rem' }}>
                          メールアドレス <span style={{ color: '#e86c5d' }}>*</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="example@email.com"
                          style={{ ...inputCls, borderColor: focus === 'email' ? 'rgba(43,181,160,0.55)' : 'rgba(45,36,22,0.12)', boxShadow: focus === 'email' ? '0 0 0 3px rgba(43,181,160,0.10)' : 'none' }}
                          onFocus={() => setFocus('email')}
                          onBlur={() => setFocus(null)}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#5a4e3a', marginBottom: '0.4rem' }}>
                        件名
                      </label>
                      <input
                        placeholder="お問い合わせ件名"
                        style={{ ...inputCls, borderColor: focus === 'subject' ? 'rgba(43,181,160,0.55)' : 'rgba(45,36,22,0.12)', boxShadow: focus === 'subject' ? '0 0 0 3px rgba(43,181,160,0.10)' : 'none' }}
                        onFocus={() => setFocus('subject')}
                        onBlur={() => setFocus(null)}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#5a4e3a', marginBottom: '0.4rem' }}>
                        お問い合わせ内容 <span style={{ color: '#e86c5d' }}>*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="お問合せ内容を入力してください"
                        style={{ ...inputCls, resize: 'vertical', borderColor: focus === 'msg' ? 'rgba(43,181,160,0.55)' : 'rgba(45,36,22,0.12)', boxShadow: focus === 'msg' ? '0 0 0 3px rgba(43,181,160,0.10)' : 'none' }}
                        onFocus={() => setFocus('msg')}
                        onBlur={() => setFocus(null)}
                      />
                    </div>

                    {/* Privacy */}
                    <div style={{ borderTop: '1px solid rgba(45,36,22,0.08)', paddingTop: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={privacy}
                          onChange={e => setPrivacy(e.target.checked)}
                          style={{ width: '16px', height: '16px', accentColor: '#2bb5a0', cursor: 'pointer', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '0.78rem', color: '#5a4e3a' }}>プライバシーポリシーに同意する</span>
                      </label>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={!privacy}
                      whileHover={privacy ? { scale: 1.02, y: -1 } : undefined}
                      whileTap={privacy ? { scale: 0.98 } : undefined}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem',
                        padding: '0.85rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 700,
                        border: 'none', cursor: privacy ? 'pointer' : 'not-allowed',
                        background: privacy
                          ? 'linear-gradient(135deg, #2bb5a0, #3a7bd5)'
                          : 'rgba(45,36,22,0.08)',
                        color: privacy ? '#fff' : '#a89880',
                        boxShadow: privacy ? '0 4px 18px rgba(43,181,160,0.32)' : 'none',
                        transition: 'background 0.25s, box-shadow 0.25s',
                      }}
                    >
                      <Send size={15} />
                      送信する
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
