import { Metadata } from 'next';
import './globals.css';

import Provider from './provider';
import { Noto_Sans_JP } from 'next/font/google';
import { siteConfig } from '@/config/site';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.metadata.url,
  title: {
    default: siteConfig.metadata.name,
    template: `%s - ${siteConfig.metadata.name}`,
  },
  description: siteConfig.metadata.description,
  themeColor: '#007af8',
  openGraph: {
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.name,
    url: siteConfig.metadata.url,
    locale: 'ja-JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
    site: siteConfig.metadata.twitter_id,
    creator: siteConfig.metadata.twitter_id,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={notoSansJp.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
