export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { categories } from '@/data/products';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/products','/services','/rentals','/home-accessibility','/about','/resources','/contact','/privacy','/terms','/accessibility',...categories.map(c=>`/products/${c.slug}`)].map(path=>({url:`${site.url}${path}`,changeFrequency:'monthly',priority:path===''?1:0.7}));}
