import { EntrySys } from 'contentful'

export interface EventBlock {
	sys: EntrySys
	title: string
	subtitle: string | null
	startTime: string
	endTime: string
	blockType: string
	description: {
		json: any
		links: any
	}
}

export interface PricingData {
	sys: EntrySys
	tier: string
	type: string
	startTime: string
	endTime: string
	amount: number
	batch: number
}

export interface Partner {
	sys: EntrySys
	title: string
	link: string
	logo: {
		url: string
		title: string
	}
}

export interface InstructorData {
	sys: EntrySys
	name: string
	avatar: {
		url: string
		title: string
	}
	biography: {
		json: any
		links: any
	}
}

export interface DJ {
	sys: EntrySys
	name: string
	pronouns: string
	avatar: {
		url: string
		title: string
	}
	biography: {
		json: any
		links: any
	}
}
