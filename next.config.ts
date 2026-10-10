import type { NextConfig } from 'next';
const pages = process.env.PAGES_EXPORT === '1';
const config: NextConfig = {
  poweredByHeader: false,
  experimental: { cpus: 2 },
  ...(pages ? { output: 'export', basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', trailingSlash: true, images: { unoptimized: true } } : {}),
};
export default config;
