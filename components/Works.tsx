'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* ── イラスト/アニメーション ── */

/* 01 いろり山賊 — 囲炉裏・提灯の雰囲気 */
function IroriIllust() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      {/* 天井から下がる提灯 */}
      {[30, 80, 130].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="0" x2={x} y2="20" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6" />
          <ellipse cx={x} cy="30" rx="10" ry="14" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.7" />
          <ellipse cx={x} cy="30" rx="7" ry="11" fill="rgba(201,168,76,0.12)" />
          <ellipse cx={x} cy="38" rx="4" ry="2" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
          {/* 光のゆらぎ */}
          <motion.ellipse
            cx={x} cy="30" rx="14" ry="18"
            fill="rgba(201,168,76,0.05)"
            animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.05, 1] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        </g>
      ))}
      {/* 囲炉裏の床 */}
      <rect x="40" y="85" width="80" height="30" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" />
      {/* 炭火の光 */}
      <motion.ellipse
        cx="80" cy="95"
        rx="20" ry="6"
        fill="rgba(201,100,30,0.2)"
        animate={{ opacity: [0.2, 0.5, 0.2], rx: [20, 22, 20] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="80" cy="93"
        rx="10" ry="3"
        fill="rgba(220,120,40,0.35)"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* 炎の小さな揺らぎ */}
      {[70, 80, 90].map((x, i) => (
        <motion.path
          key={i}
          d={`M${x} 92 Q${x - 3} 84 ${x} 80 Q${x + 3} 84 ${x} 92Z`}
          fill="rgba(230,140,50,0.5)"
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 0.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
          style={{ transformOrigin: `${x}px 92px` }}
        />
      ))}
      {/* 暗い木の柱 */}
      <rect x="10" y="50" width="6" height="70" fill="rgba(255,255,255,0.04)" />
      <rect x="144" y="50" width="6" height="70" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

/* 02 転職 — デスクで考える人物シルエット */
function JobChangeIllust() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      {/* 窓 */}
      <rect x="100" y="10" width="45" height="55" rx="2" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
      <line x1="122" y1="10" x2="122" y2="65" stroke="rgba(201,168,76,0.15)" strokeWidth="0.6" />
      <line x1="100" y1="37" x2="145" y2="37" stroke="rgba(201,168,76,0.15)" strokeWidth="0.6" />
      {/* 窓からの光 */}
      <motion.rect
        x="100" y="10" width="45" height="55" rx="2"
        fill="rgba(201,168,76,0.04)"
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* デスク */}
      <rect x="15" y="88" width="90" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="20" y="92" width="4" height="20" fill="rgba(255,255,255,0.05)" />
      <rect x="95" y="92" width="4" height="20" fill="rgba(255,255,255,0.05)" />
      {/* PCモニター */}
      <rect x="35" y="65" width="36" height="24" rx="1" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
      <rect x="37" y="67" width="32" height="20" fill="rgba(201,168,76,0.06)" />
      <rect x="50" y="89" width="10" height="3" fill="rgba(255,255,255,0.06)" />
      {/* 画面の光の点滅 */}
      <motion.rect
        x="37" y="67" width="32" height="20"
        fill="rgba(201,168,76,0.04)"
        animate={{ opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* 人物シルエット（横向き、考えているポーズ） */}
      {/* 頭 */}
      <circle cx="75" cy="55" r="9" fill="rgba(255,255,255,0.08)" />
      {/* 胴体 */}
      <path d="M68 64 Q65 75 67 88 L83 88 Q85 75 82 64Z" fill="rgba(255,255,255,0.06)" />
      {/* 腕（顎に手を当てて考えるポーズ） */}
      <path d="M68 70 Q60 72 58 68 Q57 66 62 65" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
      {/* 浮かぶ疑問符 */}
      {['?', '?'].map((c, i) => (
        <motion.text
          key={i}
          x={i === 0 ? 92 : 105}
          y={i === 0 ? 45 : 35}
          fontSize="10"
          fill="rgba(201,168,76,0.5)"
          fontFamily="serif"
          animate={{ opacity: [0.2, 0.7, 0.2], y: [i === 0 ? 45 : 35, (i === 0 ? 45 : 35) - 4, i === 0 ? 45 : 35] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        >
          {c}
        </motion.text>
      ))}
    </svg>
  );
}

/* 03 Webライター — PC・タイピング */
function WriterIllust() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      {/* 大きなモニター */}
      <rect x="20" y="20" width="90" height="62" rx="3" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
      <rect x="22" y="22" width="86" height="58" fill="rgba(201,168,76,0.04)" />
      {/* モニター台 */}
      <rect x="55" y="82" width="20" height="5" fill="rgba(255,255,255,0.06)" />
      <rect x="45" y="87" width="40" height="3" rx="1" fill="rgba(255,255,255,0.05)" />
      {/* 画面上のテキスト行 */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={i}
          x="30" y={32 + i * 10}
          height="3" rx="1"
          fill="rgba(201,168,76,0.3)"
          initial={{ width: 0 }}
          animate={{ width: [0, 30 + Math.random() * 40, 30 + Math.random() * 40] }}
          transition={{ duration: 1.2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3, ease: 'easeOut' }}
        />
      ))}
      {/* カーソル点滅 */}
      <motion.rect
        x="30" y="82" width="1.5" height="10"
        fill="rgba(201,168,76,0.8)"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* キーボード */}
      <rect x="15" y="95" width="80" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3, 4, 5, 6].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={20 + col * 11} y={98 + row * 5}
            width="9" height="3.5" rx="0.5"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.3"
          />
        ))
      )}
      {/* SEOタグ */}
      <motion.g
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="118" y="30" width="32" height="14" rx="2" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
        <text x="123" y="41" fontSize="7" fill="#c9a84c" fontFamily="monospace">SEO</text>
      </motion.g>
    </svg>
  );
}

/* 04 動画視聴 — ソファでくつろぎながら視聴 */
function VideoIllust() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      {/* テレビ・モニター */}
      <rect x="10" y="15" width="100" height="65" rx="3" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
      <rect x="12" y="17" width="96" height="61" fill="rgba(201,168,76,0.04)" />
      {/* 再生ボタン */}
      <motion.polygon
        points="48,38 48,58 68,48"
        fill="rgba(201,168,76,0.5)"
        stroke="rgba(201,168,76,0.7)"
        strokeWidth="0.8"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '58px 48px' }}
      />
      {/* プログレスバー */}
      <rect x="12" y="72" width="96" height="3" fill="rgba(255,255,255,0.05)" />
      <motion.rect
        x="12" y="72" width="0" height="3"
        fill="rgba(201,168,76,0.6)"
        animate={{ width: [0, 96, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      {/* ソファシルエット */}
      <rect x="100" y="70" width="55" height="30" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="100" y="60" width="55" height="15" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="100" y="65" width="8" height="35" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="147" y="65" width="8" height="35" rx="2" fill="rgba(255,255,255,0.05)" />
      {/* 人物 */}
      <circle cx="128" cy="58" r="8" fill="rgba(255,255,255,0.07)" />
      <path d="M120 66 Q118 80 122 100 L134 100 Q138 80 136 66Z" fill="rgba(255,255,255,0.05)" />
      {/* 表示中の吹き出し */}
      <motion.g
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <rect x="78" y="25" width="28" height="16" rx="2" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.25)" strokeWidth="0.6" />
        <text x="83" y="36" fontSize="6.5" fill="#c9a84c" fontFamily="serif">ライター</text>
      </motion.g>
    </svg>
  );
}

/* ── 制作実績データ ── */
interface Work {
  num: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  Illust: React.FC;
}

const WORKS: Work[] = [
  {
    num: '01',
    title: 'いろり山賊',
    body: '私がおすすめしたいお出かけスポットは、山口県岩国市玖珂町にある「いろり山賊（汎河店）」です。山口県内でも有名な食事処で、山の中に突然現れるような独特の世界観が魅力のお店です。広い敷地には提灯や茅葺き屋根の建物、日本らしい庭園が広がっていて、まるで昔話や映画「千と千尋の神隠し」に入り込んだような幻想的な雰囲気を味わえます。公式でも日本の伝統文化を感じられる空間づくりが特徴とされており、名物の「山賊焼」や「山賊むすび」が人気です。',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&auto=format&fit=crop&q=80',
    imageAlt: 'いろり山賊 — 幻想的な雰囲気の食事処',
    Illust: IroriIllust,
  },
  {
    num: '02',
    title: '転職初心者がやりがちな失敗と回避法｜後悔しないために考えたいこと',
    body: '「今の仕事を辞めたいけど、次はどんな会社を選べばいいんだろう」\n初めて転職する人なら、そんな不安を感じるのではないでしょうか。求人を見ても、給料や休日、福利厚生など、どこを基準に選べばいいのか分からなくなることもあります。',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=480&auto=format&fit=crop&q=80',
    imageAlt: '転職を考える女性',
    Illust: JobChangeIllust,
  },
  {
    num: '03',
    title: 'Webライターを始めたきっかけと、その先に叶えたい未来',
    body: '私がWebライターを始めたきっかけは、パートナーの病気でした。\nこれまで私は、左官や水道、塗装、溶接、美容師、新幹線の製造など、土に現場に出て働く仕事を経験してきました。そんな中、パートナーが線維筋痛症と筋膜性疼痛症という2つの難病を抱え、自宅で付き添いや介助が必要な状況になりました。',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&auto=format&fit=crop&q=80',
    imageAlt: 'Webライターとして働く男性',
    Illust: WriterIllust,
  },
  {
    num: '04',
    title: '5つの動画を視聴して',
    body: '①動画を見た感想\n5本の動画を見て、特に印象に残ったのは、Webライターは「文章を書く仕事」というだけではなく、学びながらスキルを積み上げ、そのスキルを将来の資産にできる仕事だということです。初期費用をほとんどかけずに始められ、SEOなどを学ぶことで他のビジネスにもつながる点にも魅力を感じました。',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=480&auto=format&fit=crop&q=80',
    imageAlt: 'ホームオフィスで動画を視聴',
    Illust: VideoIllust,
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

export default function Works() {
  return (
    <section
      id="works"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #131313 100%)', padding: '6rem 0', position: 'relative' }}
    >
      {/* faint grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label-en" style={{ marginBottom: '0.75rem' }}>Works</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#f0ece4',
              letterSpacing: '0.1em',
            }}
          >
            制作実績
          </h2>
        </motion.div>

        {/* Work cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.12)' }}>
          {WORKS.map((work, i) => (
            <motion.article
              key={work.num}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                background: '#1a1a1a',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1.5rem',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                transition: 'background 0.2s',
              }}
              whileHover={{ backgroundColor: '#1e1e1e' } as never}
            >
              {/* Left: text content */}
              <div style={{ minWidth: 0 }}>
                {/* Number */}
                <div
                  className="font-display"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'rgba(201,168,76,0.35)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {work.num}
                </div>

                {/* Title row — with SVG illustration */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  {/* Animated illustration beside title */}
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    <work.Illust />
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                      fontWeight: 600,
                      color: '#f0ece4',
                      lineHeight: 1.5,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {work.title}
                  </h3>
                </div>

                {/* Body text */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#8a8278',
                    lineHeight: 1.9,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {work.body}
                </p>
              </div>

              {/* Right: photo */}
              <div
                style={{
                  flexShrink: 0,
                  width: 'clamp(120px, 18vw, 180px)',
                  aspectRatio: '4/3',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  border: '1px solid rgba(201,168,76,0.15)',
                  alignSelf: 'flex-start',
                }}
              >
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  style={{ objectFit: 'cover', filter: 'brightness(0.85) saturate(0.7)' }}
                  sizes="200px"
                />
                {/* gold tint overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(201,168,76,0.05)',
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
