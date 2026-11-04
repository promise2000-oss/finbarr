/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const adminOrigin = process.env.ADMIN_ORIGIN ?? 'http://localhost:3001'
    return [
      {
        source: '/preview/:slug',
        headers: [
          { key: 'Content-Security-Policy', value: `frame-ancestors 'self' ${adminOrigin}` },
          { key: 'Cache-Control', value: 'private, no-store' },
        ],
      },
      {
        source: '/((?!preview/).*)',
        headers: [{ key: 'Content-Security-Policy', value: "frame-ancestors 'none'" }],
      },
    ]
  },
}

export default nextConfig
