"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'

const getDetails = (items: string) => items?.split(',').map((detail) => <li key={detail}>{detail}</li>)
const keys = ['register', 'edit', 'contact']


export default function Shirt() {
    const t = useTranslations('Events.2024.MtlBalJam.extrasPage.shirt')

    const renderInstruction = (key: string) => {
        switch (key) {
            case 'register':
                return t.rich('instructions.register', {
                    register: (chunk) => <a rel="noopener noreferrer" target="_blank" href="https://mtl-bal-jam-2024.dancecamps.org/booking.php">{chunk}</a>
                })
            case 'contact':
                return t.rich('instructions.contact', {
                    email: (chunk) => <a rel="noopener noreferrer" target="_blank" href="mailto:mtlbaljam@campusbalboa.org">{chunk}</a>
                })
            default:
                return t('instructions.edit');
        }
    }


    return (
        <section className={styles.shirtSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image src="/mbj-2024-shirt-model.jpg" width={250} height={250} alt={t('imageAlt')} />
                </div>
                <div className={styles.text}>
                    <p>{t('price')}</p>
                    <p className={styles.when}>{t('when')}</p>
                    <p>{t.rich('description', {
                        br: () => <br />,
                        list: () => (
                            <ul>
                                {getDetails(t('list'))}
                            </ul>
                        ),
                        link: (chunks) => <a href={t('link')} rel="noopener noreferrer" target='_blank'>{chunks}</a>
                    })}</p>
                    <div className={styles.instructions}>
                        <h3>{t('how')}</h3>
                        <ul>
                            {keys.map(key => (
                                <li key={key}>
                                    {renderInstruction(key)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}