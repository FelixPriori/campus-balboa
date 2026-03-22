import { Markdown, type RichTextContent } from '@/app/_lib/markdown'
import styles from './styles.module.scss'
import ContentfulImage from '@/app/_lib/contentful-image'

interface AdministratorCard {
  avatar: {
    url: string
    title: string
  } | null
  name: string
  title: string
  bio: RichTextContent | null
  pronouns: string | null
}

export default function AdministratorCard({
  avatar,
  name,
  title,
  pronouns,
  bio,
}: AdministratorCard) {
  return (
    <div className={styles.administratorCard}>
      <div className={styles.avatarWrapper}>
        {avatar && (
          <ContentfulImage
            className={styles.avatar}
            src={avatar.url}
            alt={name}
            width={1080}
            height={1080}
          />
        )}
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.name}>{name}</h3>
        {pronouns && <p className={styles.pronouns}>{pronouns}</p>}
        <h4 className={styles.title}>{title}</h4>
        <Markdown content={bio} />
      </div>
    </div>
  )
}
