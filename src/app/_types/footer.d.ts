export interface ISocialMedia {
  sys: { id: string }
  href: string
  accessibilityDescription: string
  logo: {
    url: string
    title: string
  }
}

export interface DonateButtonType {
  href: string
  text: string
}

export interface LandAcknowledgementType {
  title: string
  text: string
}

export interface FooterSection {
  contact: string
  contactLink: {
    href: string
    text: string
  } | null
  copyright: string
  socialMediasCollection: {
    items: ISocialMedia[]
  }
  donateButton: DonateButtonType | null
  landAcknowledgement: LandAcknowledgementType | null
}
