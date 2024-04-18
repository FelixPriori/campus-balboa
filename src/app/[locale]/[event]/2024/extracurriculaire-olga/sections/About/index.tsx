"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import CtaButton from '../../components/CtaButton';
import Image from 'next/image';

type ClassBlock = {
    title: string;
    day: string;
    where: string;
    description: string;
    type: string;
    start: string;
}

type LocationBlock = {
    title: string;
    address: string;
    what: string;
}

type PartnerBlock = {
    title: string;
    img: {
        url: string;
        alt: string;
    }
    link: string;
}

const getDetails = (items: string) => items?.split(',').map((detail) => <li key={detail}>{detail}</li>)

const LocationBlock = ({ title, address, what }: LocationBlock) => {
    return (
        <li className={styles.locationBlock}>
            <h4>{title}</h4>
            <p className={styles.what}>{what}</p>
            <p>{address}</p>
        </li>
    )
}

const ClassBlock = ({ title, day, where, description, type, start }: ClassBlock) => {
    const typeClass = type === 'Extra' ? 'extra' : type.includes('Swing') ? 'swing' : 'pure'

    return (
        <li className={styles.classBlock}>
            <div className={styles.start}>
                <p>{day} : {start}</p>
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.where}>{where}</p>
            <div className={`${styles.typeWrapper} ${styles[typeClass]}`}>
                <p className={styles.type}>{type}</p>
            </div>
            <p className={styles.description}>{description}</p>
        </li>
    )
}

const PartnersBlock = ({ title, img, link }: PartnerBlock) => {
    return (
        <li className={styles.partnersBlock}>
            <a href={link} target='_blank' rel="noreferrer noopener">
                <div className={styles.titleContainer}>
                    <h4>{title}</h4>
                </div>
                <Image src={img.url} alt={img.alt} width={100} height={100} />
            </a>
        </li>
    )
}

const classes = ['1', '2', '3', '4', '5'];

const locations = ['cats', 'cenne', 'ernest'];

const partners = ['cats', 'aperos']

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
                        <p>
                            {
                                t.rich('friday.description',
                                    {
                                        br: () => <br />,
                                        link: (chunk) => <a className={styles.link} href={t('friday.link')} rel="noopener noreferrer" target="_blank">{chunk}</a>
                                    }
                                )
                            }
                        </p>
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
                    <div className={styles.cardSection}>
                        <h3>{t('classSchedule.title')}</h3>
                        <ul className={styles.classSchedule}>
                            {classes.map((c) => (
                                <ClassBlock
                                    key={c}
                                    title={t(`classSchedule.${c}.title`)}
                                    day={t(`classSchedule.${c}.day`)}
                                    where={t(`classSchedule.${c}.where`)}
                                    description={t(`classSchedule.${c}.description`)}
                                    type={t(`classSchedule.${c}.type`)}
                                    start={t(`classSchedule.${c}.start`)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('locations.title')}</h3>
                        <ul className={styles.locations}>
                            {locations.map((l) => (
                                <LocationBlock
                                    key={l}
                                    title={t(`locations.${l}.title`)}
                                    what={t(`locations.${l}.what`)}
                                    address={t(`locations.${l}.address`)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('partners.title')}</h3>
                        <ul className={styles.partners}>
                            {partners.map((p) => (
                                <PartnersBlock
                                    key={p}
                                    title={t(`partners.${p}.title`)}
                                    img={{
                                        url: t(`partners.${p}.img.url`),
                                        alt: t(`partners.${p}.img.alt`)
                                    }}
                                    link={t(`partners.${p}.link`)}
                                />
                            ))}
                        </ul>
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

