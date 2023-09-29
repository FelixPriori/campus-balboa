"use client"
import {redirect} from 'next/navigation';
import { useLocale } from 'next-intl';

export default function EventsPage() {
    const locale = useLocale()
    if (locale === 'fr') {
        redirect(`evenements/2024/mtl-bal-jam`);
    } else {
        redirect(`events/2024/mtl-bal-jam`);
    }
}