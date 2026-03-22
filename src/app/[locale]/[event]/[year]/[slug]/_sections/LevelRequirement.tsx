import { Markdown, type RichTextContent } from '@/app/_lib/markdown'
import styles from './styles.module.scss'

interface LevelRequirementProps {
  levelRequirement: {
    title?: string | null
    skills?: (string | null)[] | null
    description?: RichTextContent | null
  } | null | undefined
  sectionTitle: string
}

export default function LevelRequirement({
  levelRequirement,
  sectionTitle,
}: LevelRequirementProps) {
  if (!levelRequirement) return null

  return (
    <section className={styles.levelSection}>
      <div className={styles.content}>
        <h2>{sectionTitle}</h2>
        <div className={styles.card}>
          <div className={styles.cardSection}>
            <div className={styles.level}>
              <Markdown content={levelRequirement.description} />
              <ul className={styles.levelList}>
                {(levelRequirement.skills ?? []).filter((skill): skill is string => skill != null).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
