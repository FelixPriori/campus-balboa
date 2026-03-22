export type CampusEvent = {
  sys: { id: string }
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
