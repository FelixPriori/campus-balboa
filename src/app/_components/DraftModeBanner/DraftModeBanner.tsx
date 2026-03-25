import { type Locale } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'
import styles from './styles.module.scss'

interface Props {
  locale: Locale
  isPreview: boolean
}

export default async function DraftModeBanner({ locale, isPreview }: Props) {
  if (!isPreview) return null

  const dict = await getDictionary(locale)

  return (
    <section aria-label={dict.DraftModeBanner.landmarkLabel} className={styles.banner}>
      <span>{dict.DraftModeBanner.message}</span>
      <a href="/api/draft/disable" className={styles.exit}>
        {dict.DraftModeBanner.exit}
      </a>
    </section>
  )
}
