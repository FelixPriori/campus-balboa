'use client'

import { useState, useRef, useEffect, SubmitEvent } from 'react'
import styles from './styles.module.scss'

const FORM_STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const

type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS]

interface FieldErrors {
  fullName?: string
  email?: string
  message?: string
}

interface ContactFormDict {
  title: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submit: string
  sending: string
  successMessage: string
  errorMessage: string
  nameRequired: string
  emailRequired: string
  emailInvalid: string
  messageRequired: string
}

export default function ContactForm({
  title,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submit,
  sending,
  successMessage,
  errorMessage,
  nameRequired,
  emailRequired,
  emailInvalid,
  messageRequired,
}: ContactFormDict) {
  const loadTime = useRef<number>(0)
  useEffect(() => { loadTime.current = Date.now() }, [])

  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<keyof FieldErrors, boolean>>({
    fullName: false,
    email: false,
    message: false,
  })

  function validate(name: keyof FieldErrors, value: string): string {
    if (name === 'fullName') return value.trim() ? '' : nameRequired
    if (name === 'email') {
      if (!value.trim()) return emailRequired
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return emailInvalid
      return ''
    }
    if (name === 'message') return value.trim() ? '' : messageRequired
    return ''
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof FieldErrors
    const error = validate(name, e.target.value)
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  function validateAll(form: HTMLFormElement): FieldErrors {
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    return {
      fullName: validate('fullName', fullName),
      email: validate('email', email),
      message: validate('message', message),
    }
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const nextErrors = validateAll(form)
    setTouched({ fullName: true, email: true, message: true })
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) return

    setStatus(FORM_STATUS.SENDING)

    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      loadTime: loadTime.current,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus(FORM_STATUS.SUCCESS)
      form.reset()
      setTouched({ fullName: false, email: false, message: false })
      setErrors({})
    } catch {
      setStatus(FORM_STATUS.ERROR)
    }
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactFormTitle}>{title}</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="contact-name">{nameLabel}</label>
            <input
              id="contact-name"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder={namePlaceholder}
              required
              aria-invalid={touched.fullName && !!errors.fullName ? 'true' : undefined}
              aria-describedby={touched.fullName && errors.fullName ? 'contact-name-error' : undefined}
              disabled={status === FORM_STATUS.SENDING}
              onBlur={handleBlur}
            />
            {touched.fullName && errors.fullName && (
              <span id="contact-name-error" className={styles.fieldError} role="alert">
                {errors.fullName}
              </span>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email">{emailLabel}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={emailPlaceholder}
              required
              aria-invalid={touched.email && !!errors.email ? 'true' : undefined}
              aria-describedby={touched.email && errors.email ? 'contact-email-error' : undefined}
              disabled={status === FORM_STATUS.SENDING}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span id="contact-email-error" className={styles.fieldError} role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-message">{messageLabel}</label>
          <textarea
            id="contact-message"
            name="message"
            autoComplete="off"
            placeholder={messagePlaceholder}
            rows={4}
            required
            aria-invalid={touched.message && !!errors.message ? 'true' : undefined}
            aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined}
            disabled={status === FORM_STATUS.SENDING}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <span id="contact-message-error" className={styles.fieldError} role="alert">
              {errors.message}
            </span>
          )}
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
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
