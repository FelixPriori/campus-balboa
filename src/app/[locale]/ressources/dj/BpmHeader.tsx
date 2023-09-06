"use client"
import { useTranslations } from "next-intl";

export default function BpmHeader() {
    const t = useTranslations('Resources');
    return (
        <>
            <h2>{t('dj.bpm.title')}</h2>
            <p>{t('dj.bpm.description')}</p>
        </>
    )
}