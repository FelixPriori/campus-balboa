"use client"
import CampusLogo from "@/assets/svgs/campus-logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "next-intl";
import { useRouter } from 'next-intl/client';
import Link from "next/link";

const frUrl = '/evenements/2024/extracurriculaire-olga'
const enUrl = '/events/2024/extracurriculaire-olga'


export default function Navigation() {
    const router = useRouter()
    const locale = useLocale()

    return (
        <nav className="app-nav">
            <Link href={`/${locale}`}>
                <CampusLogo />
            </Link>
            <LanguageSwitcher
                customStyling='noOutline'
                customOptions={[
                    {
                        onClick: () => router.push(enUrl, { locale: 'en' }),
                        name: 'EN',
                        active: locale === 'en'
                    },
                    {
                        onClick: () => router.push(frUrl, { locale: 'fr' }),
                        name: 'FR',
                        active: locale === 'fr'
                    },
                ]}
            />
        </nav>
    )
}