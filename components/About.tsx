'use client';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Award, CheckCircle2 } from 'lucide-react';
import GridBackground from './backgrounds/GridBackground';

const HIGHLIGHTS = [
  {
    icon: <MapPin size={17} />,
    label: '所在地',
    value: '台北市 大安區（台湾）',
    color: '#00c8f0',
  },
  {
    icon: <GraduationCap size={17} />,
    label: '最終学歴',
    value: '淡江大学 情報工学科 学士（2021年卒）',
    color: '#8b5cf6',
  },
  {
    icon: <Languages size={17} />,
    label: '語学力',
    value: '中国語（ネイティブ）・日本語（ビジネス）・英語（技術読解）',
    color: '#10b981',
  },
  {
    icon: <Award size={17} />,
    label: '資格',
    value: '基本情報技術者試験 合格（2023年）',
    color: '#f59e0b',
  },
];

const NUMBERS = [
  { value: '5+',  label: '年の開発経験',   color: '#00c8f0' },
  { value: '30%', label: '業務効率化実績', color: '#10b981' },
  { value: '20%', label: 'エラー率削減',   color: '#8b5cf6' },
  { value: '3',   label: '対応言語（人語）', color: '#f59e0b' },
];

const STRENGTHS = [
  'フロントエンドからAWS運用まで一人で完結',
  '日本語のみでの仕様確認・コードレビュー実績2年以上',
  'チーム規模3〜25名の多様な環境で即戦力',
  '製造・流通・ECなど複数ドメインの業務知識',
  '業務プロセス改善で定量的な成果を継続提供',
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
});

export default function About() {
  return (
    <section id="about" className="section relative" style={{ background: '#080d1a' }}>
      <GridBackground accent="#8b5cf6" accent2="#00c8f0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
        >
          <p className="section-label justify-center">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            自己紹介
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: narrative ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp(0.1)}
          >
            {/* Profile card */}
            <div
              className="p-6 rounded-2xl mb-8"
              style={{
                background: 'rgba(14,22,40,0.6)',
                border: '1px solid rgba(0,200,240,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                  style={{ background: 'linear-gradient(135deg,#00c8f0,#8b5cf6)', color: '#fff' }}
                >
                  U
                </div>
                <div>
                  <div className="font-black text-lg" style={{ color: '#f1f5f9' }}>URAN</div>
                  <div className="text-xs font-mono" style={{ color: '#475569' }}>Full-Stack Engineer</div>
                </div>
              </div>

              <div className="space-y-4 text-[15px] leading-8" style={{ color: '#94a3b8' }}>
                <p>
                  台湾出身のフルスタックエンジニア。
                  <span style={{ color: '#f1f5f9', fontWeight: 600 }}>
                    React・TypeScript・Java（Spring Boot）・PHP（Laravel）
                  </span>
                  を軸に、製造・流通・EC業界向け業務システムの開発に
                  <span style={{ color: '#00c8f0', fontWeight: 700 }}> 5年以上</span>
                  携わってきました。
                </p>
                <p>
                  画面実装からAPI設計・AWSデプロイ・運用保守まで
                  <span style={{ color: '#f1f5f9', fontWeight: 600 }}>一気通貫で担当</span>
                  できるため、少人数チームでも大きな価値を提供できます。
                </p>
                <p>
                  業務改善で
                  <span style={{ color: '#10b981', fontWeight: 700 }}>生産性を約30%向上</span>、
                  フォーム改善で
                  <span style={{ color: '#10b981', fontWeight: 700 }}>入力エラー率を約20%削減</span>
                  した実績があり、コードを書くだけでなくビジネス成果に直結するエンジニアリングを実践しています。
                </p>
              </div>
            </div>

            {/* Strengths checklist */}
            <div>
              <h3 className="text-xs font-mono tracking-widest mb-4" style={{ color: '#00c8f0' }}>
                STRENGTHS
              </h3>
              <ul className="space-y-3">
                {STRENGTHS.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: '#94a3b8' }}
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['即戦力', 'フルスタック', 'チーム開発', 'AWS運用', 'CI/CD', '多言語対応', '設計〜納品'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: info + numbers ── */}
          <div className="space-y-5">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp(0.1 + i * 0.1)}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: 'rgba(14,22,40,0.5)',
                  border: `1px solid ${h.color}20`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${h.color}15`, color: h.color }}
                >
                  {h.icon}
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-wide mb-0.5" style={{ color: h.color }}>
                    {h.label}
                  </div>
                  <div className="text-sm" style={{ color: '#cbd5e1' }}>{h.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Achievement numbers */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.5)}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {NUMBERS.map(n => (
                <div
                  key={n.label}
                  className="p-5 rounded-2xl text-center relative overflow-hidden"
                  style={{
                    background: 'rgba(14,22,40,0.7)',
                    border: `1px solid ${n.color}18`,
                  }}
                >
                  {/* bg glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${n.color}10 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="text-3xl font-black mb-1 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${n.color}, ${n.color}aa)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {n.value}
                  </div>
                  <div className="text-xs relative z-10" style={{ color: '#475569' }}>{n.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
