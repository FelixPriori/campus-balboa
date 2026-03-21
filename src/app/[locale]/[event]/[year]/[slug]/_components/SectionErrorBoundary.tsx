'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import styles from './SectionErrorBoundary.module.scss'

interface Props {
  label: string
  children: ReactNode
  /** When true, silently returns null on error instead of showing an error UI.
   *  Use for optional sections (DJs, Partners) where failure should be invisible. */
  silent?: boolean
  errorMessage?: string
  retryLabel?: string
}

interface State {
  hasError: boolean
}

export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`Section "${this.props.label}" failed to load:`, error, info)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.silent) return null

      return (
        <section aria-label={this.props.label} className={styles.section}>
          <div className={styles.content}>
            <p className={styles.message}>{this.props.errorMessage}</p>
            <button type="button" className={styles.retry} onClick={() => window.location.reload()}>
              {this.props.retryLabel}
            </button>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
