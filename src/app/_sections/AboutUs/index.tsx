import styles from './styles.module.scss'
import AdministratorCard from '../../_components/AdministratorCard'
import { getAdministrators } from '@/app/_lib/api'
import { Suspense } from 'react'
import Fallback from './Fallback'
import { PageSectionProps } from '@/app/_types/sections'

export default async function AboutUsSection({ id, title, anchor, locale }: PageSectionProps) {
  const administrators = await getAdministrators(id, locale)

  return (
    <section id={anchor} className={styles.aboutUsSection}>
      <div className={styles.content}>
        <h2 className={styles.aboutUsTitle}>{title}</h2>
        <div className={styles.administratorsContainer}>
          <Suspense fallback={<Fallback />}>
            {administrators.length > 0 &&
              administrators.map((administrator) => (
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
