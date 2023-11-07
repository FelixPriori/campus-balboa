"use client"
import LanguageSwitcher from '@/components/LanguageSwitcher';
import styles from './styles.module.scss';
import { useLocale } from 'next-intl';
import { useRouter } from 'next-intl/client';
import NavLinks from '../../components/NavLinks';

export default function Navigation({slug = ''}: {slug?: string}) {
    const locale = useLocale()
    const router = useRouter()

    return (
        <nav className={styles.navigation}>
            <LanguageSwitcher 
                customOptions={[
                    {
                        onClick: () => router.push(`/events/2024/mtl-bal-jam${slug}`, {locale: 'en'}),
                        name: 'EN',
                        active: locale === 'en'
                    },
                    {
                        onClick: () => router.push(`/evenements/2024/mtl-bal-jam${slug}`, {locale: 'fr'}),
                        name: 'FR',
                        active: locale === 'fr'
                    },
                ]}
                customStyling="mbjStyling"
            />
            <NavLinks />
        </nav>
    )
}