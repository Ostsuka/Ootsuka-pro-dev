'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Users, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import WaveBackground from './backgrounds/WaveBackground';

/* ── Data ───────────────────────────────────────── */
interface Project {
  title: string;
  overview: string;
  tasks: string[];
  achievements: string[];
  stack: string[];
  team: string;
}
interface Job {
  period: string;
  duration: string;
  company: string;
  companyEn: string;
  role: string;
  type: string;
  typeColor: string;
  color: string;
  projects: Project[];
}

const EXPERIENCE: Job[] = [
  {
    period: '2021年10月 — 2024年3月',
    duration: '29ヶ月',
    company: '宏碁股份有限公司',
    companyEn: 'Acer Inc.',
    role: 'フルスタックエンジニア',
    type: '正社員',
    typeColor: '#00c8f0',
    color: '#00c8f0',
    projects: [
      {
        title: 'クラウド対応 業務Webシステム開発',
        overview: 'TypeScript / React / Node.js スタックの企業向けWebアプリを要件定義からAWSデプロイまで一貫担当。',
        tasks: [
          'フロントエンド・バックエンド双方の設計・開発',
          'REST API 設計・実装およびデータベース設計',
          'データ処理機能の実装・パフォーマンス最適化',
          '顧客との要件ヒアリング・仕様調整',
          'AWS 環境へのデプロイ・動作確認・運用保守',
          'GitHub を用いたコードレビュー・チーム開発',
        ],
        achievements: [
          '業務プロセス改善により生産性を約 30% 向上',
          '安定した機能提供でリリースに継続貢献',
        ],
        stack: ['TypeScript', 'React', 'Node.js', 'Python', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'GitHub'],
        team: '5〜10名',
      },
      {
        title: 'EC 一元管理 SaaS — 商品・在庫同期機能',
        overview: '楽天市場・Yahoo!ショッピング等の複数 EC モールにまたがる商品・在庫データをリアルタイム同期するバックエンドシステム。',
        tasks: [
          'Next.js 管理画面の実装・API 連携',
          'NestJS による商品・在庫同期ロジックの設計・実装',
          'EC モール API 連携・入力値バリデーション実装',
          'AWS（ECS / RDS / S3）へのデプロイ・確認',
          'Slack での仕様確認・コードレビュー対応',
        ],
        achievements: [
          'フォーム改善による入力エラー率 約 20% 削減',
          '品質を維持しながらリリースに継続貢献',
        ],
        stack: ['TypeScript', 'NestJS', 'Next.js', 'React', 'PostgreSQL', 'AWS ECS', 'S3', 'GitHub Actions'],
        team: '5〜6名',
      },
    ],
  },
  {
    period: '2024年4月 — 2026年1月',
    duration: '22ヶ月',
    company: '精誠資訊股份有限公司',
    companyEn: 'Systex Corporation',
    role: 'バックエンドエンジニア',
    type: '業務委託 → 正社員登用',
    typeColor: '#8b5cf6',
    color: '#8b5cf6',
    projects: [
      {
        title: '製造・流通業向け 写真・点検帳票管理システム',
        overview: '製造・流通業向けの写真データ管理と点検帳票を一元管理するシステムの開発・保守。25名体制での大規模チーム開発。',
        tasks: [
          'PHP（Laravel）による API 開発・機能追加',
          'React / JavaScript による管理画面改修',
          '単体・結合テスト整備と運用保守',
          'MySQL インデックス最適化によるクエリ高速化',
        ],
        achievements: [
          '業務委託として参画後、実績が評価され正社員へ登用',
          'DB インデックス見直しでデータ取得処理を高速化',
          '約 3 年間継続して開発に従事',
        ],
        stack: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'GitHub', 'Linux'],
        team: '25名',
      },
      {
        title: '卸売商品管理システム AWS 移行・改修',
        overview: 'オンプレミスで稼働する Java 製商品・在庫管理システムを AWS ECS Fargate + RDS へ移行するリプレイスプロジェクト。',
        tasks: [
          'Java（Spring Boot）による既存機能改修・バグ修正',
          'PostgreSQL でのデータ調査・SQL 作成',
          'Docker を利用した開発環境の構築・検証',
          'AWS（ECS Fargate / RDS）へのデプロイ・運用支援',
          'CloudWatch によるログ監視・障害対応',
        ],
        achievements: [
          'レガシーシステム解析・機能改修・API 実装を担当',
          'AWS 環境への移行・安定稼働に貢献',
        ],
        stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS ECS', 'Fargate', 'RDS', 'CloudWatch', 'GitHub Actions'],
        team: '3〜5名',
      },
    ],
  },
  {
    period: '2026年3月 — 現在',
    duration: '活動中',
    company: 'フリーランス',
    companyEn: 'Freelance Engineer',
    role: 'フリーランスエンジニア',
    type: 'フリーランス',
    typeColor: '#10b981',
    color: '#10b981',
    projects: [
      {
        title: '業務システム・Web システム開発（受託）',
        overview: 'Java（Spring Boot）・React / TypeScript（NestJS）を用いた業務システム開発案件を複数並行対応。',
        tasks: [
          'クライアント要件ヒアリングから設計・実装・納品',
          'Spring Boot / NestJS による API 開発',
          'React / Next.js によるフロントエンド実装',
          '設計・実装・テスト・デプロイの一貫担当',
        ],
        achievements: [
          '複数案件を並行して品質を維持しながら納品',
          '設計から運用まで一人でフルサイクル完結',
        ],
        stack: ['Java', 'Spring Boot', 'TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'],
        team: '個人〜小規模チーム',
      },
    ],
  },
];

/* ── Project accordion item ─────────────────────── */
function ProjectCard({ proj, color, index }: { proj: Project; color: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'rgba(5,8,16,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Header */}
      <button
        className="w-full flex items-start justify-between p-4 text-left gap-3 transition-colors"
        style={{ background: open ? `${color}08` : 'transparent' }}
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start gap-2 min-w-0">
          <ArrowRight
            size={14}
            className="flex-shrink-0 mt-0.5 transition-transform"
            style={{ color, transform: open ? 'rotate(90deg)' : 'none' }}
          />
          <span className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{proj.title}</span>
        </div>
        <ChevronDown
          size={14}
          className="flex-shrink-0 mt-0.5 transition-transform"
          style={{ color: '#475569', transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 pb-4 space-y-4">
              <p className="text-xs leading-6" style={{ color: '#94a3b8' }}>{proj.overview}</p>

              {/* Tasks */}
              <div>
                <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: '#475569' }}>TASKS</div>
                <ul className="space-y-1.5">
                  {proj.tasks.map((t, i) => (
                    <li key={i} className="flex gap-2 text-xs" style={{ color: '#94a3b8' }}>
                      <span style={{ color, flexShrink: 0 }}>▸</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: '#475569' }}>ACHIEVEMENTS</div>
                <ul className="space-y-1.5">
                  {proj.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-xs" style={{ color: '#10b981' }}>
                      <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack + team */}
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map(s => (
                  <span key={s} className="tag-neutral" style={{ fontSize: '0.67rem', padding: '0.15rem 0.5rem' }}>{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: '#334155' }}>
                <Users size={11} />
                <span>チーム規模: {proj.team}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main ────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="section relative" style={{ background: '#080d1a' }}>
      <WaveBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="section-label justify-center">WORK EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#f1f5f9' }}>
            職務経歴
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,200,240,0.4) 0%, rgba(139,92,246,0.4) 50%, rgba(16,185,129,0.4) 100%)',
            }}
          />

          {EXPERIENCE.map((job, ji) => (
            <motion.div
              key={ji}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: ji * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative sm:pl-16 mb-14 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-5 top-6 w-4 h-4 rounded-full -translate-x-1/2 hidden sm:block z-10"
                style={{
                  background: job.color,
                  boxShadow: `0 0 0 3px rgba(5,8,16,1), 0 0 12px ${job.color}80`,
                  border: `2px solid ${job.color}`,
                }}
              />

              {/* Job card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(14,22,40,0.75)',
                  border: `1px solid ${job.color}20`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Company header */}
                <div
                  className="px-6 py-5"
                  style={{ borderBottom: `1px solid ${job.color}12` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${job.color}18`, border: `1px solid ${job.color}25` }}
                      >
                        <Briefcase size={20} style={{ color: job.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-base font-black" style={{ color: '#f1f5f9' }}>{job.company}</h3>
                          <span
                            className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                            style={{ background: `${job.typeColor}15`, color: job.typeColor, border: `1px solid ${job.typeColor}30` }}
                          >
                            {job.type}
                          </span>
                        </div>
                        <div className="text-xs mb-1" style={{ color: '#475569' }}>{job.companyEn}</div>
                        <div className="text-sm font-semibold" style={{ color: job.color }}>{job.role}</div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs mb-1" style={{ color: '#475569' }}>
                        <Calendar size={11} />
                        <span className="font-mono">{job.period}</span>
                      </div>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {job.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-4 space-y-3">
                  {job.projects.map((proj, pi) => (
                    <ProjectCard key={pi} proj={proj} color={job.color} index={pi} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
