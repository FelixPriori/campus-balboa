'use client';
import styles from './page.module.css'
import Button from '@/components/button/button'
import { useTranslations } from 'next-intl';
import useRouterWithLocale from '@/hooks/useRouterWithLocale'

export default function Home() {
  const router = useRouterWithLocale();
  const t = useTranslations('Home');

  return (
    <div className={styles.home}>
      <Button onClick={() => router.push('/event')}>
        {t('toEventCta')}
      </Button> 
      <Button variant='secondary' onClick={() => router.switchLang()}>
        {t('changeLang')}
      </Button> 
    </div>
  )
}