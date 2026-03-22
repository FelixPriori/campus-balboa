import type { RichTextContent } from '@/app/_lib/markdown'

export interface Administrator {
  sys: { id: string }
  avatar: {
    url: string
    title: string
  } | null
  name: string
  pronouns: string | null
  title: string
  bio: RichTextContent | null
}
