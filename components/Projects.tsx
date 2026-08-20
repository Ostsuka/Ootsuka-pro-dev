'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, TrendingUp, ChevronDown } from 'lucide-react';

interface Metric { label: string; value: string; color: string; }
interface Project {
  title: string; titleEn: string; category: string; description: string;
  challenge: string; solution: string; result: string;
  stack: string[]; metrics: Metric[]; accentColor: string; icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    title: 'EC 一元管理 SaaS — 商品・在庫同期', titleEn: 'EC Unified Management SaaS',
    category: 'SaaS / E-Commerce',
    description: '楽天市場・Yahoo!ショッピング等の複数 EC モールにまたがる商品・在庫データをリアルタイムで同期する SaaS バックエンドシステム。',
    challenge: '複数の EC モール API の仕様差異とレート制限を考慮しながら、データ整合性を保った高頻度同期が必要だった。',
    solution: 'NestJS の Queue 機構（Bull）で API リクエストを制御し、べき等なジョブ設計で再試行時のデータ重複を防止。バリデーション層を一元化し入力エラーを早期検出。',
    result: 'リリース後の入力エラー率を約 20% 削減。商品登録工数を大幅に短縮し、運用コストを削減。',
    stack: ['TypeScript','NestJS','Next.js','React','PostgreSQL','AWS ECS','S3','GitHub Actions'],
    metrics: [
      { label: 'エラー率削減', value: '20%↓', color: '#059669' },
      { label: 'チーム規模',   value: '5名',   color: '#0284c7' },
      { label: '担当フェーズ', value: '設計〜運用', color: '#7c3aed' },
    ],
    accentColor: '#0284c7', icon: <Code2 size={22} />,
  },
  {
    title: 'クラウド対応 業務 Web システム', titleEn: 'Cloud-Native Business Web App',
    category: 'Web Application',
    description: 'TypeScript / React / Node.js スタックで構築した企業向け Web アプリ。要件定義から AWS デプロイまでフルサイクル担当。',
    challenge: '既存の紙・Excel 運用を完全デジタル化し、部門間のデータ連携を自動化する必要があった。',
    solution: 'REST API により業務フローをシステム化。AWS EC2 + RDS で可用性を確保し、CloudWatch で監視・障害対応フローを整備。',
    result: '業務プロセス改善により生産性を約 30% 向上。手動作業時間を週あたり数時間削減。',
    stack: ['TypeScript','React','Node.js','Python','MySQL','PostgreSQL','AWS EC2','RDS','Docker'],
    metrics: [
      { label: '生産性向上',  value: '30%↑',   color: '#059669' },
      { label: '開発期間',    value: '29ヶ月',  color: '#0284c7' },
      { label: 'チーム規模',  value: '5〜10名', color: '#7c3aed' },
    ],
    accentColor: '#7c3aed', icon: <Cloud size={22} />,
  },
  {
    title: '写真・点検帳票管理システム', titleEn: 'Photo & Inspection Form Management',
    category: '製造・流通業向け',
    description: '製造・流通業向けの写真データと点検帳票を一元管理するシステム。Laravel API と React 管理画面で構成。',
    challenge: '25 名規模のチームで既存レガシーコードに機能追加しながら品質を担保する必要があった。',
    solution: 'PHPUnit による単体テスト整備とコードレビュープロセスの強化。MySQL インデックスの最適化でクエリ性能を改善。',
    result: 'データ取得処理の高速化に成功。3 年間の継続開発で正社員登用される実績を達成。',
    stack: ['PHP','Laravel','JavaScript','React','MySQL','GitHub','Linux'],
    metrics: [
      { label: 'チーム規模', value: '25名',   color: '#d97706' },
      { label: '継続期間',   value: '22ヶ月', color: '#0284c7' },
      { label: 'DB 最適化',  value: '高速化', color: '#059669' },
    ],
    accentColor: '#059669', icon: <Database size={22} />,
  },
  {
    title: '卸売商品管理システム AWS 移行', titleEn: 'Wholesale System AWS Migration',
    category: 'クラウド移行 / リプレイス',
    description: 'オンプレミスで稼働する Java 製商品・在庫管理システムを AWS ECS Fargate + RDS へ移行するリプレイスプロジェクト。',
    challenge: 'レガシー Java コードベースの解析と、ダウンタイムを最小化しながらクラウドへ移行するアーキテクチャ設計が必要だった。',
    solution: 'Spring Boot で機能を段階的に改修しながら Docker 化。ECS Fargate で Auto Scaling を実現し、CloudWatch でリアルタイム監視体制を構築。',
    result: 'AWS 環境への安定移行を達成。CloudWatch による障害の早期検知で運用品質を向上。',
    stack: ['Java','Spring Boot','React','PostgreSQL','Docker','AWS ECS','Fargate','RDS','CloudWatch','GitHub Actions'],
    metrics: [
      { label: '移行先',    value: 'AWS ECS',    color: '#d97706' },
      { label: '監視体制',  value: 'CloudWatch', color: '#0284c7' },
      { label: 'チーム規模', value: '3〜5名',    color: '#7c3aed' },
    ],
    accentColor: '#d97706', icon: <TrendingUp size={22} />,
  },
];

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ac = proj.accentColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="rounded-2xl flex flex-col overflow-hidden"
      style={{ background: '#ffffff', border: `1px solid ${ac}14`, boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}>
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${ac}, ${ac}55, transparent)` }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${ac}10`, color: ac, border: `1px solid ${ac}20` }}>{proj.icon}</div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full flex-shrink-0"
            style={{ background: `${ac}08`, color: ac, border: `1px solid ${ac}22` }}>{proj.category}</span>
        </div>
        <h3 className="text-base font-bold mb-0.5 leading-snug" style={{ color: '#0f172a' }}>{proj.title}</h3>
        <p className="text-[11px] mb-3" style={{ color: '#94a3b8' }}>{proj.titleEn}</p>
        <p className="text-sm leading-7 mb-5 flex-1" style={{ color: '#475569' }}>{proj.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {proj.metrics.map(m => (
            <div key={m.label} className="p-2.5 rounded-xl text-center"
              style={{ background: `${m.color}07`, border: `1px solid ${m.color}18` }}>
              <div className="text-sm font-bold" style={{ color: m.color }}>{m.value}</div>
              <div className="text-[10px] mt-0.5" style={{ color: '#94a3b8' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.stack.slice(0, 5).map(s => <span key={s} className="tag-neutral" style={{ fontSize: '0.67rem' }}>{s}</span>)}
          {proj.stack.length > 5 && <span className="tag-neutral" style={{ fontSize: '0.67rem' }}>+{proj.stack.length - 5}</span>}
        </div>

        <button onClick={() => setExpanded(o => !o)} className="flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: ac }}>
          <span>{expanded ? '詳細を閉じる' : '課題・解決策・成果を見る'}</span>
          <ChevronDown size={14} style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div className="mt-4 space-y-3 pt-4" style={{ borderTop: `1px solid ${ac}10` }}>
                {[
                  { label: '課題',   text: proj.challenge, color: '#d97706' },
                  { label: '解決策', text: proj.solution,  color: ac },
                  { label: '成果',   text: proj.result,    color: '#059669' },
                ].map(item => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 h-fit mt-0.5"
                      style={{ background: `${item.color}10`, color: item.color }}>{item.label}</span>
                    <p className="text-xs leading-6" style={{ color: '#475569' }}>{item.text}</p>
                  </div>
                ))}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.stack.map(s => <span key={s} className="tag-neutral" style={{ fontSize: '0.67rem' }}>{s}</span>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(248,250,252,0.93)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label justify-center">FEATURED PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-3" style={{ color: '#0f172a' }}>主要プロジェクト</h2>
          <div className="divider" />
          <p className="mt-5 text-sm max-w-lg mx-auto" style={{ color: '#64748b' }}>
            実際に携わったプロジェクトの一部です。課題・解決策・成果のカードを展開してご覧いただけます。
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((proj, i) => <ProjectCard key={i} proj={proj} index={i} />)}
        </div>
      </div>
    </section>
  );
}
