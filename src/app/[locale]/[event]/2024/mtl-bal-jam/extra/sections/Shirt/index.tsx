"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'

const getDetails = (items: string) => items?.split(',').map((detail) => <li key={detail}>{detail}</li>)

export default function Shirt() {
    const t = useTranslations('Events.2024.MtlBalJam.extrasPage.shirt')
    return (
        <section className={styles.shirtSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image src="/mbj-2024-shirt-model.jpg" width={250} height={250} alt={t('imageAlt')} />
                </div>
                <div className={styles.text}>
                    <p>{t('price')}</p>
                    <p>{t.rich('description', {
                        br: () => <br />,
                        list: () => (
                            <ul>
                                {getDetails(t('list'))}
                            </ul>
                        ),
                        link: (chunks) => <a href={t('link')} rel="noopener noreferrer" target='_blank'>{chunks}</a>
                    })}</p>
                </div>
            </div>
        </section>
    )
}