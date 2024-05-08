import { useLocale } from "next-intl";
import { useRouter } from "../navigation";
import { useEffect, useState } from "react";

export default function useCustomSwitcher({ frUrl, enUrl, slug = '' }: { frUrl?: string, enUrl?: string, slug?: string }) {
    const locale = useLocale();
    const router = useRouter()
    const [customOptions, setCustomOptions] = useState<any>()

    useEffect(() => {
        if (enUrl && frUrl) {
            setCustomOptions([
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
            ])
        }
    }, [enUrl, frUrl, locale, router, slug])

    return customOptions
}