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
    <div role="region" aria-label={dict.DraftModeBanner.landmarkLabel} className={styles.banner}>
      <span>{dict.DraftModeBanner.message}</span>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/api/draft/disable" className={styles.exit}>
        {dict.DraftModeBanner.exit}
      </a>
    </div>
  )
}
