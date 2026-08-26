import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '大塚詩音 — Full-Stack Engineer Portfolio',
  description:
    'React・TypeScript・Java（Spring Boot）・PHP（Laravel）・AWS を用いた業務システム開発に5年以上携わるフルスタックエンジニア 大塚詩音 のポートフォリオ。',
  keywords: ['フルスタックエンジニア', 'React', 'TypeScript', 'Java', 'Spring Boot', 'Laravel', 'AWS', 'Docker', 'NestJS'],
  openGraph: {
    title: '大塚詩音 — Full-Stack Engineer Portfolio',
    description: 'Full-Stack Engineer specializing in React, TypeScript, Java Spring Boot, PHP Laravel, and AWS.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#f5eed8', color: '#2d2416', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
