'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp, GitBranch, Globe, CheckCircle2 } from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'ナビゲーション', color: '#2bb5a0',
    links: [
      { href: '#hero',       label: 'ホーム' },
      { href: '#about',      label: 'プロフィール' },
      { href: '#skills',     label: 'スキル' },
      { href: '#experience', label: '経歴' },
      { href: '#projects',   label: '実績' },
      { href: '#services',   label: 'サービス' },
      { href: '#contact',    label: 'お問い合わせ' },
    ],
  },
  {
    label: '技術スタック', color: '#3a7bd5',
    links: [
      { href: '#skills', label: 'React / Next.js' },
      { href: '#skills', label: 'TypeScript' },
      { href: '#skills', label: 'NestJS / Laravel' },
      { href: '#skills', label: 'Java Spring Boot' },
      { href: '#skills', label: 'AWS / Docker' },
      { href: '#skills', label: 'PostgreSQL / MySQL' },
    ],
  },
];

const TECH_USED = ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS v4', 'Framer Motion'];

const AVAILABLE_SERVICES = [
  '業務 Web システム開発',
  'バックエンド・API 開発',
  'AWS 構築・クラウド移行',
  'レガシー刷新・リプレイス',
];

export default function Footer() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#1e1710', color: '#c8b89a', position: 'relative', overflow: 'hidden' }}>
      {/* Background — Tokyo night skyline */}
      <div
        className="section-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1920&auto=format&fit=crop&q=85')",
          backgroundPosition: 'center bottom',
          opacity: 0.10,
        }}
      />

      {/* Accent glows */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(43,181,160,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-60px',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,123,213,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── CTA banner ── */}
      <div className="relative z-10" style={{ background: 'linear-gradient(135deg, #2bb5a0 0%, #3a7bd5 60%, #8b5cf6 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1280px', margin: '0 auto',
            padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 4vw, 3rem)',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 900, color: '#fff', marginBottom: '0.35rem' }}>
              プロジェクトのご相談、お気軽に
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.78)' }}>
              無料相談受付中 — 要件定義から運用まで一気通貫でサポートします
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a href="#contact" onClick={e => { e.preventDefault(); go('#contact'); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.65rem 1.6rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.85rem',
                background: '#fff', color: '#2bb5a0', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.20)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; }}
            >
              今すぐ相談する →
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Main footer body ── */}
      <div className="relative z-10" style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '1rem', color: '#fff',
                background: 'linear-gradient(135deg, #2bb5a0, #3a7bd5)',
                boxShadow: '0 4px 12px rgba(43,181,160,0.30)',
              }}>詩</div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#fff', letterSpacing: '0.06em' }}>大塚詩音</div>
                <div style={{ fontSize: '0.55rem', fontFamily: 'monospace', letterSpacing: '0.22em', color: '#8c7d65' }}>FULL-STACK ENGINEER</div>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', lineHeight: 1.85, color: '#a89880', marginBottom: '1.25rem' }}>
              React・TypeScript・Java・PHP を中心に、フロントエンドからクラウド運用まで対応する埼玉県出身のフルスタックエンジニアです。
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.1rem' }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#34c78a', opacity: 0.75, animation: 'pulse-dot 1.5s ease-out infinite' }} />
                <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#34c78a', display: 'inline-flex' }} />
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34c78a' }}>現在 案件受付中</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <a href="mailto:gold77chi11@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#a89880', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#a89880')}
              >
                <Mail size={14} style={{ color: '#3a7bd5', flexShrink: 0 }} />gold77chi11@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#a89880' }}>
                <MapPin size={14} style={{ color: '#8b5cf6', flexShrink: 0 }} />埼玉県三郷市（〒341-0018）
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.55rem' }}>
              {[
                { href: 'https://github.com/', icon: <GitBranch size={14} />, label: 'GitHub' },
                { href: 'https://twitter.com/', icon: <Globe size={14} />, label: 'Web' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem',
                    borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600,
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)',
                    color: '#c8b89a', textDecoration: 'none', transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = '#c8b89a'; }}
                >
                  {s.icon}{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group, gi) => (
            <div key={gi}>
              <h4 style={{ fontSize: '0.62rem', fontFamily: 'monospace', letterSpacing: '0.22em', marginBottom: '1.1rem', color: group.color }}>
                {group.label.toUpperCase()}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.links.map(l => (
                  <button key={l.label} onClick={() => go(l.href)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left', fontSize: '0.82rem', color: '#a89880',
                      padding: '0.2rem 0', transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#a89880')}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Services preview */}
          <div>
            <h4 style={{ fontSize: '0.62rem', fontFamily: 'monospace', letterSpacing: '0.22em', marginBottom: '1.1rem', color: '#8b5cf6' }}>
              SERVICES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {AVAILABLE_SERVICES.map(s => (
                <button key={s} onClick={() => go('#services')}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    textAlign: 'left', fontSize: '0.8rem', color: '#a89880',
                    padding: '0.2rem 0', transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#a89880')}
                >
                  <CheckCircle2 size={11} style={{ color: '#8b5cf6', flexShrink: 0 }} />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Built with */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.58rem', fontFamily: 'monospace', letterSpacing: '0.22em', marginBottom: '0.65rem', color: '#5a4e3a' }}>
            BUILT WITH
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {TECH_USED.map(t => (
              <span key={t} style={{
                fontSize: '0.68rem', padding: '0.22rem 0.75rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                color: '#8c7d65',
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.72rem', color: '#5a4e3a' }}>© 2026 大塚詩音. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#5a4e3a' }}>
              Made with <Heart size={11} style={{ color: '#e86c5d', margin: '0 1px' }} /> in Saitama
            </div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '38px', height: '38px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(43,181,160,0.15)', color: '#2bb5a0',
                transition: 'background 0.2s',
              }}
              aria-label="ページトップへ"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
