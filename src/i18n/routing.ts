import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['en', 'fr'],
	defaultLocale: 'fr',
	localePrefix: {
		mode: 'always',
		prefixes: {
			en: '/en',
			fr: '/fr',
		},
	},
	pathnames: {
		'/': '/',
		'/[event]': {
			en: '/[event]',
			fr: '/[event]',
		},
		'/[event]/2024': {
			en: '/[event]/2024',
			fr: '/[event]/2024',
		},
		'/[event]/2024/campus-launch': {
			en: '/[event]/2024/campus-launch',
			fr: '/[event]/2024/campus-launch',
		},
		'/[event]/2024/extracurriculaire-olga': {
			en: '/[event]/2024/extracurriculaire-olga',
			fr: '/[event]/2024/extracurriculaire-olga',
		},
	},
})

export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing)
