/** @type {import('next').NextConfig} */

module.exports = {
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
				destination: '/:locale/:event/:year/extracuriculaire-jacob',
				permanent: true,
			},
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
				pathname: `/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/**`,
			},
		],
	},
}
