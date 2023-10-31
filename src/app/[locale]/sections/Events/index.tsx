"use client"
import { useLocale } from 'next-intl';
import styles from './styles.module.scss';
import EventCard from '../../components/EventCard'
import { PageSectionProps } from '..';
import { useEffect, useState } from 'react';
import { getCollectionBySectionId } from '@/lib/api';
import { EVENT } from './query';
import { InfinitySpin } from 'react-loader-spinner';

export default function Events({id, title, anchor}: PageSectionProps) {
    const locale = useLocale()
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEventsCollection = async () => {
            const eventsCollection = await getCollectionBySectionId(id, locale, EVENT);
            setEvents(eventsCollection)
        }

        getEventsCollection()
    }, [id, locale])

    return (
        <section id={anchor} className={styles.eventsSection}>
            <div className={styles.content}>     
                <h2 className={styles.eventsTitle}>{title}</h2>
                {events.length 
                ? events.map((e: any) => (
                    <EventCard
                        key={e.sys.id}
                        dark={e.dark}
                        title={e.title} 
                        tagline={e.tagline} 
                        image={e.image} 
                        link={e.link}
                    />))
                : <InfinitySpin width="200" color="var(--color-primary)" />}
            </div>
        </section>
    );
}

