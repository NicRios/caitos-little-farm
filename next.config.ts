import type { NextConfig } from 'next';

// Deployed only to the caitos-corner.com custom domain, served from the
// root, so assets are never prefixed with the repo name. Note:
// actions/configure-pages sets GITHUB_PAGES=true for every step of the
// Pages build regardless of this workflow's own env config, so that
// variable can't be used to distinguish project-page vs custom-domain
// hosting.
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;
