import styles from './styles.module.scss'
import MissionsCard from '../../_components/MissionCard'
import { getMissions } from '@/app/_lib/api'
import { Suspense } from 'react'
import Fallback from './Fallback'
import { PageSectionProps } from '@/app/_types/sections'

export default async function MissionsSection({ id, title, anchor, locale, preview }: PageSectionProps) {
  const missions = await getMissions(id, locale, preview)

  return (
    <section id={anchor} className={styles.missionsSection}>
      <div className={styles.content}>
        <h2 className={styles.missionsTitle}>{title}</h2>
        <div className={styles.missionsContainer}>
          <Suspense fallback={<Fallback />}>
            {missions.length > 0 &&
              missions.map((mission) => (
                <MissionsCard
                  key={mission.sys.id}
                  title={mission.title}
                  content={mission.content}
                />
              ))}
          </Suspense>
        </div>
      </div>
    </section>
  )
}
