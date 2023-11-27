"use client"
import { useTranslations } from 'next-intl'
import ReactPlayer from 'react-player/youtube'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import Image from 'next/image'

export default function MainInstructors() {
    const [hasWindow, setHasWindow] = useState(false);
    const t = useTranslations('Events.2024.MtlBalJam.instructorsPage.mainInstructors')

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section className={styles.mainInstructors}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <div className={styles.youtubeWrapper}>
                    {hasWindow ? (
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=7jV-xrxLN_w'
                            config={{
                                playerVars: {
                                    showInfo: 1,
                                    origin: window.location.origin
                                }
                            }}
                        />
                    ) : (
                        <ColorRing
                            width="200"
                            colors={[
                                "var(--mbj-color-chartreuse)",
                                'var(--mbj-color-teal)',
                                'var(--mbj-color-white)',
                                'var(--mbj-color-salmon)',
                                "var(--mbj-color-chartreuse)",
                            ]}
                        />
                    )}
                </div>
                <div className={styles.cutout}>
                    <Image src="/yulia-sasha.png" alt={t('logoAlt')} width={150} height={150} />
                </div>
                <div className={styles.text}>
                    <h3>{t('instructorsNames')}</h3>
                    <p>{t.rich('biography', { br: (chunks) => <br /> })}</p>
                    <a target="_blank" rel="norefferer" href={t('link')}>{t('link')}</a>
                </div>
            </div>
        </section>
    )
}