export type Link = {
  href: string
  text: string
}

export interface ButtonLink {
  sys: { id: string }
  href: string
  text: string
}

export interface EmblaText {
  changeSlide: string
  nextSlide: string
  prevSlide: string
}

export interface GoogleCalendarText {
  iFrameTitle: string
}
