'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#1e1e1e',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#f0ece4',
  borderRadius: '2px',
  padding: '0.75rem 1rem',
  fontSize: '0.85rem',
  fontFamily: "'Noto Sans JP', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  color: '#8a8278',
  letterSpacing: '0.08em',
  marginBottom: '0.5rem',
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [focusField, setFocusField] = useState<string | null>(null);

  const focusBorder = 'rgba(201,168,76,0.4)';
  const normalBorder = 'rgba(255,255,255,0.1)';

  return (
    <section
      id="contact"
      style={{ background: '#111111', padding: '6rem 0', position: 'relative' }}
    >
      {/* Subtle background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&auto=format&fit=crop&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label-en" style={{ marginBottom: '0.75rem' }}>Contact</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#f0ece4',
              letterSpacing: '0.1em',
            }}
          >
            お問い合わせ
          </h2>
        </motion.div>

        {/* Form card */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '4px',
            padding: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          {sent ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem 0',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              <CheckCircle2 size={40} style={{ color: '#c9a84c' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f0ece4' }}>
                送信が完了しました
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#8a8278' }}>
                お問い合わせありがとうございます。確認次第ご連絡いたします。
              </p>
            </div>
          ) : (
            <>
              {/* Intro text */}
              <p style={{ fontSize: '0.82rem', color: '#8a8278', lineHeight: 1.9, marginBottom: '2rem' }}>
                私のポートフォリオサイトにご訪問いただき、ありがとうございます。<br />
                お仕事のご依頼やご相談、ご不明な点等ございましたらお気軽にご連絡ください。<br />
                メールでのお問い合わせ先：<a
                  href="mailto:marcopagot0114@gmail.com"
                  style={{ color: '#c9a84c', textDecoration: 'none' }}
                >marcopagot0114@gmail.com</a>
              </p>

              <form
                onSubmit={e => { e.preventDefault(); if (privacy) setSent(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {/* お名前 */}
                <div>
                  <label style={labelStyle}>
                    お名前 <span style={{ color: '#c9a84c' }}>*</span>
                  </label>
                  <input
                    required
                    placeholder="Your Name"
                    style={{
                      ...inputStyle,
                      borderColor: focusField === 'name' ? focusBorder : normalBorder,
                    }}
                    onFocus={() => setFocusField('name')}
                    onBlur={() => setFocusField(null)}
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label style={labelStyle}>
                    メールアドレス <span style={{ color: '#c9a84c' }}>*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="example@email.com"
                    style={{
                      ...inputStyle,
                      borderColor: focusField === 'email' ? focusBorder : normalBorder,
                    }}
                    onFocus={() => setFocusField('email')}
                    onBlur={() => setFocusField(null)}
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label style={labelStyle}>
                    お問い合せ内容 <span style={{ color: '#c9a84c' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="お問合せ内容を入力してください"
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      borderColor: focusField === 'msg' ? focusBorder : normalBorder,
                    }}
                    onFocus={() => setFocusField('msg')}
                    onBlur={() => setFocusField(null)}
                  />
                </div>

                {/* プライバシーポリシー */}
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#8a8278', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                    プライバシーポリシーを確認する
                  </p>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={e => setPrivacy(e.target.checked)}
                      style={{
                        width: '14px',
                        height: '14px',
                        accentColor: '#c9a84c',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.78rem', color: '#8a8278' }}>
                      プライバシーポリシーに同意する
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!privacy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 2rem',
                    background: privacy ? '#c9a84c' : '#2a2a2a',
                    color: privacy ? '#0a0a0a' : '#5a5450',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    cursor: privacy ? 'pointer' : 'not-allowed',
                    transition: 'background 0.25s, color 0.25s',
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
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
