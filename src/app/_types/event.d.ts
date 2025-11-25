import { EntrySys } from 'contentful'

export type CampusEvent = {
	sys: EntrySys
	title: string
	dark: boolean
	tagline: string
	startDate: string
	image: {
		url: string
		title: string
	}
	link: {
		url: string
		title: string
	}
}
