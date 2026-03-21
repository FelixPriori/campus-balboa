const CALENDAR_MODE = {
  AGENDA: 'AGENDA',
  MONTH: 'MONTH',
} as const

type CalendarMode = (typeof CALENDAR_MODE)[keyof typeof CALENDAR_MODE]

const CALENDAR_ID =
  'Y181NWIzOTE2YTcxNWIyYzg1MTBmYzY5MmQ1M2M1NWMzZDc4OWNjNDIzNDA5MzIxZGEyNjJmM2I5MzZmNzQyOGZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
const CALENDAR_COLOR = '#264653'
const CALENDAR_BASE_URL = 'https://calendar.google.com/calendar/embed'

export function buildGoogleCalendarUrl({
  title,
  locale,
  isMobile,
}: {
  title: string
  locale: string
  isMobile: boolean
}): string {
  const mode: CalendarMode = isMobile ? CALENDAR_MODE.AGENDA : CALENDAR_MODE.MONTH

  const params = new URLSearchParams({
    hl: locale,
    showCalendars: '0',
    showPrint: '0',
    mode,
    title,
    src: CALENDAR_ID,
    color: CALENDAR_COLOR,
  })

  if (isMobile) params.set('showTabs', '0')

  return `${CALENDAR_BASE_URL}?${params}`
}
