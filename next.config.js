/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for Next.js 15.3
  experimental: {
    // Partial Prerendering for better performance
    ppr: true,
    // React 19 concurrent features
    reactCompiler: true,
    // Optimize for multi-vertical architecture
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for SEO
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // SEO and metadata configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Multi-vertical routing support
  async redirects() {
    return [
      // Future medical and financial verticals
      {
        source: '/m/:path*',
        destination: '/legal-first?vertical=medical&redirect=:path*',
        permanent: false,
      },
      {
        source: '/f/:path*', 
        destination: '/legal-first?vertical=financial&redirect=:path*',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;