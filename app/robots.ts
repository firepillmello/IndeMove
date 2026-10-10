export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
// Keep the placeholder business and sample reviews out of search indexes until launch.
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',disallow:'/'},sitemap:`${site.url}/sitemap.xml`};}
