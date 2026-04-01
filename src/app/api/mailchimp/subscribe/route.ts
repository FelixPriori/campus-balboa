import { NextResponse } from 'next/server'
import { addMember } from '../_addMember'

export async function POST(request: Request) {
  const { firstName, email, language } = await request.json()

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
