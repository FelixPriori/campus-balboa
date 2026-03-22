import { type NextRequest, NextResponse } from 'next/server'
import nodemailer, { type SendMailOptions } from 'nodemailer'

export async function POST(request: NextRequest) {
  const { email, fullName, message } = await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.CAMPUS_EMAIL,
      clientId: process.env.CAMPUS_OAUTH_CLIENT_ID,
      clientSecret: process.env.CAMPUS_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.CAMPUS_OAUTH_REFRESH_TOKEN,
    },
  })

  const mailOptions: SendMailOptions = {
    from: process.env.CAMPUS_EMAIL,
    to: process.env.CAMPUS_EMAIL,
    replyTo: email,
    subject: `Message from ${fullName} (${email})`,
    text: message,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: Error | null) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
