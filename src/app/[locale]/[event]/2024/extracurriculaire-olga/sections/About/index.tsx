"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import CtaButton from '../../components/CtaButton';
import Image from 'next/image';

const getDetails = (items: string) => items?.split(',').map((detail) => <li key={detail}>{detail}</li>)

export default function About() {
    const t = useTranslations('Events.2024.Olga.aboutSection')

    return (
        <section className={styles.aboutSection}>
            <div className={styles.content}>
                <h2>{t('sectionTitle')}</h2>
                <div className={styles.card}>
                    <div className={styles.cardSection}>
                        <h3>{t('instructors.subsectionTitle')}</h3>
                        <div className={styles.instructor}>
                            <div className={styles.avatar}>
                                <Image src="/olga-pe-avatar.png" width={100} height={100} alt={t('instructors.olga.avatarAlt')} />
                            </div >
                            <div className={styles.details}>
                                <h4>{t('instructors.olga.name')}</h4>
                                <p>
                                    {
                                        t.rich('instructors.olga.bio',
                                            {
                                                br: () => <br />,
                                                link: (chunk) => <a className={styles.link} href={t('instructors.olga.link')} rel="noopener noreferrer" target="_blank">{chunk}</a>
                                            }
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                        <div className={styles.instructor}>
                            <div className={styles.avatar}>
                                <Image src="/felix-pe-avatar.png" width={100} height={100} alt={t('instructors.felix.avatarAlt')} />
                            </div>
                            <div className={styles.details}>
                                <h4>{t('instructors.felix.name')}</h4>
                                <p>{t.rich('instructors.felix.bio', { br: () => <br /> })}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('whatToExpect.subsectionTitle')}</h3>
                        <p>{t.rich('whatToExpect.description', { br: () => <br /> })}</p>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t.rich('friday.subsectionTitle', { extra: (chunk) => <strong className={styles.extra}>{chunk}</strong> })}</h3>
                        {
                            t.rich('friday.description',
                                {
                                    br: () => <br />,
                                    link: (chunk) => <a className={styles.link} href={t('friday.link')} rel="noopener noreferrer" target="_blank">{chunk}</a>
                                }
                            )
                        }
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t.rich('level.subsectionTitle', { extra: (chunk) => <strong className={styles.extra}>{chunk}</strong> })}</h3>
                        <div className={styles.level}>
                            <p>{t('level.content.details')}</p>
                            <ul className={styles.levelList}>
                                {getDetails(t('level.content.list'))}
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.cardSection} ${styles.cta}`}>
                        <CtaButton
                            href={t('cta.href')}
                            text={t('cta.text')}
                            ariaLabel={t('cta.ariaLabel')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

