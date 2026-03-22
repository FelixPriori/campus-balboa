import { Markdown, type RichTextContent } from '@/app/_lib/markdown'
import styles from './styles.module.scss'

export default function MissionsCard({
  title,
  content,
}: {
  title: string
  content: RichTextContent | null
}) {
  return (
    <div className={styles.missionCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <Markdown content={content} />
    </div>
  )
}
