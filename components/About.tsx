'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Languages, Award, CheckCircle2, Briefcase, TrendingUp, Users, Zap } from 'lucide-react';

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
  { icon: <MapPin size={15} />,        label: '所在地',   value: '台北市 大安區（台湾）',                           color: '#3a7bd5' },
  { icon: <GraduationCap size={15} />, label: '最終学歴', value: '淡江大学 情報工学科 学士（2021年卒）',             color: '#8b5cf6' },
  { icon: <Languages size={15} />,     label: '語学力',   value: '中国語（ネイティブ）・日本語（ビジネス）・英語（技術読解）', color: '#2bb5a0' },
  { icon: <Award size={15} />,         label: '資格',     value: '基本情報技術者試験 合格（2023年）',               color: '#e8a949' },
];

const STRENGTHS = [
  'フロントエンドから AWS 運用まで一人で完結できる一気通貫スキル',
  '日本語のみでの仕様確認・コードレビュー実績 2年以上',
  'チーム規模 3〜25 名の多様な環境で即戦力として活躍',
  '製造・流通・EC など複数ドメインの深い業務知識',
];

const NUMBERS = [
  { value: '5+',  label: '年の開発経験',   color: '#2bb5a0', icon: <Zap size={18} /> },
  { value: '30+', label: '完了プロジェクト', color: '#3a7bd5', icon: <Briefcase size={18} /> },
  { value: '30%', label: '業務効率化実績',  color: '#8b5cf6', icon: <TrendingUp size={18} /> },
  { value: '25+', label: 'チーム開発経験',  color: '#e8a949', icon: <Users size={18} /> },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
});

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      {/* Background – Japanese woman presenting in business meeting */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(245,238,216,0.90)' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}>
          <span className="section-label">ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>プロフィール</h2>
          <div className="divider" />
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8c7d65' }}>
            台湾出身のフルスタックエンジニア。設計から運用まで一貫して担当します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Profile card ── */}
          <motion.div className="lg:col-span-2 space-y-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}>

            {/* Photo + basic info card */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(45,36,22,0.09)', boxShadow: '0 2px 20px rgba(45,36,22,0.07)' }}>
              {/* Top gradient bar */}
              <div className="h-24 flex items-end px-5 pb-0 relative"
                style={{ background: 'linear-gradient(135deg, #2bb5a0 0%, #3a7bd5 100%)' }}>
                <div className="absolute bottom-[-36px] left-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden"
                    style={{ border: '3px solid #fff', boxShadow: '0 4px 16px rgba(45,36,22,0.12)' }}>
                    <Image src="/hero-profile.jpg" alt="URAN" width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="pt-12 px-5 pb-5">
                <div className="font-black text-lg" style={{ color: '#2d2416' }}>URAN</div>
                <div className="text-xs mb-1" style={{ color: '#8c7d65', fontFamily: 'monospace' }}>Full-Stack Engineer</div>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#34c78a' }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#34c78a' }} />
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#34c78a' }}>Available for work</span>
                </div>
                <p className="text-sm leading-7" style={{ color: '#5a4e3a' }}>
                  台湾出身のフルスタックエンジニア。
                  <span style={{ color: '#2d2416', fontWeight: 700 }}>React・TypeScript・Java・PHP</span>
                  を中心に製造・流通・EC 業界の業務システム開発に
                  <span style={{ color: '#2bb5a0', fontWeight: 700 }}> 5年以上</span>携わっています。
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div key={h.label}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.15 + i * 0.08)}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{ background: '#fff', border: `1px solid ${h.color}18`, boxShadow: '0 1px 6px rgba(45,36,22,0.05)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${h.color}12`, color: h.color }}>
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest mb-0.5" style={{ color: h.color, fontFamily: 'monospace' }}>{h.label.toUpperCase()}</div>
                    <div className="text-xs leading-5" style={{ color: '#5a4e3a' }}>{h.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Numbers grid */}
            <div className="grid grid-cols-2 gap-2">
              {NUMBERS.map((n) => (
                <div key={n.label} className="p-3 rounded-xl text-center"
                  style={{ background: '#fff', border: `1px solid ${n.color}18`, boxShadow: '0 1px 6px rgba(45,36,22,0.05)' }}>
                  <div className="flex items-center justify-center mb-1" style={{ color: n.color }}>{n.icon}</div>
                  <div className="text-xl font-black mb-0.5" style={{ color: n.color }}>{n.value}</div>
                  <div className="text-[10px] leading-tight" style={{ color: '#8c7d65' }}>{n.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Career timeline ── */}
          <motion.div className="lg:col-span-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.15)}>

            <div className="text-[10px] font-bold tracking-[0.3em] mb-5" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ CAREER HISTORY</div>

            {/* Timeline */}
            <div className="relative space-y-4">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-[2px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #3a7bd5, #8b5cf6, #2bb5a0)' }} />

              {CAREER.map((job, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                  className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-0 top-3.5 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: '#fff', border: `2px solid ${job.color}`, boxShadow: `0 0 0 4px ${job.color}18`, zIndex: 10 }}>
                    <div className="w-3 h-3 rounded-full" style={{ background: job.color }} />
                  </div>

                  <div className="rounded-2xl overflow-hidden"
                    style={{ background: '#fff', border: `1px solid ${job.color}18`, boxShadow: '0 2px 12px rgba(45,36,22,0.06)' }}>
                    {/* Color top bar */}
                    <div className="h-1" style={{ background: `linear-gradient(90deg, ${job.color}, ${job.color}50, transparent)` }} />
                    <div className="p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h3 className="text-sm font-black" style={{ color: '#2d2416' }}>{job.company}</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: `${job.typeColor}12`, color: job.typeColor, border: `1px solid ${job.typeColor}25` }}>
                              {job.type}
                            </span>
                          </div>
                          <div className="text-xs font-semibold" style={{ color: job.color }}>{job.role}</div>
                        </div>
                        <div className="text-[10px] font-mono px-2 py-1 rounded-lg"
                          style={{ background: `${job.color}0c`, color: job.color, whiteSpace: 'nowrap' }}>
                          {job.period}
                        </div>
                      </div>
                      <p className="text-xs leading-6" style={{ color: '#5a4e3a' }}>{job.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Strengths */}
            <div className="mt-6">
              <div className="text-[10px] font-bold tracking-[0.3em] mb-3" style={{ color: '#2bb5a0', fontFamily: 'monospace' }}>✦ STRENGTHS</div>
              <ul className="space-y-2">
                {STRENGTHS.map((s, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-start gap-2.5 text-sm py-2 px-3.5 rounded-xl"
                    style={{ background: '#fff', border: '1px solid rgba(45,36,22,0.07)', color: '#5a4e3a' }}>
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#2bb5a0' }} />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.6 }} className="flex flex-wrap gap-2 mt-4">
              {['即戦力', 'フルスタック', 'チーム開発', 'AWS運用', 'CI/CD', '多言語対応', '設計〜納品', 'アジャイル'].map(tag => (
                <span key={tag} className="tag text-[11px]">{tag}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
