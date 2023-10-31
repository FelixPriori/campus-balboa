"use client"
import { useLocale } from 'next-intl';
import styles from './styles.module.scss';
import MissionsCard from '../../components/MissionCard';
import { PageSectionProps } from '..';
import { useEffect, useState } from 'react';
import { MISSION } from './query';
import { InfinitySpin } from 'react-loader-spinner';
import { getCollectionBySectionId } from '@/lib/api';

type Mission = {
    sys: {
        id: string;
    }
    title: string;
    content: {
        json: any;
        links: any;
    }
}

export default function MissionsSection({id, title, anchor}: PageSectionProps) {
    const locale = useLocale()
    const [missions, setMissions] = useState([])

    useEffect(() => {
        const getMissionsCollection = async () => {
            const missionsCollection = await getCollectionBySectionId(id, locale, MISSION);
            setMissions(missionsCollection)
        }

        getMissionsCollection()
    }, [id, locale])

    return (
        <section id={anchor} className={styles.missionsSection}>
            <div className={styles.content}>
                <h2 className={styles.missionsTitle}>{title}</h2>
                <div className={styles.missionsContainer}>
                    {missions.length 
                    ? missions.map((mission: Mission) => 
                        <MissionsCard
                            key={mission.sys.id}
                            title={mission.title} 
                            content={mission.content} 
                        />)
                    : <InfinitySpin width="200" color="var(--color-primary)" />}
                </div>
            </div>
        </section>
    );
}

