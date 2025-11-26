import { Locale } from '@/i18n'
import { EntryFieldType } from 'contentful'

export interface PageSectionProps {
	title: EntryFieldType.Text
	anchor: EntryFieldType.Text
	id: EntryFieldType.Text
	helpText?: EntryFieldType.Text
	locale: Locale
	content?: {
		json: any
		links: any
	}
}
