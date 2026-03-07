import { EntryFieldType } from 'contentful'

export type Link = {
	href: EntryFieldType.Text
	text: EntryFieldType.Text
}

export interface ButtonLink {
	sys: { id: string }
	href: EntryFieldType.Text
	text: EntryFieldType.Text
}

export interface EmblaText {
	changeSlide: EntryFieldType.Text
	nextSlide: EntryFieldType.Text
	prevSlide: EntryFieldType.Text
}

export interface GoogleCalendarText {
	iFrameTitle: EntryFieldType.Text
}
