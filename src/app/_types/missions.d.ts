import { EntryFieldType, EntrySys } from 'contentful'

export interface IMission {
  sys: EntrySys
  title: EntryFieldType.Text
  content: {
    json: any
    links: any
  }
}
