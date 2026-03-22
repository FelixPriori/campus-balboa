import { Locale } from '@/i18n'
import type { RichTextContent } from '@/app/_lib/markdown'

export interface PageSectionProps {
  title: string
  anchor: string
  id: string
  helpText?: string
  locale: Locale
  content?: RichTextContent | null
}
