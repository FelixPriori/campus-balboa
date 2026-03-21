/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'campusbalboa.org' }],
        destination: 'https://www.campusbalboa.org/:path*',
        permanent: true,
      },
      {
        source: '/.well-known/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/:locale/:event/:year/extracuriculaire-mickey',
        // TODO: update destination to extracurriculaire-jacob (double 'r') after fixing slug in Contentful
        destination: '/:locale/:event/:year/extracuriculaire-jacob',
        permanent: true,
      },
      // TODO: uncomment after updating the Contentful slug from 'extracuriculaire-jacob' to 'extracurriculaire-jacob'
      // {
      //   source: '/:locale/:event/:year/extracuriculaire-jacob',
      //   destination: '/:locale/:event/:year/extracurriculaire-jacob',
      //   permanent: true,
      // },
      {
        source: '/en/:event/2024/mtl-bal-jam/:slug*',
        destination: 'https://mtlbaljam.org/en',
        permanent: true,
      },
      {
        source: '/fr/:event/2024/mtl-bal-jam/:slug*',
        destination: 'https://mtlbaljam.org/fr',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
    ],
  },
}
