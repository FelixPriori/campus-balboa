"use client"
import useRouterWithLocale from "@/hooks/useRouterWithLocale";
import PillRadio, { OptionProps } from "../PillRadio"
import { useLocale } from "next-intl";

interface LanguageSwitcherProps {
  customStyling?: string
  customOptions?: OptionProps[]
}

export default function LanguageSwitcher({customStyling, customOptions}: LanguageSwitcherProps) {
    const router = useRouterWithLocale();
    const locale = useLocale()
    return (
        <PillRadio
            customStyling={customStyling}
            options={
              customOptions ? customOptions :
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