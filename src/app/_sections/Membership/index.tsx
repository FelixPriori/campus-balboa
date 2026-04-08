import styles from './styles.module.scss'
import { Markdown } from '@/app/_lib/markdown'
import { PageSectionProps } from '@/app/_types/sections'
import { getDictionary } from '@/app/dictionaries'

export default async function MembershipSection({ title, anchor, content, helpText, locale }: PageSectionProps) {
  const dict = await getDictionary(locale)

  return (
    <section id={anchor} className={styles.membershipSection}>
      <div className={styles.content}>
        <h2 className={styles.membershipTitle}>{title}</h2>
        <div className={styles.membershipBody}>
          <Markdown content={content} paragraphStyling={styles.membershipText} />
        </div>
        {helpText && (
          <a
            href={helpText}
            className={styles.membershipButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.Membership.buyMembership}
            <span className="sr-only">{dict.Navigation.newTab}</span>
          </a>
        )}
      </div>
    </section>
  )
}
