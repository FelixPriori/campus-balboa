"use client";
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import GoogleMaps from '@/components/CustomGoogleMap';
import Image from 'next/image';

export default function MainVenue() {
    const t = useTranslations('Events.2024.MtlBalJam.venuePage')
    return (
        <>
            <section className={styles.mapSection}>
                <h2>{t('mainVenue.title')}</h2>
                <div className={styles.content}>
                    <div className={styles.mapContainer}>
                        <GoogleMaps
                            lat={t('mainVenue.position.lat')}
                            lng={t('mainVenue.position.lng')}
                            markerTitle={t('mainVenue.markerTitle')}
                            infoWindowText={t('mainVenue.infoWindowText')}
                            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MBJ_MAP_ID as string}
                        />
                    </div>
                    <div className={styles.text}>
                        <h3>{t('mainVenue.venueName')}</h3>
                        <p>{t('mainVenue.venueDescription')}</p>
                        <p>{t('mainVenue.venueAddress')}</p>
                        <a target="_blank" rel="norefferer" href={t('mainVenue.venueWebsite')}>{t('mainVenue.venueWebsite')}</a>
                    </div>
                </div>
                <div className={styles.cutout}>
                    <Image priority src="/casa-d-italia-cutout.png" alt={t('mainVenue.cutoutAlt')} width={150} height={150}  />
                </div>
            </section>
            <section className={styles.mapSection}>
                <h2>{t('secondaryVenue.title')}</h2>
                <div className={styles.content}>
                    <div className={styles.mapContainer}>
                        <GoogleMaps
                            lat={t('secondaryVenue.position.lat')}
                            lng={t('secondaryVenue.position.lng')}
                            markerTitle={t('secondaryVenue.markerTitle')}
                            infoWindowText={t('secondaryVenue.infoWindowText')}
                            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MBJ_MAP_ID as string}
                        />
                    </div>
                    <div className={styles.text}>
                        <h3>{t('secondaryVenue.venueName')}</h3>
                        <p>{t('secondaryVenue.venueDescription')}</p>
                        <p>{t('secondaryVenue.venueAddress')}</p>
                        <a target="_blank" rel="norefferer" href={t('secondaryVenue.venueWebsite')}>{t('secondaryVenue.venueWebsite')}</a>
                    </div>
                </div>
                <div className={styles.catsCutout}>
                    <Image priority src="/cats-corner-cutout.png" alt={t('secondaryVenue.cutoutAlt')} width={150} height={150}  />
                </div>
            </section>
        </>
    )
}