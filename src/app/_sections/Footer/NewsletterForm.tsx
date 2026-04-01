'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

const FORM_STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const

type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS]

interface FieldErrors {
  firstName?: string
  email?: string
  consent?: string
}

interface NewsletterFormDict {
  title: string
  description: string
  firstNameLabel: string
  firstNamePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  consentLabel: string
  submit: string
  sending: string
  successMessage: string
  errorMessage: string
  firstNameRequired: string
  emailRequired: string
  emailInvalid: string
  consentRequired: string
}

export default function NewsletterForm({
  title,
  description,
  firstNameLabel,
  firstNamePlaceholder,
  emailLabel,
  emailPlaceholder,
  consentLabel,
  submit,
  sending,
  successMessage,
  errorMessage,
  firstNameRequired,
  emailRequired,
  emailInvalid,
  consentRequired,
  locale,
}: NewsletterFormDict & { locale: string }) {
  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<keyof FieldErrors, boolean>>({
    firstName: false,
    email: false,
    consent: false,
  })

  function validate(name: keyof FieldErrors, value: string | boolean): string {
    if (name === 'firstName') return (value as string).trim() ? '' : firstNameRequired
    if (name === 'email') {
      if (!(value as string).trim()) return emailRequired
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) return emailInvalid
      return ''
    }
    if (name === 'consent') return value ? '' : consentRequired
    return ''
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const name = e.target.name as keyof FieldErrors
    const value = name === 'consent' ? e.target.checked : e.target.value
    const error = validate(name, value)
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  function validateAll(form: HTMLFormElement): FieldErrors {
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const consent = (form.elements.namedItem('consent') as HTMLInputElement).checked
    return {
      firstName: validate('firstName', firstName),
      email: validate('email', email),
      consent: validate('consent', consent),
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const nextErrors = validateAll(form)
    setTouched({ firstName: true, email: true, consent: true })
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) return

    setStatus(FORM_STATUS.SENDING)

    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    try {
      const res = await fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, language: locale }),
      })
      if (!res.ok) throw new Error()
      setStatus(FORM_STATUS.SUCCESS)
      form.reset()
      setTouched({ firstName: false, email: false, consent: false })
      setErrors({})
    } catch {
      setStatus(FORM_STATUS.ERROR)
    }
  }

  return (
    <div className={styles.newsletterForm}>
      <h2 className={styles.contactFormTitle}>{title}</h2>
      <p className={styles.newsletterDescription}>{description}</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="newsletter-firstName">{firstNameLabel}</label>
            <input
              id="newsletter-firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder={firstNamePlaceholder}
              required
              aria-invalid={touched.firstName && !!errors.firstName ? 'true' : undefined}
              aria-describedby={touched.firstName && errors.firstName ? 'newsletter-firstName-error' : undefined}
              disabled={status === FORM_STATUS.SENDING}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName && (
              <span id="newsletter-firstName-error" className={styles.fieldError} role="alert">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="newsletter-email">{emailLabel}</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={emailPlaceholder}
              required
              aria-invalid={touched.email && !!errors.email ? 'true' : undefined}
              aria-describedby={touched.email && errors.email ? 'newsletter-email-error' : undefined}
              disabled={status === FORM_STATUS.SENDING}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span id="newsletter-email-error" className={styles.fieldError} role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className={styles.consentField}>
          <div className={styles.checkboxRow}>
            <input
              id="newsletter-consent"
              name="consent"
              type="checkbox"
              required
              aria-invalid={touched.consent && !!errors.consent ? 'true' : undefined}
              aria-describedby={touched.consent && errors.consent ? 'newsletter-consent-error' : undefined}
              disabled={status === FORM_STATUS.SENDING}
              onBlur={handleBlur}
            />
            <label htmlFor="newsletter-consent">{consentLabel}</label>
          </div>
          {touched.consent && errors.consent && (
            <span id="newsletter-consent-error" className={styles.fieldError} role="alert">
              {errors.consent}
            </span>
          )}
        </div>
        <div className={styles.formFooter}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === FORM_STATUS.SENDING || status === FORM_STATUS.SUCCESS}
          >
            {status === FORM_STATUS.SENDING ? sending : submit}
          </button>
          <div className={styles.formMessage}>
            <p className={styles.successMessage} role="status" aria-live="polite">
              {status === FORM_STATUS.SUCCESS ? successMessage : null}
            </p>
            <p className={styles.errorMessage} role="alert" aria-live="assertive">
              {status === FORM_STATUS.ERROR ? errorMessage : null}
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
