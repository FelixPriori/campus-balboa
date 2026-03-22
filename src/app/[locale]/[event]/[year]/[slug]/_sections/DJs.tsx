import styles from './styles.module.scss'
import { DJ } from '@/app/_types/events'
import { PersonBlock, PERSON_VARIANT } from '../_components/PersonBlock'

interface DJsProps {
  dJsData: DJ[]
  sectionTitle: string
}

export default function DJs({ dJsData, sectionTitle }: DJsProps) {
  return (
    <section className={styles.dJsSection}>
      <div className={styles.content}>
        <h2>{sectionTitle}</h2>
        <div className={styles.card}>
          <div className={styles.cardSection}>
            <div className={styles.dJs}>
              {dJsData.map((dj) => (
                <PersonBlock key={dj.sys.id} {...dj} variant={PERSON_VARIANT.DJ} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
