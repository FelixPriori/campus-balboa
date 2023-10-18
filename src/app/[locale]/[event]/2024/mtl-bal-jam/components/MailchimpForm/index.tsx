"use client"
import { addMember } from '@/app/api/mailchimp/_addMember';
import { useLocale, useTranslations } from "next-intl";
import {toast} from 'react-toastify';
import { useState } from 'react';
import styles from './styles.module.scss'
import CustomCheckbox from '@/components/CustomCheckbox';

export default function MailchimpForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const locale = useLocale()
    const t = useTranslations('Events.2024.MtlBalJam.subscribe')

    const handleSubmit = async (data: FormData) => {
        try {
            await addMember({data, language: locale, tags: ['MTL BAL JAM']})
            toast.success(t('success'), {
                className: 'mbj-toast-success'
            })
            setIsSuccess(true)
        } catch {
            toast.error(t('error'))
        }
    }

    return !isSuccess ? (
        <form className='mbj-form' action={handleSubmit}>
            <fieldset className="mbj-fieldset">
                <label className="mbj-label" htmlFor="subscriberFirstName">{t('firstName')}</label>
                <input className="mbj-field" required id="subscriberFirstName" name="firstName" type="text" placeholder={t('firstNamePlaceholder')} />
            </fieldset>
            <fieldset className="mbj-fieldset">
                <label className="mbj-label" htmlFor="subscriberLastName">{t('lastName')}</label>
                <input className="mbj-field" required id="subscriberLastName" name="lastName" type="text" placeholder={t('lastNamePlaceholder')} />
            </fieldset>
            <fieldset className="mbj-fieldset">
                <label className="mbj-label" htmlFor="subscriberEmail">{t('email')}</label>
                <input className="mbj-field" required id="subscriberEmail" name="email" type="email" placeholder={t('emailExample')} />
            </fieldset>
            <fieldset className='mbj-inline-fieldset'>
                <CustomCheckbox 
                    name="permission"
                    id="permission"
                    label={t('permission')}
                />
            </fieldset>
            <button className="mbj-button" type="submit">{t('subscribe')}</button>
        </form>
    ) : (
        <p className={styles.success}>{t('success')}</p>
    )
}