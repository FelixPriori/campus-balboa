"use client"
import { useLocale } from 'next-intl';
import styles from './styles.module.scss';
import AdministratorCard from '../../components/AdministratorCard';
import { PageSectionProps } from '..';
import { useEffect, useState } from 'react';
import { getCollectionBySectionId } from '@/lib/api';
import { ADMINISTRATOR } from './query';
import { InfinitySpin } from 'react-loader-spinner';

type Administrator = {
    sys: {
        id: string
    }
    avatar: {
        url: string
        title: string
    }
    name: string
    pronouns: string
    title: string
    bio: {
        json: any;
        links: any;
    }
}

export default function AboutUsSection({id, title, anchor}: PageSectionProps) {
    const locale = useLocale()
    const [administrators, setAdministrators] = useState([])

    useEffect(() => {
        const getAdministratorsCollection = async () => {
            const administratorsCollection = await getCollectionBySectionId(id, locale, ADMINISTRATOR);
            setAdministrators(administratorsCollection)
        }

        getAdministratorsCollection()
    }, [id, locale])

    return (
        <section id={anchor} className={styles.aboutUsSection}>
            <div className={styles.content}>
                <h2 className={styles.aboutUsTitle}>{title}</h2>
                <div className={styles.administratorsContainer}>
                    {administrators.length ? administrators.map((administrator: Administrator) => 
                        <AdministratorCard
                            key={administrator.sys.id}
                            avatar={administrator.avatar} 
                            name={administrator.name} 
                            pronouns={administrator.pronouns} 
                            title={administrator.title} 
                            bio={administrator.bio}
                        />
                    )
                    : <InfinitySpin width="200" color="var(--color-primary)" />}
                </div>
            </div>
        </section>
    );
}

