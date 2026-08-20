'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Users, ChevronDown, CheckCircle2, ArrowRight, Building2, Rocket } from 'lucide-react';

interface Project {
  title: string; overview: string; tasks: string[]; achievements: string[]; stack: string[]; team: string;
}
interface Job {
  period: string; duration: string; company: string; companyEn: string; role: string;
  type: string; typeColor: string; color: string; headerBg: string; projects: Project[];
}

const EXPERIENCE: Job[] = [
  {
    period: '2021年10月 — 2024年3月', duration: '29ヶ月',
    company: '宏碁股份有限公司', companyEn: 'Acer Inc.',
    role: 'フルスタックエンジニア', type: '正社員', typeColor: '#3a7bd5', color: '#3a7bd5',
    headerBg: 'linear-gradient(135deg, #3a7bd5, #60a5fa)',
    projects: [
      {
        title: 'クラウド対応 業務 Web システム開発',
        overview: 'TypeScript / React / Node.js スタックの企業向け Web アプリを要件定義から AWS デプロイまで一貫担当。',
        tasks: ['フロントエンド・バックエンド双方の設計・開発','REST API 設計・実装およびデータベース設計','データ処理機能の実装・パフォーマンス最適化','顧客との要件ヒアリング・仕様調整','AWS 環境へのデプロイ・動作確認・運用保守'],
        achievements: ['業務プロセス改善により生産性を約 30% 向上','安定した機能提供でリリースに継続貢献'],
        stack: ['TypeScript','React','Node.js','Python','MySQL','PostgreSQL','AWS','Docker','GitHub'], team: '5〜10名',
      },
      {
        title: 'EC 一元管理 SaaS — 商品・在庫同期機能',
        overview: '楽天市場・Yahoo!ショッピング等の複数 EC モールにまたがる商品・在庫データをリアルタイム同期するバックエンドシステム。',
        tasks: ['Next.js 管理画面の実装・API 連携','NestJS による商品・在庫同期ロジックの設計・実装','EC モール API 連携・入力値バリデーション実装','AWS（ECS / RDS / S3）へのデプロイ・確認'],
        achievements: ['フォーム改善による入力エラー率 約 20% 削減','品質を維持しながらリリースに継続貢献'],
        stack: ['TypeScript','NestJS','Next.js','React','PostgreSQL','AWS ECS','S3','GitHub Actions'], team: '5〜6名',
      },
    ],
  },
  {
    period: '2024年4月 — 2026年1月', duration: '22ヶ月',
    company: '精誠資訊股份有限公司', companyEn: 'Systex Corporation',
    role: 'バックエンドエンジニア', type: '業務委託 → 正社員登用', typeColor: '#8b5cf6', color: '#8b5cf6',
    headerBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    projects: [
      {
        title: '製造・流通業向け 写真・点検帳票管理システム',
        overview: '製造・流通業向けの写真データ管理と点検帳票を一元管理するシステムの開発・保守。25 名体制での大規模チーム開発。',
        tasks: ['PHP（Laravel）による API 開発・機能追加','React / JavaScript による管理画面改修','単体・結合テスト整備と運用保守','MySQL インデックス最適化によるクエリ高速化'],
        achievements: ['業務委託として参画後、実績が評価され正社員へ登用','DB インデックス見直しでデータ取得処理を高速化'],
        stack: ['PHP','Laravel','JavaScript','React','MySQL','GitHub','Linux'], team: '25名',
      },
      {
        title: '卸売商品管理システム AWS 移行・改修',
        overview: 'オンプレミスで稼働する Java 製商品・在庫管理システムを AWS ECS Fargate + RDS へ移行するリプレイスプロジェクト。',
        tasks: ['Java（Spring Boot）による既存機能改修・バグ修正','PostgreSQL でのデータ調査・SQL 作成','Docker を利用した開発環境の構築・検証','AWS（ECS Fargate / RDS）へのデプロイ・運用支援'],
        achievements: ['レガシーシステム解析・機能改修・API 実装を担当','AWS 環境への移行・安定稼働に貢献'],
        stack: ['Java','Spring Boot','React','PostgreSQL','Docker','AWS ECS','Fargate','RDS','CloudWatch'], team: '3〜5名',
      },
    ],
  },
  {
    period: '2026年3月 — 現在', duration: '活動中',
    company: 'フリーランス', companyEn: 'Freelance Engineer',
    role: 'フリーランスエンジニア', type: 'フリーランス', typeColor: '#2bb5a0', color: '#2bb5a0',
    headerBg: 'linear-gradient(135deg, #2bb5a0, #34c78a)',
    projects: [
      {
        title: '業務システム・Web システム開発（受託）',
        overview: 'Java（Spring Boot）・React / TypeScript（NestJS）を用いた業務システム開発案件を複数並行対応。',
        tasks: ['クライアント要件ヒアリングから設計・実装・納品','Spring Boot / NestJS による API 開発','React / Next.js によるフロントエンド実装','設計・実装・テスト・デプロイの一貫担当'],
        achievements: ['複数案件を並行して品質を維持しながら納品','設計から運用まで一人でフルサイクル完結'],
        stack: ['Java','Spring Boot','TypeScript','NestJS','React','Next.js','PostgreSQL','Docker','AWS'], team: '個人〜小規模チーム',
      },
    ],
  },
];

function ProjectCard({ proj, color, index }: { proj: Project; color: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}
      className="rounded-xl overflow-hidden"
      style={{
        background: open ? `${color}04` : 'var(--surface2)',
        border: `1px solid ${open ? color + '22' : 'rgba(45,36,22,0.07)'}`,
        transition: 'all 0.3s',
      }}
    >
      <button className="w-full flex items-start justify-between p-4 text-left gap-3" onClick={() => setOpen(o => !o)}>
        <div className="flex items-start gap-2.5 min-w-0">
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight size={13} className="flex-shrink-0 mt-0.5" style={{ color }} />
          </motion.div>
          <span className="text-sm font-bold leading-snug" style={{ color: '#2d2416' }}>{proj.title}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mt-0.5">
          <ChevronDown size={14} style={{ color: '#a89880' }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
            <div className="px-5 pb-5 space-y-4">
              <p className="text-xs leading-6" style={{ color: '#8c7d65' }}>{proj.overview}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[9px] font-bold tracking-widest mb-2" style={{ color: '#a89880', fontFamily: 'monospace' }}>TASKS</div>
                  <ul className="space-y-1.5">
                    {proj.tasks.map((t, i) => (
                      <li key={i} className="flex gap-2 text-[12px] leading-5" style={{ color: '#5a4e3a' }}>
                        <span style={{ color, flexShrink: 0, marginTop: '2px' }}>▸</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-widest mb-2" style={{ color: '#a89880', fontFamily: 'monospace' }}>ACHIEVEMENTS</div>
                  <ul className="space-y-1.5">
                    {proj.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2 text-[12px] leading-5" style={{ color: '#2bb5a0' }}>
                        <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map(s => <span key={s} className="tag-neutral">{s}</span>)}
                </div>
                <div className="flex items-center gap-1.5 text-[11px]" style={{ color: '#a89880', fontFamily: 'monospace' }}>
                  <Users size={11} /><span>チーム規模: {proj.team}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg)' }}>
      {/* Background – focused engineer working late, warm office atmosphere */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(237,230,204,0.92)' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">WORK EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2" style={{ color: '#2d2416' }}>職務経歴</h2>
          <div className="divider" />
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8c7d65' }}>
            正社員・業務委託・フリーランスと多様な形態での開発実績
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute hidden sm:block"
            style={{ left: '28px', top: '32px', bottom: '32px', width: '2px',
              background: 'linear-gradient(to bottom, #3a7bd5, #8b5cf6 50%, #2bb5a0)', borderRadius: '2px' }} />

          {EXPERIENCE.map((job, ji) => (
            <motion.div key={ji}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ delay: ji * 0.1, duration: 0.55 }}
              className="relative sm:pl-20 mb-8 last:mb-0">

              {/* Timeline dot */}
              <div className="absolute hidden sm:flex items-center justify-center"
                style={{ left: '28px', top: '28px', width: '18px', height: '18px', borderRadius: '50%',
                  transform: 'translate(-50%, -50%)', background: job.color,
                  boxShadow: `0 0 0 4px var(--bg), 0 0 12px ${job.color}44`, zIndex: 10 }}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Duration badge */}
              <div className="absolute hidden sm:block" style={{ left: '50px', top: '22px' }}>
                <div className="text-[9px] px-2 py-0.5 rounded font-bold whitespace-nowrap"
                  style={{ background: `${job.color}10`, color: job.color, border: `1px solid ${job.color}25`, fontFamily: 'monospace' }}>
                  {job.duration}
                </div>
              </div>

              {/* Job card */}
              <div className="rounded-2xl overflow-hidden"
                style={{ background: '#fff', border: `1px solid ${job.color}15`, boxShadow: '0 2px 16px rgba(45,36,22,0.07)' }}>
                {/* Gradient header */}
                <div className="px-5 py-4 flex flex-wrap items-start justify-between gap-4" style={{ background: job.headerBg }}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.20)' }}>
                      {ji === 2 ? <Rocket size={18} className="text-white" /> : <Building2 size={18} className="text-white" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="text-sm font-black text-white">{job.company}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.20)', color: '#fff' }}>
                          {job.type}
                        </span>
                      </div>
                      <div className="text-xs text-white/70" style={{ fontFamily: 'monospace' }}>{job.companyEn}</div>
                      <div className="text-sm font-bold text-white/90 mt-0.5">{job.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs text-white/70 mb-1 justify-end">
                      <Calendar size={11} /><span style={{ fontFamily: 'monospace' }}>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/70 justify-end">
                      <Briefcase size={11} /><span style={{ fontFamily: 'monospace' }}>{job.projects.length} project{job.projects.length > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3" style={{ background: 'var(--surface2)' }}>
                  {job.projects.map((proj, pi) => <ProjectCard key={pi} proj={proj} color={job.color} index={pi} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
