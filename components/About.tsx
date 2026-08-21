'use client';
import { motion } from 'framer-motion';

/* 経歴データ */
const CAREER = [
  { year: '2010年', desc: '左官・水道工事系の仕事に就職' },
  { year: '2013年', desc: 'スマートフォン製造系の企業に就職' },
  { year: '2014年', desc: '塗装系の企業に就職' },
  { year: '2015年', desc: '溶接系の企業に就職' },
  { year: '2018年', desc: '美容系の企業に就職' },
  { year: '2021年', desc: '新幹線製造・バフ研磨系の企業に就職' },
  { year: '2026年', desc: 'Webライターとして活動開始' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  },
});

/* 小さな植物アイコン（SVGイラスト） */
function LeafIcon() {
  return (
    <svg width="40" height="44" viewBox="0 0 40 44" fill="none" aria-hidden="true">
      <path
        d="M20 42 C20 42 4 32 4 18 C4 10 10 4 20 4 C30 4 36 10 36 18 C36 32 20 42 20 42Z"
        fill="none"
        stroke="#c9a84c"
        strokeWidth="1"
        opacity="0.6"
      />
      <path d="M20 42 C20 42 10 28 20 4" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
      <path d="M20 20 C14 14 8 16 6 22" stroke="#a8883a" strokeWidth="0.8" opacity="0.5" />
      <path d="M20 26 C26 20 32 22 34 28" stroke="#a8883a" strokeWidth="0.8" opacity="0.5" />
      {/* Small leaves */}
      <ellipse cx="10" cy="10" rx="5" ry="8" fill="#c9a84c" opacity="0.3" transform="rotate(-30 10 10)" />
      <ellipse cx="16" cy="6" rx="4" ry="7" fill="#a8883a" opacity="0.35" transform="rotate(10 16 6)" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: '#111111', position: 'relative', padding: '6rem 0' }}>
      {/* Subtle dark texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&auto=format&fit=crop&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Section header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label-en" style={{ marginBottom: '0.75rem' }}>About</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#f0ece4',
              letterSpacing: '0.1em',
            }}
          >
            私について
          </h2>
        </motion.div>

        {/* Card */}
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
            position: 'relative',
          }}
        >
          {/* Leaf decoration */}
          <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', opacity: 0.7 }}>
            <LeafIcon />
          </div>

          {/* 経歴 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3
              className="gold-line font-display"
              style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#c9a84c',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
              }}
            >
              ー経歴ー
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {CAREER.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: '#c9a84c',
                      fontFamily: "'Cormorant Garamond', serif",
                      flexShrink: 0,
                      minWidth: '4.5rem',
                    }}
                  >
                    {item.year}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#c8c0b0', lineHeight: 1.7 }}>
                    {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 区切り線 */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(201,168,76,0.15)',
              marginBottom: '2.5rem',
            }}
          />

          {/* 私の強み */}
          <div>
            <h3
              className="gold-line font-display"
              style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#c9a84c',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
              }}
            >
              ー私の強みー
            </h3>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#c8c0b0',
                  lineHeight: 2,
                  marginBottom: '1.2rem',
                }}
              >
                はじめまして、MarcoPagotと申します。
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#c8c0b0',
                  lineHeight: 2,
                  marginBottom: '1.2rem',
                }}
              >
                これまで製造業や建設業、美容業など、さまざまな業界で現場経験を積み、現在はWebライターとして活動しています。幅広い職種を経験してきたからこそ得られた知識や視点を活かし、読者にとって分かりやすく、信頼できる記事制作を心がけています。
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#c8c0b0',
                  lineHeight: 2,
                  marginBottom: '1.2rem',
                }}
              >
                <strong style={{ color: '#f0ece4' }}>私の強みは、多様な業界で培った経験をもとに、読者の立場に寄り添った文章を書けることです。</strong>左官・水道工事、スマートフォン製造、塗装、溶接、美容、新幹線製造など、多岐にわたる現場を経験してきたことで、幅広い視点から物事を捉えられるようになりました。実体験を交えながら、「自分のことかもしれない」と共感していただける記事を意識し、一つひとつ丁寧に執筆しています。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
