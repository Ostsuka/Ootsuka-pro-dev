import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MarcoPagot — Webライター ポートフォリオ',
  description:
    '多彩な現場経験を、読者目線で伝える共感力ライター MarcoPagot のポートフォリオ。SEO・美容・転職・製造業など幅広いジャンルに対応。',
  keywords: ['Webライター', 'SEOライティング', 'ポートフォリオ', '共感力ライター', 'MarcoPagot'],
  openGraph: {
    title: 'MarcoPagot — Webライター ポートフォリオ',
    description: '多彩な現場経験を、読者目線で伝える共感力ライター',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#0a0a0a', color: '#f0ece4', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
