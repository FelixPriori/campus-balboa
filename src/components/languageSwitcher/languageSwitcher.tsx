"use client"
import useRouterWithLocale from "@/hooks/useRouterWithLocale";
import PillRadio from "../pillRadio/pillRadio"
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const router = useRouterWithLocale();
    const locale = useLocale()
    return (
        <PillRadio 
            options={
              [
                {
                  onClick: () => router.setLang('en'),
                  name: 'EN',
                  active: locale === 'en'
                },
                {
                  onClick: () => router.setLang('fr'),
                  name: 'FR',
                  active: locale === 'fr'
                },
              ]
            }
        />
    )
}