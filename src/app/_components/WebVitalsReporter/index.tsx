'use client'

import { useReportWebVitals } from 'next/web-vitals'
import type { NextWebVitalsMetric } from 'next/app'

const sendToAnalytics = (metric: NextWebVitalsMetric) => {
  window.gtag?.('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  })

  if (process.env.NODE_ENV === 'development') {
    console.log(`[web-vitals] ${metric.name}: ${Math.round(metric.value)}ms (id: ${metric.id})`)
  }
}

export default function WebVitalsReporter() {
  useReportWebVitals(sendToAnalytics)
  return null
}
