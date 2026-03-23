import styles from './PricingCard.module.scss'
import { formatDate, formatDateWithOrdinal } from '@/app/_util/dateUtils'
import { formatPrice } from '@/app/_util/currencyUtils'
import { Locale } from '@/i18n'
import { PricingData } from '@/app/_types/events'

interface PricingCardProps {
  tier: string
  startTime: string
  endTime: string
  amount: number
  nextTier: PricingData | null
  locale: Locale
  isClosed: boolean
  registrationLink: { href: string; text: string } | null
  labels: {
    registrationOpensSoon: string
    registrationClosed: string
    newTab: string
  }
}

export default function PricingCard({
  tier,
  startTime,
  endTime,
  amount,
  nextTier,
  locale,
  isClosed,
  registrationLink,
  labels,
}: PricingCardProps) {
  return (
    <li className={styles.pricingCard}>
      <div className={styles.cardHeader}>
        <h3>{tier}</h3>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.price}>{formatPrice(amount, locale)}</p>
        <p className={styles.dates}>
          {formatDate(startTime, locale)} – {formatDate(endTime, locale)}
        </p>
        {nextTier && (
          <p className={styles.priceIncrease}>
            {formatDateWithOrdinal(nextTier.startTime, locale)}:{' '}
            <s>{formatPrice(amount, locale)}</s>{' '}
            <strong>{formatPrice(nextTier.amount, locale)}</strong>
          </p>
        )}
        {isClosed ? (
          <p className={styles.ctaLabel}>{labels.registrationClosed}</p>
        ) : registrationLink ? (
          <a
            href={registrationLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {registrationLink.text}
            <span className="sr-only">{labels.newTab}</span>
          </a>
        ) : (
          <p className={styles.ctaLabel}>{labels.registrationOpensSoon}</p>
        )}
      </div>
    </li>
  )
}
