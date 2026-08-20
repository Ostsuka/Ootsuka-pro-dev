'use client';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Award, CheckCircle2, Zap, Users, Target } from 'lucide-react';
import GridBackground from './backgrounds/GridBackground';

/* ── Data ────────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    icon: <MapPin size={16} />,
    label: '所在地',
    value: '台北市 大安區（台湾）',
    color: '#00d4ff',
  },
  {
    icon: <GraduationCap size={16} />,
    label: '最終学歴',
    value: '淡江大学 情報工学科 学士（2021年卒）',
    color: '#a78bfa',
  },
  {
    icon: <Languages size={16} />,
    label: '語学力',
    value: '中国語（ネイティブ）・日本語（ビジネス）・英語（技術読解）',
    color: '#10b981',
  },
  {
    icon: <Award size={16} />,
    label: '資格',
    value: '基本情報技術者試験 合格（2023年）',
    color: '#f59e0b',
  },
];

const NUMBERS = [
  { value: '5+',  label: '年の開発経験',    sub: 'Years Exp.',   color: '#00d4ff', icon: <Zap size={16} /> },
  { value: '30%', label: '業務効率化実績',  sub: 'Productivity',  color: '#10b981', icon: <Target size={16} /> },
  { value: '20%', label: 'エラー率削減',    sub: 'Error Reduce',  color: '#a78bfa', icon: <CheckCircle2 size={16} /> },
  { value: '25+', label: 'チーム開発経験',  sub: 'Team Members',  color: '#f59e0b', icon: <Users size={16} /> },
];

const STRENGTHS = [
  'フロントエンドから AWS 運用まで一人で完結できる一気通貫スキル',
  '日本語のみでの仕様確認・コードレビュー実績 2年以上',
  'チーム規模 3〜25 名の多様な環境で即戦力として活躍',
  '製造・流通・EC など複数ドメインの深い業務知識',
  '業務プロセス改善で定量的な成果を継続提供',
];

const LANGS = [
  { lang: '中国語', level: '母国語', pct: 100, color: '#00d4ff' },
  { lang: '日本語', level: 'ビジネス', pct: 82, color: '#a78bfa' },
  { lang: '英語',   level: '技術読解', pct: 60, color: '#10b981' },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  },
});

/* ── Component ───────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="section relative" style={{ background: '#070c18' }}>
      {/* Background photo — 2 women discussing business in a modern office */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay — keeps text readable while showing the photo softly */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(160deg, rgba(7,12,24,0.93) 0%, rgba(7,12,24,0.88) 40%, rgba(7,12,24,0.92) 100%)',
      }} />

      <GridBackground accent="#a78bfa" accent2="#00d4ff" />

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.3), rgba(0,212,255,0.3), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
        >
          <p className="section-label justify-center">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{ color: '#f0f6ff' }}>
            自己紹介
          </h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: '#3d5470' }}>
            台湾出身のフルスタックエンジニア。設計から運用まで一貫して担当します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column ── */}
          <div className="space-y-8">

            {/* Profile card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.1)}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(11,18,34,0.7)',
                border: '1px solid rgba(0,212,255,0.14)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Card header */}
              <div className="px-6 py-4 flex items-center gap-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
                <span className="ml-2 text-[10px]" style={{ color: '#1e293b', fontFamily: 'monospace' }}>profile.tsx</span>
              </div>

              <div className="p-6">
                {/* Identity row */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
                      boxShadow: '0 0 24px rgba(0,212,255,0.35)',
                    }}
                  >
                    <span className="text-white">U</span>
                  </div>
                  <div>
                    <div className="font-black text-lg leading-tight" style={{ color: '#f0f6ff' }}>URAN</div>
                    <div className="text-xs mt-0.5" style={{ color: '#3d5470', fontFamily: 'monospace' }}>
                      Full-Stack Engineer
                    </div>
                    {/* Online status */}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#10b981' }} />
                        <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }} />
                      </span>
                      <span className="text-[10px] font-semibold" style={{ color: '#10b981' }}>Available for work</span>
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <div className="space-y-4 text-[14.5px] leading-8" style={{ color: '#8fa3bf' }}>
                  <p>
                    台湾出身のフルスタックエンジニア。
                    <span style={{ color: '#f0f6ff', fontWeight: 700 }}>React・TypeScript・Java（Spring Boot）・PHP（Laravel）</span>
                    を中心に、製造・流通・EC 業界の業務システム開発に
                    <span style={{ color: '#00d4ff', fontWeight: 700 }}> 5年以上</span>携わってきました。
                  </p>
                  <p>
                    画面実装から API 設計・AWS デプロイ・運用保守まで
                    <span style={{ color: '#f0f6ff', fontWeight: 600 }}>一気通貫で担当</span>
                    できるため、少人数チームでも大きな価値を提供できます。
                  </p>
                  <p>
                    業務改善で生産性を
                    <span style={{ color: '#10b981', fontWeight: 700 }}>約 30% 向上</span>、
                    フォーム改善でエラー率を
                    <span style={{ color: '#10b981', fontWeight: 700 }}>約 20% 削減</span>
                    した実績があり、コードを書くだけでなくビジネス成果に直結するエンジニアリングを実践しています。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.2)}
            >
              <div className="text-[10px] font-bold tracking-[0.35em] mb-4" style={{ color: '#00d4ff', fontFamily: 'monospace' }}>
                ✦ STRENGTHS
              </div>
              <ul className="space-y-3">
                {STRENGTHS.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 text-sm py-2 px-4 rounded-xl"
                    style={{
                      background: 'rgba(0,212,255,0.04)',
                      border: '1px solid rgba(0,212,255,0.08)',
                      color: '#8fa3bf',
                    }}
                  >
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                    <span>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.3)}
              className="flex flex-wrap gap-2"
            >
              {['即戦力', 'フルスタック', 'チーム開発', 'AWS運用', 'CI/CD', '多言語対応', '設計〜納品', 'アジャイル'].map(tag => (
                <span key={tag} className="tag text-[11px]">{tag}</span>
              ))}
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-5">

            {/* Info cards */}
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp(0.12 + i * 0.1)}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all"
                style={{
                  background: 'rgba(11,18,34,0.6)',
                  border: `1px solid ${h.color}18`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${h.color}14`, color: h.color, border: `1px solid ${h.color}28` }}
                >
                  {h.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest mb-1" style={{ color: h.color, fontFamily: 'monospace' }}>
                    {h.label.toUpperCase()}
                  </div>
                  <div className="text-sm leading-6" style={{ color: '#cbd5e1' }}>{h.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Language proficiency */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.55)}
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(11,18,34,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-[10px] font-bold tracking-widest mb-4" style={{ color: '#00d4ff', fontFamily: 'monospace' }}>
                LANGUAGE SKILLS
              </div>
              <div className="space-y-4">
                {LANGS.map((l, i) => (
                  <div key={l.lang}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{l.lang}</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{
                        background: `${l.color}14`,
                        color: l.color,
                        fontFamily: 'monospace',
                      }}>{l.level}</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        className="progress-bar"
                        style={{ background: `linear-gradient(90deg, ${l.color}88, ${l.color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement numbers */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.65)}
              className="grid grid-cols-2 gap-3"
            >
              {NUMBERS.map((n, i) => (
                <motion.div
                  key={n.label}
                  whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
                  className="p-4 rounded-2xl text-center relative overflow-hidden"
                  style={{
                    background: 'rgba(11,18,34,0.75)',
                    border: `1px solid ${n.color}18`,
                  }}
                >
                  {/* bg radial */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${n.color}0e 0%, transparent 70%)`,
                  }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-1" style={{ color: n.color }}>
                      {n.icon}
                    </div>
                    <div
                      className="text-2xl font-black mb-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${n.color}, ${n.color}bb)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {n.value}
                    </div>
                    <div className="text-[11px] leading-tight" style={{ color: '#3d5470' }}>{n.label}</div>
                    <div className="text-[9px] mt-0.5" style={{ color: '#1e293b', fontFamily: 'monospace' }}>{n.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
