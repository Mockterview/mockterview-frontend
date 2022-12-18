/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://api.mockterview.xyz/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/login/find/email',
        destination: '/login',
        permanent: false,
      },
      {
        source: '/login/find/password',
        destination: '/login',
        permanent: false,
      },
      {
        source: '/interview/result/:path*',
        destination: '/interview',
        permanent: false,
      },
      {
        source: '/signup/complete',
        destination: '/signup',
        permanent: false,
      },
      {
        source: '/loadingresult',
        destination: '/',
        permanent: false,
      },
      {
        source: '/modal',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
