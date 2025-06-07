/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.pexels.com',
      'i0.wp.com',
      'www.orangutan.or.id',
      'www.borneonaturefoundation.org',
      'www.mongabay.co.id',
      'wikimedia.org'
    ],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
      };
      // ✅ Tambahkan fallback di sini
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
