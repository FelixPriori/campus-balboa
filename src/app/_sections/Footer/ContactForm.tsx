'use client'

import { useState, SubmitEvent } from 'react'
import styles from './styles.module.scss'

const FORM_STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const

type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS]

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
}: ContactFormDict) {
  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE)

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(FORM_STATUS.SENDING)

    const form = e.currentTarget
    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
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
              disabled={status === FORM_STATUS.SENDING}
            />
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
              disabled={status === FORM_STATUS.SENDING}
            />
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
            disabled={status === FORM_STATUS.SENDING}
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
