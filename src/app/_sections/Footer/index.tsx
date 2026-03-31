import Link from 'next/link'
import LandAcknowledgement from '../../_components/LandAcknowledgement'
import styles from './styles.module.scss'
import { DonateButtonType, FooterSection } from '@/app/_types/footer'
import SocialMedia from '@/app/_components/SocialMedia'
import Image from 'next/image'
import { getDictionary } from '@/app/dictionaries'
import { Locale, PRIVACY_SEGMENTS, CODE_OF_CONDUCT_SEGMENTS } from '@/i18n'
import ContactForm from './ContactForm'

function DonateButton({ donateButton, iconAlt, newTabLabel }: { donateButton: DonateButtonType; iconAlt: string; newTabLabel: string }) {
  return (
    <a
      className={styles.donateButton}
      href={donateButton.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src="/paypal-monogram-full-color.png"
        width={18}
        height={18}
        alt={iconAlt}
      />
      {donateButton.text}
      <span className="sr-only">{newTabLabel}</span>
    </a>
  )
}

export default async function Footer({
  contact,
  contactLink,
  copyright,
  socialMediasCollection,
  donateButton,
  landAcknowledgement,
  locale,
}: FooterSection & { locale: Locale }) {
  const { Footer: dict, ContactForm: contactFormDict, Navigation: navDict } = await getDictionary(locale)
  return (
    <footer className={styles.footerSection}>
      <div className={styles.content}>
        <LandAcknowledgement landAcknowledgement={landAcknowledgement} />
        <ContactForm {...contactFormDict} />
        <div className={styles.contact}>
          <p className={styles.copy}>
            <span>{contact}</span>
            {contactLink?.href && <a href={contactLink.href}>{contactLink.text}</a>}
          </p>
          <p className={styles.copy}>{copyright}</p>
          <p className={styles.copy}>
            <Link href={`/${locale}/${PRIVACY_SEGMENTS[locale]}`}>{dict.privacyPolicy}</Link>
          </p>
          <p className={styles.copy}>
            <Link href={`/${locale}/${CODE_OF_CONDUCT_SEGMENTS[locale]}`}>{dict.codeOfConduct}</Link>
          </p>
        </div>
        <div className={styles.links}>
          {socialMediasCollection?.items?.map((sm) => (
            <SocialMedia key={sm.sys.id} {...sm} />
          ))}
          {donateButton && <DonateButton donateButton={donateButton} iconAlt={dict.paypalIconAlt} newTabLabel={navDict.newTab} />}
        </div>
      </div>
    </footer>
  )
}
