import { NextResponse } from 'next/server'
import { addMember } from '../_addMember'

export async function POST(request: Request) {
  const { firstName, email, language, website, loadTime } = await request.json()

  if (website || !loadTime || Date.now() - loadTime < 3000) {
    return NextResponse.json({ success: true })
  }

  const data = new FormData()
  data.set('firstName', firstName)
  data.set('email', email)
  data.set('permission', 'true')

  const response = await addMember({ data, language, tags: ['newsletter'] })

  if (response instanceof Error) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 400 })
  }
  return NextResponse.json({ success: true })
}
