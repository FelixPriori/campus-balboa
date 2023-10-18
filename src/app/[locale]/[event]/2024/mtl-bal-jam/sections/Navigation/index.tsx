"use client"
import LanguageSwitcher from '@/components/LanguageSwitcher';
import styles from './styles.module.scss';
import { useLocale } from 'next-intl';
import { useRouter } from 'next-intl/client';

export default function Navigation() {
    const locale = useLocale()
    const router = useRouter()

    return (
        <nav className={styles.navigation}>
            <LanguageSwitcher 
                customOptions={[
                    {
                        onClick: () => router.push('/events/2024/mtl-bal-jam', {locale: 'en'}),
                        name: 'EN',
                        active: locale === 'en'
                    },
                    {
                        onClick: () => router.push('/evenements/2024/mtl-bal-jam', {locale: 'fr'}),
                        name: 'FR',
                        active: locale === 'fr'
                    },
                ]} 
                customStyling="mbjStyling"
            />
            {/* <ul>
                <li><a>Instructors</a></li>
                <li><a>Venue</a></li>
                <li><a>Music</a></li>
            </ul> */}
        </nav>
    )
}