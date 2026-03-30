/**
 * Analytics utility — wraps window.gtag safely.
 * All calls are no-ops if GA4 hasn't loaded (user declined consent or script not yet initialised).
 */

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  window.gtag?.('event', eventName, params)
}

export function trackPageView(path: string, title: string) {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}
