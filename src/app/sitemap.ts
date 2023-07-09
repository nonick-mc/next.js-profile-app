import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.metadata.url}`,
      lastModified: new Date(),
    },
  ]
}