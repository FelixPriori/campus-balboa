"use client"
import { useEffect } from 'react';
import { Metadata } from 'next'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import BpmBar from '@/components/bpmBar/bpmBar';
import { ranges } from '@/assets/data/bpmRange';
import useLocationHash from '@/hooks/useLocationHash';
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'DJ Ressources',
  description: 'Ressources related to DJing Balboa',
}

type BpmDetailsProps = {
  name: string
  min: number
  max: number
  selected?: boolean
}

function BpmDetails ({name, min, max, selected = false}: BpmDetailsProps) {
  const t = useTranslations('Resources');
  return (
    <div id={name} className={`${styles.details} ${selected ? styles.selected : ''}`}>
      <h3>{t(`dj.bpm.${name}.title`)}</h3>
      <h4>{t(`dj.bpm.range`, {min, max: max !== 350 ? max : '∞'})}</h4>
      <p>{t(`dj.bpm.${name}.description`)}</p>
    </div>
  )
}

export default function DJ() {
  const [currentHash] = useLocationHash()
  const t = useTranslations('Resources');
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelectorAll('div[id]');
      section.forEach(div => {
        const rect = div.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 150) {
          router.push(`#${div.id}`, {scroll: false})
        }
      });
    }
    
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{t('dj.bpm.title')}</h2>
      </div>
      <div className={styles.bar}>
        <div className={styles.sticky}>
          <BpmBar />
        </div>
      </div>
      <div className={styles.content}>
        {ranges.map((r) => <BpmDetails key={r.name} {...r} selected={currentHash === `#${r.name}`}  />)}
      </div>
    </div>
  )
}