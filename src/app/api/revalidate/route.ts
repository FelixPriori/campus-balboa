import { timingSafeEqual } from 'crypto'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('Authorization')
  const secret = process.env.CONTENTFUL_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json({ error: 'Revalidation secret not configured' }, { status: 500 })
  }

  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${secret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath('/', 'layout')

  return NextResponse.json({ revalidated: true })
}
