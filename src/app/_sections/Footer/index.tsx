import LandAcknowledgement from '../../_components/LandAcknowledgement'
import styles from './styles.module.scss'
import { DonateButtonType, FooterSection } from '@/app/_types/footer'
import SocialMedia from '@/app/_components/SocialMedia'
import Image from 'next/image'
import { getDictionary } from '@/app/dictionaries'
import { Locale } from '@/i18n'

function DonateButton({ donateButton, iconAlt }: { donateButton: DonateButtonType; iconAlt: string }) {
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
  const { Footer: dict } = await getDictionary(locale)
  return (
    <footer className={styles.footerSection}>
      <div className={styles.content}>
        <LandAcknowledgement landAcknowledgement={landAcknowledgement} />
        <div className={styles.contact}>
          <p className={styles.copy}>
            <span>{contact}</span>
            {contactLink?.href && <a href={contactLink.href}>{contactLink.text}</a>}
          </p>
          <p className={styles.copy}>{copyright}</p>
        </div>
        <div className={styles.links}>
          {socialMediasCollection?.items?.map((sm) => (
            <SocialMedia key={sm.sys.id} {...sm} />
          ))}
          {donateButton && <DonateButton donateButton={donateButton} iconAlt={dict.paypalIconAlt} />}
        </div>
      </div>
    </footer>
  )
}
