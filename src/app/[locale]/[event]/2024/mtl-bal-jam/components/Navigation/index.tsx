"use client"
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl';
import { useRouter } from 'next-intl/client';
import NavLinks from '../../components/NavLinks';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileNavigation from '@/app/[locale]/components/MobileNavigation';
import styles from './styles.module.scss';
import { getSlugFromPathname } from '@/app/util/navigationUtils';

const base = 'Events.2024.MtlBalJam.navigation'

const pages = ['home', 'about', 'music', 'venue', 'instructors', 'activities', 'competitions', 'code', 'registration']

const styling = 'mbjStyling'

const frUrl = '/evenements/2024/mtl-bal-jam'

const enUrl = '/events/2024/mtl-bal-jam'

const switcherOptions = {
    frUrl,
    enUrl,
    styling
}

export default function Navigation() {
    const pathname = usePathname()
    const locale = useLocale()
    const router = useRouter()
    const slug = getSlugFromPathname(pathname);

    return (
        <>
            <nav className={styles.navigation}>
                <LanguageSwitcher
                    customOptions={[
                        {
                            onClick: () => router.push(`${enUrl}${slug}`, { locale: 'en' }),
                            name: 'EN',
                            active: locale === 'en'
                        },
                        {
                            onClick: () => router.push(`${frUrl}${slug}`, { locale: 'fr' }),
                            name: 'FR',
                            active: locale === 'fr'
                        },
                    ]}
                    customStyling={styling}
                />
                <NavLinks pages={pages} current={slug} />
            </nav>
            <MobileNavigation
                pages={pages}
                base={base}
                switcherOptions={{
                    ...switcherOptions,
                    slug,
                }}
            />
        </>
    )
}