'use client';
import { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'
import {useTranslations} from 'next-intl';
import Button from '@/components/button/button';
import userRouterWithLocale from '@/hooks/useRouterWithLocale'
import Logo from '@/components/logo/logo';

export const metadata: Metadata = {
  title: 'Balboa Event',
  description: 'Balboa Event hosted by the OBNL',
}

export default function Event() {
  const t = useTranslations('Event');
  const router = userRouterWithLocale();
  return (
    <div>
      <header className={styles.header}>
        <Image
          src="/balboa-placeholder-one.webp"
          alt="Balboa dancers on the beach"
          quality={100}
          objectFit='cover'
          fill
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.navigation}>
          <Button onClick={() => router.push('/')} look="flat">
            <Logo/>
          </Button>
          <Button onClick={() => router.switchLang()} variant="secondary" look="flat">
            {t('changeLang')}
          </Button>
        </div>
      </header>
      <section className={`${styles.introduction} ${styles.section}`}>
        <Image
          src="/balboa-placeholder-two.jpg"
          alt="Balboa dancers on the beach"
          quality={100}
          objectFit='cover'
          fill
        />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.card}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
            <Button>{t('registerCta')}</Button>
          </div>
        </div>
      </section>
      <section className={`${styles.information} ${styles.section}`}>
        <Image
          src="/balboa-placeholder-three.jpg"
          alt="Balboa dancers on the beach"
          quality={100}
          objectFit='cover'
          fill
        />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.card}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}