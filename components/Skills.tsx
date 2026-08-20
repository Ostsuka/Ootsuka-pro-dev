'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill { name: string; level: number; years: string; color: string; desc: string; }
interface Category { id: string; label: string; labelEn: string; color: string; icon: string; skills: Skill[]; }

const CATEGORIES: Category[] = [
  {
    id: 'lang', label: '言語', labelEn: 'Languages', color: '#0284c7', icon: '{ }',
    skills: [
      { name: 'TypeScript', level: 90, years: '6年', color: '#3178c6', desc: '型設計・ジェネリクス・型安全API' },
      { name: 'JavaScript', level: 90, years: '6年', color: '#ca8a04', desc: 'ES2022+・非同期・モジュール設計' },
      { name: 'PHP',        level: 85, years: '5年', color: '#6366f1', desc: 'Laravel・API実装・テスト記述' },
      { name: 'Java',       level: 80, years: '5年', color: '#f97316', desc: 'Spring Boot・JPA・REST API' },
      { name: 'Python',     level: 70, years: '6年', color: '#3776ab', desc: 'データ処理・スクリプト補助' },
    ],
  },
  {
    id: 'fe', label: 'フロントエンド', labelEn: 'Frontend', color: '#0ea5e9', icon: '⚛',
    skills: [
      { name: 'React',   level: 90, years: '6年', color: '#0ea5e9', desc: 'Hooks・状態管理・コンポーネント設計' },
      { name: 'Next.js', level: 85, years: '5年', color: '#334155', desc: 'App Router・SSR/SSG・最適化' },
    ],
  },
  {
    id: 'be', label: 'バックエンド', labelEn: 'Backend', color: '#e11d48', icon: '⚙',
    skills: [
      { name: 'NestJS',      level: 85, years: '5年', color: '#e11d48', desc: 'DI・Guards・Queue・モジュール設計' },
      { name: 'Laravel',     level: 85, years: '5年', color: '#ef4444', desc: 'Eloquent・Policy・API実装' },
      { name: 'Spring Boot', level: 80, years: '5年', color: '#6db33f', desc: 'REST API・JPA・レガシー移行' },
      { name: 'Node.js',     level: 85, years: '6年', color: '#16a34a', desc: 'Express・非同期・ミドルウェア' },
    ],
  },
  {
    id: 'db', label: 'データベース', labelEn: 'Database', color: '#2563eb', icon: '🗄',
    skills: [
      { name: 'MySQL',      level: 85, years: '6年', color: '#2563eb', desc: 'インデックス最適化・スキーマ設計' },
      { name: 'PostgreSQL', level: 80, years: '6年', color: '#1d4ed8', desc: 'トランザクション・パフォーマンス最適化' },
    ],
  },
  {
    id: 'infra', label: 'インフラ', labelEn: 'Infrastructure', color: '#d97706', icon: '☁',
    skills: [
      { name: 'AWS',            level: 75, years: '4年', color: '#d97706', desc: 'EC2・ECS Fargate・RDS・S3・CloudWatch' },
      { name: 'Docker',         level: 75, years: '4年', color: '#0284c7', desc: 'コンテナ化・Compose・CI/CD連携' },
      { name: 'GitHub Actions', level: 70, years: '3年', color: '#16a34a', desc: '自動テスト・自動デプロイパイプライン' },
    ],
  },
];

function RadarChart() {
  const points = [
    { label: 'Frontend',  value: 0.90, angle: -90  },
    { label: 'Backend',   value: 0.85, angle: -18  },
    { label: 'Database',  value: 0.85, angle:  54  },
    { label: 'Infra',     value: 0.75, angle:  126 },
    { label: 'Languages', value: 0.88, angle:  198 },
  ];
  const cx = 140; const cy = 140; const R = 90;
  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });
  const polygon = points.map(p => { const {x,y} = toXY(p.angle, R*p.value); return `${x},${y}`; }).join(' ');

  return (
    <svg width="280" height="280" className="mx-auto">
      {[0.25,0.5,0.75,1].map(r => (
        <polygon key={r} points={points.map(p=>{const{x,y}=toXY(p.angle,R*r);return`${x},${y}`;}).join(' ')}
          fill={r===1?'rgba(2,132,199,0.03)':'none'}
          stroke={r===1?'rgba(2,132,199,0.15)':'rgba(15,23,42,0.08)'} strokeWidth="1" />
      ))}
      {points.map(p => { const o=toXY(p.angle,R); return (
        <line key={p.label} x1={cx} y1={cy} x2={o.x} y2={o.y} stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
      );})}
      <motion.polygon points={polygon} fill="rgba(2,132,199,0.10)" stroke="#0284c7" strokeWidth="1.5"
        initial={{opacity:0,scale:0.4}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
        transition={{duration:0.9}} style={{transformOrigin:`${cx}px ${cy}px`}} />
      {points.map(p=>{const{x,y}=toXY(p.angle,R*p.value);return(
        <motion.circle key={p.label} cx={x} cy={y} r={4} fill="#0284c7"
          initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
          transition={{delay:0.65,type:'spring',stiffness:400}} style={{transformOrigin:`${x}px ${y}px`}} />
      );})}
      {points.map(p=>{const{x,y}=toXY(p.angle,R*1.26);return(
        <text key={p.label} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fill="#64748b" fontSize="9.5" fontFamily="monospace" fontWeight="500">{p.label}</text>
      );})}
      <text x={cx} y={cy-8} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">URAN</text>
      <text x={cx} y={cy+5} textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace">SKILL MAP</text>
    </svg>
  );
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
      transition={{delay:index*0.06,duration:0.5}} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full" style={{background:skill.color}} />
          <span className="text-sm font-bold" style={{color:'#1e293b'}}>{skill.name}</span>
          <span className="text-[10px] hidden group-hover:inline-block" style={{color:'#94a3b8'}}>— {skill.desc}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px]" style={{color:'#94a3b8',fontFamily:'monospace'}}>{skill.years}</span>
          <span className="text-xs font-black w-8 text-right" style={{color:skill.color}}>{skill.level}%</span>
        </div>
      </div>
      <div className="progress-track mb-4">
        <motion.div className="progress-bar"
          style={{background:`linear-gradient(90deg,${skill.color}55,${skill.color})`}}
          initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}}
          transition={{duration:1.1,delay:index*0.06+0.1,ease:'easeOut'}} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const tabs = [{ id: 'all', label: 'すべて', color: '#0284c7', icon: '⊞' }, ...CATEGORIES];
  const visibleCats = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === active);

  return (
    <section id="skills" className="section" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(248,250,252,0.94)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <p className="section-label justify-center">TECHNICAL SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-3" style={{color:'#0f172a'}}>スキルセット</h2>
          <div className="divider" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}>
          {tabs.map(tab => {
            const isActive = active === tab.id;
            const color = 'color' in tab ? tab.color : '#0284c7';
            return (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: isActive ? `${color}12` : '#ffffff',
                  border: isActive ? `1.5px solid ${color}44` : '1.5px solid rgba(15,23,42,0.10)',
                  color: isActive ? color : '#64748b',
                  boxShadow: isActive ? `0 2px 10px ${color}18` : '0 1px 4px rgba(15,23,42,0.05)',
                }}>
                <span>{'icon' in tab ? tab.icon : ''}</span>{tab.label}
              </button>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Radar */}
          <motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
            className="lg:col-span-1 sticky top-24"
            style={{background:'#ffffff',border:'1px solid rgba(15,23,42,0.08)',borderRadius:'1.25rem',padding:'1.5rem',boxShadow:'0 2px 16px rgba(15,23,42,0.06)'}}>
            <div className="text-[10px] font-bold tracking-widest mb-2 text-center" style={{color:'#0284c7',fontFamily:'monospace'}}>SKILL RADAR</div>
            <RadarChart />
            <div className="mt-4 space-y-2.5 pt-4" style={{borderTop:'1px solid rgba(15,23,42,0.06)'}}>
              {[
                {range:'85–100%',label:'実務・自走可能',   color:'#0284c7'},
                {range:'70–84%', label:'チーム開発対応可', color:'#7c3aed'},
                {range:'60–69%', label:'実務経験あり',     color:'#059669'},
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2.5 text-[11px]">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background:l.color}} />
                  <span style={{color:'#94a3b8',fontFamily:'monospace'}}>{l.range}</span>
                  <span style={{color:'#64748b'}}>{l.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skill bars */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:0.25}}>
                {visibleCats.map(cat => (
                  <div key={cat.id} className="p-6 rounded-2xl mb-4 last:mb-0"
                    style={{background:'#ffffff',border:`1px solid ${cat.color}14`,boxShadow:'0 2px 12px rgba(15,23,42,0.05)'}}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{background:`${cat.color}10`,color:cat.color,border:`1px solid ${cat.color}20`}}>{cat.icon}</div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold tracking-widest" style={{color:cat.color,fontFamily:'monospace'}}>{cat.labelEn.toUpperCase()}</h3>
                        <span className="text-[11px]" style={{color:'#94a3b8'}}>/ {cat.label}</span>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[10px] px-2 py-0.5 rounded"
                          style={{background:`${cat.color}08`,color:`${cat.color}88`,fontFamily:'monospace'}}>{cat.skills.length} items</span>
                      </div>
                    </div>
                    {cat.skills.map((s, si) => <SkillBar key={s.name} skill={s} index={si} />)}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
