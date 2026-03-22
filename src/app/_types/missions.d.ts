import type { RichTextContent } from '@/app/_lib/markdown'

export interface Mission {
  sys: { id: string }
  title: string
  content: RichTextContent | null
}
