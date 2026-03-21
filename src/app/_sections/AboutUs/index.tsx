import styles from './styles.module.scss'
import AdministratorCard from '../../_components/AdministratorCard'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { ADMINISTRATOR } from './query'
import { Suspense } from 'react'
import Fallback from './Fallback'
import { PageSectionProps } from '@/app/_types/sections'
import { IAdministrator } from '@/app/_types/administrator'

export default async function AboutUsSection({ id, title, anchor, locale }: PageSectionProps) {
  const administrators = await getCollectionBySectionId(id, locale, ADMINISTRATOR)

  return (
    <section id={anchor} className={styles.aboutUsSection}>
      <div className={styles.content}>
        <h2 className={styles.aboutUsTitle}>{title}</h2>
        <div className={styles.administratorsContainer}>
          <Suspense fallback={<Fallback />}>
            {administrators.length &&
              administrators.map((administrator: IAdministrator) => (
                <AdministratorCard
                  key={administrator.sys.id}
                  avatar={administrator.avatar}
                  name={administrator.name}
                  pronouns={administrator.pronouns}
                  title={administrator.title}
                  bio={administrator.bio}
                />
              ))}
          </Suspense>
        </div>
      </div>
    </section>
  )
}
