'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Languages, Award, CheckCircle2, Zap, Briefcase, TrendingUp, Users } from 'lucide-react';

const CAREER = [
  {
    period: '2021.10 — 2024.03', company: '宏碁股份有限公司 (Acer Inc.)',
    role: 'フルスタックエンジニア', type: '正社員', typeColor: '#3a7bd5',
    desc: 'TypeScript / React / Node.js スタックの企業向け Web アプリを要件定義から AWS デプロイまで一貫担当。業務改善で生産性を約 30% 向上。',
    color: '#3a7bd5',
  },
  {
    period: '2024.04 — 2026.01', company: '精誠資訊股份有限公司 (Systex)',
    role: 'バックエンドエンジニア', type: '業務委託 → 正社員', typeColor: '#8b5cf6',
    desc: 'PHP（Laravel）による製造・流通向け帳票管理システムの開発保守。25 名体制のチーム開発で実績を積み、正社員へ登用。',
    color: '#8b5cf6',
  },
  {
    period: '2026.03 — 現在', company: 'フリーランスエンジニア',
    role: 'フルスタックエンジニア', type: 'フリーランス', typeColor: '#2bb5a0',
    desc: 'Java（Spring Boot）・React / TypeScript（NestJS）を用いた業務システム開発案件を複数並行対応。設計から運用まで一貫担当。',
    color: '#2bb5a0',
  },
];

const HIGHLIGHTS = [
  { icon: <MapPin size={14} />,        label: '所在地',   value: '台北市 大安區（台湾）',                                    color: '#3a7bd5' },
  { icon: <GraduationCap size={14} />, label: '最終学歴', value: '淡江大学 情報工学科 学士（2021年卒）',                      color: '#8b5cf6' },
  { icon: <Languages size={14} />,     label: '語学力',   value: '中国語（ネイティブ）・日本語（ビジネス）・英語（技術読解）', color: '#2bb5a0' },
  { icon: <Award size={14} />,         label: '資格',     value: '基本情報技術者試験 合格（2023年）',                         color: '#e8a949' },
];

const STRENGTHS = [
  'フロントエンドから AWS 運用まで一人で完結できる一気通貫スキル',
  '日本語のみでの仕様確認・コードレビュー実績 2年以上',
  'チーム規模 3〜25 名の多様な環境で即戦力として活躍',
  '製造・流通・EC など複数ドメインの深い業務知識',
];

const NUMBERS = [
  { value: '5+',  label: '年の開発経験',    color: '#2bb5a0', icon: <Zap size={16} /> },
  { value: '30+', label: '完了プロジェクト', color: '#3a7bd5', icon: <Briefcase size={16} /> },
  { value: '30%', label: '業務効率化実績',   color: '#8b5cf6', icon: <TrendingUp size={16} /> },
  { value: '25+', label: 'チーム開発経験',   color: '#e8a949', icon: <Users size={16} /> },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function About() {
  return (
    <section id="about" className="section">
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center',
        }}
      />
      <div
        className="section-overlay"
        style={{ background: 'linear-gradient(160deg, rgba(245,238,216,0.95) 0%, rgba(237,230,204,0.92) 100%)' }}
      />

      <div className="section-inner container-wide">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">ABOUT ME</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2d2416', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            私について
          </h2>
          <div className="divider" />
        </motion.div>

        {/* ── Numbers bar ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.05)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {NUMBERS.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              style={{
                background: 'var(--surface)',
                padding: 'clamp(1rem, 2.5vw, 1.75rem)',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: n.color }}>{n.icon}</div>
              <div style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900, color: n.color, lineHeight: 1 }}>{n.value}</div>
              <div style={{ fontSize: '0.72rem', color: '#8c7d65', marginTop: '0.35rem', letterSpacing: '0.04em' }}>{n.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Layout: left card | right timeline ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* ── Left: Profile card ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Photo + basic info */}
            <div className="card" style={{ overflow: 'hidden' }}>
              <div style={{
                height: '120px', position: 'relative',
                background: 'linear-gradient(135deg, #2bb5a0 0%, #3a7bd5 50%, #8b5cf6 100%)',
              }}>
                {/* Office background hint */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60')",
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  opacity: 0.25,
                }} />
                <div className="absolute bottom-[-36px] left-5">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    style={{
                      width: '72px', height: '72px', borderRadius: '14px', overflow: 'hidden',
                      border: '3px solid #fff', boxShadow: '0 4px 20px rgba(45,36,22,0.18)',
                    }}
                  >
                    <Image src="/hero-profile-2.jpg" alt="URAN" width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </motion.div>
                </div>
              </div>
              <div style={{ padding: '2.8rem 1.4rem 1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#2d2416', lineHeight: 1.2 }}>URAN</div>
                    <div style={{ fontSize: '0.7rem', color: '#8c7d65', fontFamily: 'monospace', letterSpacing: '0.12em' }}>FULL-STACK ENGINEER</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
                      <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#34c78a', opacity: 0.75, animation: 'pulse-dot 1.5s ease-out infinite' }} />
                      <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#34c78a', display: 'inline-flex' }} />
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#34c78a' }}>案件受付中</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.85, color: '#5a4e3a' }}>
                  台湾出身のフルスタックエンジニア。
                  <strong style={{ color: '#2d2416' }}>React・TypeScript・Java・PHP</strong> を中心に製造・流通・EC 業界の業務システム開発に
                  <strong style={{ color: '#2bb5a0' }}> 5年以上</strong>携わっています。
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {HIGHLIGHTS.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    padding: '0.75rem 1rem', borderRadius: '12px',
                    background: 'var(--surface)', border: `1px solid ${h.color}18`,
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  whileHover={{ x: 4 }}
                >
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${h.color}12`, color: h.color,
                  }}>
                    {h.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', color: h.color, fontFamily: 'monospace', marginBottom: '0.2rem' }}>{h.label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#5a4e3a' }}>{h.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Career timeline + Strengths ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.18)}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', color: '#2bb5a0', fontFamily: 'monospace', marginBottom: '1.25rem' }}>
              ✦ 経歴タイムライン
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="timeline-line" />
              {CAREER.map((job, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'relative', paddingLeft: '3.25rem' }}
                >
                  {/* Dot */}
                  <div className="timeline-dot" style={{ border: `2px solid ${job.color}`, boxShadow: `0 0 0 4px ${job.color}18` }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: job.color }} />
                  </div>

                  <motion.div
                    className="card"
                    whileHover={{ x: 4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ height: '3px', background: `linear-gradient(90deg, ${job.color}, ${job.color}40, transparent)` }} />
                    <div style={{ padding: '1rem 1.2rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#2d2416' }}>{job.company}</span>
                            <span style={{
                              fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.6rem', borderRadius: '999px',
                              background: `${job.typeColor}12`, color: job.typeColor, border: `1px solid ${job.typeColor}25`,
                            }}>
                              {job.type}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: job.color }}>{job.role}</div>
                        </div>
                        <div style={{
                          fontSize: '0.65rem', fontFamily: 'monospace', padding: '0.25rem 0.6rem', borderRadius: '8px',
                          background: `${job.color}0c`, color: job.color, whiteSpace: 'nowrap', alignSelf: 'flex-start',
                        }}>
                          {job.period}
                        </div>
                      </div>
                      <p style={{ fontSize: '0.78rem', lineHeight: 1.8, color: '#5a4e3a' }}>{job.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* 強み */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', color: '#2bb5a0', fontFamily: 'monospace', marginBottom: '0.85rem' }}>
                ✦ 私の強み
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {STRENGTHS.map((s, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      fontSize: '0.82rem', padding: '0.6rem 1rem', borderRadius: '10px',
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      color: '#5a4e3a', lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: '#2bb5a0', flexShrink: 0, marginTop: '2px' }} />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}
            >
              {['即戦力', 'フルスタック', 'チーム開発', 'AWS運用', 'CI/CD', '多言語対応', '設計〜納品', 'アジャイル'].map(tag => (
                <span key={tag} className="tag" style={{ fontSize: '0.72rem' }}>{tag}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
