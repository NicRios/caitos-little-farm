import type { NextConfig } from 'next';

const githubPagesAssetPrefix =
  process.env.GITHUB_PAGES === 'true' ? '/caitos-little-farm' : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: githubPagesAssetPrefix,
};

export default nextConfig;
