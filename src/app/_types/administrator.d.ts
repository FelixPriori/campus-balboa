import { EntrySys } from 'contentful'

export interface IAdministrator {
  sys: EntrySys
  avatar: {
    url: string
    title: string
  }
  name: string
  pronouns: string
  title: string
  bio: {
    json: any
    links: any
  }
}
