"use client"
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import AdministratorCard from './AdministratorCard';

export default function AboutUsSection() {
    const t = useTranslations('Home');
    const keys = [
        'felix',
        'tania',
        'sara',
        'sihem',
        'cara',
    ] as const
    return (
        <section className={styles.aboutUsSection}>
            <div className={styles.content}>
                <h2 className={styles.aboutUsTitle}>{t('aboutUsSection.title')}</h2>
                <div className={styles.administratorsContainer}>
                    {keys.map(key => 
                        <AdministratorCard
                            key={key}
                            avatar={t(`aboutUsSection.administrators.${key}.avatar`)} 
                            name={t(`aboutUsSection.administrators.${key}.name`)} 
                            pronouns={t(`aboutUsSection.administrators.${key}.pronouns`)} 
                            title={t(`aboutUsSection.administrators.${key}.title`)} 
                            bio={t.rich(`aboutUsSection.administrators.${key}.bio`, {
                                italic: (chunks) => <span className={styles.italic}>{chunks}</span>
                            })}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

