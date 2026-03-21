import { EntrySys } from 'contentful'

export type CampusEvent = {
  sys: EntrySys
  title: EntryFieldType.Text
  dark: EntryFieldType.Boolean
  tagline: EntryFieldType.Text
  startDate: EntryFieldType.Text
  image: {
    url: EntryFieldType.Text
    title: EntryFieldType.Text
  }
  link: {
    url: EntryFieldType.Text
    title: EntryFieldType.Text
  }
}
