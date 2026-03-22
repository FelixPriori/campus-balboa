import { LandAcknowledgementType } from '@/app/_types/footer'
import styles from './styles.module.scss'

export default function LandAknowledgement({
  landAcknowledgement,
}: {
  landAcknowledgement: LandAcknowledgementType | null
}) {
  if (!landAcknowledgement) return null
  return (
    <div className={styles.landAcknowledgement}>
      <h2>{landAcknowledgement.title}</h2>
      <div className={styles.content}>
        <p>{landAcknowledgement.text}</p>
      </div>
    </div>
  )
}
