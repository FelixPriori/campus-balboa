"use client"
import { useLocale, useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Button from '@/components/button/button';
import Link from 'next/link';

export default function Events() {
    const t = useTranslations('Home');
    const locale = useLocale()

    return (
        <section className={styles.eventsSection}>
            <div className={styles.content}>
                <h2 className={styles.eventsTitle}>{t('eventsSection.title')}</h2>
                <h3 className={styles.eventTitle}>{t('eventsSection.mtlBalJam.title')}</h3>
                <Button>
                    <Link href={locale === 'fr' ? 'fr/evenements/2024/mtl-bal-jam' : 'en/events/2024/mtl-bal-jam'}>
                        {t('eventsSection.mtlBalJam.cta')}
                    </Link>
                </Button>
            </div>
        </section>
    );
}

