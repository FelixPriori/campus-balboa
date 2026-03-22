import type { RichTextContent } from '@/app/_lib/markdown'

export interface EventListItem {
  title: string
  slug: string | null
  startDate: string
  endDate: string
  image: { url: string; title: string }
}

export interface EventBlock {
  sys: { id: string }
  title: string
  subtitle: string | null
  startTime: string
  endTime: string
  blockType: string
  description: RichTextContent | null
}

export interface PricingData {
  sys: { id: string }
  tier: string
  type: string
  startTime: string
  endTime: string
  amount: number
  batch: number
}

export interface Venue {
  sys: { id: string }
  name: string
  venueAddress: string
  purpose: string
}

export interface Partner {
  sys: { id: string }
  title: string
  link: string
  logo: {
    url: string
    title: string
  }
}

export interface InstructorData {
  sys: { id: string }
  name: string
  avatar: {
    url: string
    title: string
  } | null
  biography: RichTextContent | null
}

export interface DJ {
  sys: { id: string }
  name: string
  pronouns: string | null
  avatar: {
    url: string
    title: string
  } | null
  biography: RichTextContent | null
}
