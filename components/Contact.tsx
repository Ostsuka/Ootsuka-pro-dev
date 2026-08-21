'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

const inputCls: React.CSSProperties = {
  width: '100%',
  background: 'var(--surface2)',
  border: '1.5px solid rgba(45,36,22,0.12)',
  color: '#2d2416',
  borderRadius: '10px',
  padding: '0.72rem 1rem',
  fontSize: '0.85rem',
  fontFamily: "'Noto Sans JP', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [sent, setSent]       = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [focus, setFocus]     = useState<string | null>(null);

  return (
    <section id="contact" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(237,230,204,0.93) 0%, rgba(232,225,198,0.90) 100%)' }}
      />

      <div className="section-inner max-w-3xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div className="text-center mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>お問い合わせ</h2>
          <div className="divider" />
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.82)',
            border: '1px solid rgba(45,36,22,0.09)',
            boxShadow: '0 4px 24px rgba(45,36,22,0.08)',
            padding: 'clamp(1.75rem, 5vw, 2.75rem)',
          }}
        >
          {sent ? (
            /* ── Success ── */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 0', gap: '1rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(43,181,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={28} style={{ color: '#2bb5a0' }} />
              </div>
              <h3 className="text-lg font-black" style={{ color: '#2d2416' }}>送信が完了しました</h3>
              <p className="text-sm" style={{ color: '#8c7d65' }}>24 時間以内にご連絡いたします。</p>
            </div>
          ) : (
            <>
              {/* Intro */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl"
                style={{ background: 'rgba(43,181,160,0.06)', border: '1px solid rgba(43,181,160,0.15)' }}>
                <Mail size={16} style={{ color: '#2bb5a0', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.82rem', color: '#5a4e3a', lineHeight: 1.8 }}>
                  私のポートフォリオサイトにご訪問いただき、ありがとうございます。<br />
                  お仕事のご依頼やご相談、ご不明な点等ございましたらお気軽にご連絡ください。<br />
                  メールでのお問い合わせ先：
                  <a href="mailto:gold77chi11@gmail.com" style={{ color: '#2bb5a0', fontWeight: 600 }}>
                    gold77chi11@gmail.com
                  </a>
                </p>
              </div>

              <form
                onSubmit={e => { e.preventDefault(); if (privacy) setSent(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* お名前 */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5a4e3a', marginBottom: '0.45rem' }}>
                    お名前 <span style={{ color: '#e86c5d' }}>*</span>
                  </label>
                  <input
                    required
                    placeholder="Your Name"
                    style={{ ...inputCls, borderColor: focus === 'name' ? 'rgba(43,181,160,0.45)' : 'rgba(45,36,22,0.12)' }}
                    onFocus={() => setFocus('name')}
                    onBlur={() => setFocus(null)}
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5a4e3a', marginBottom: '0.45rem' }}>
                    メールアドレス <span style={{ color: '#e86c5d' }}>*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="example@email.com"
                    style={{ ...inputCls, borderColor: focus === 'email' ? 'rgba(43,181,160,0.45)' : 'rgba(45,36,22,0.12)' }}
                    onFocus={() => setFocus('email')}
                    onBlur={() => setFocus(null)}
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5a4e3a', marginBottom: '0.45rem' }}>
                    お問い合せ内容 <span style={{ color: '#e86c5d' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="お問合せ内容を入力してください"
                    style={{ ...inputCls, resize: 'vertical', borderColor: focus === 'msg' ? 'rgba(43,181,160,0.45)' : 'rgba(45,36,22,0.12)' }}
                    onFocus={() => setFocus('msg')}
                    onBlur={() => setFocus(null)}
                  />
                </div>

                {/* プライバシーポリシー */}
                <div style={{ borderTop: '1px solid rgba(45,36,22,0.07)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.73rem', color: '#8c7d65', marginBottom: '0.6rem' }}>
                    プライバシーポリシーを確認する
                  </p>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={e => setPrivacy(e.target.checked)}
                      style={{ width: '15px', height: '15px', accentColor: '#2bb5a0', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.78rem', color: '#5a4e3a' }}>プライバシーポリシーに同意する</span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!privacy}
                  className={privacy ? 'btn-primary' : ''}
                  style={!privacy ? {
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700,
                    background: 'rgba(45,36,22,0.08)', color: '#a89880', border: 'none', cursor: 'not-allowed',
                  } : {}}
                >
                  <Send size={15} />
                  送信
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
