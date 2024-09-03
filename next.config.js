const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
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
}

module.exports = withNextIntl(nextConfig)
