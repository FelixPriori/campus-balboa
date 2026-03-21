import { EntrySys, EntryFieldType } from 'contentful'
import { Link } from './components'

export interface ISocialMedia {
  sys: EntrySys
  href: EntryFieldType.Text
  accessibilityDescription: EntryFieldType.Text
  logo: {
    url: EntryFieldType.Text
    title: EntryFieldType.Text
  }
}

export interface DonateButtonType extends Link {
  iconAlt: EntryFieldType.Text
}

export interface LandAcknowledgementType {
  title: EntryFieldType.Text
  text: EntryFieldType.Text
}

export interface FooterSection {
  contact: EntryFieldType.Text
  contactLink: EntryFieldType.Text
  copyright: EntryFieldType.Text
  socialMediasCollection: {
    items: ISocialMedia[]
  }
  donateButton: DonateButtonType
  landAcknowledgement: LandAcknowledgementType
}
