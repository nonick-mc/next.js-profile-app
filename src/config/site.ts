import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  metadata: {
    name: 'NoNICK',
    description: 'なんちゃってコンテンツクリエイター',
    twitter_id: '@nonick_mc',
    url: new URL(
      process.env.NEXT_PUBLIC_VERCEL_URL || `http://localhost:${process.env.PORT || '3000'}`,
    ),
  },
};
