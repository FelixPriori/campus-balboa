"use client"
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import MissionsCard from './MissionCard';

export default function MissionsSection() {
    const t = useTranslations('Home');
    const keys = [
        'development',
        'practice',
        'excellence',
        'support',
        'organize',
        'knowledge',
    ] as const
    return (
        <section className={styles.missionsSection}>
            <div className={styles.content}>
                <h2 className={styles.missionsTitle}>{t('missionsSection.title')}</h2>
                <div className={styles.missionsContainer}>
                    {keys.map(key => 
                        <MissionsCard
                            key={key}
                            title={t(`missionsSection.missions.${key}.title`)} 
                            content={t(`missionsSection.missions.${key}.content`)} 
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

