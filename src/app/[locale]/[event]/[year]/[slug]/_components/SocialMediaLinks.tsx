import styles from './SocialMediaLinks.module.scss'
import { ButtonLink } from '@/app/_types/components'
import { trackEvent } from '@/app/_lib/analytics'

interface SocialMediaLinksProps {
  links: ButtonLink[]
}

export function SocialMediaLinks({ links }: SocialMediaLinksProps) {
  if (!links?.length) return null
  return (
    <ul className={styles.socialLinks}>
      {links.map((sm) => (
        <li key={sm.sys.id}>
          <a className={styles.socialLink} href={sm.href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: sm.text })}>
            {sm.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
