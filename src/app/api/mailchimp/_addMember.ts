'use server'
import mailchimp from '@mailchimp/mailchimp_marketing'
import type { lists, ErrorResponse } from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
})

export interface AddMemberParams {
  data: FormData
  language: string
  tags?: string[]
}

export async function addMember({
  data,
  language,
  tags,
}: AddMemberParams): Promise<lists.MembersSuccessResponse | ErrorResponse | unknown> {
  const audienceId = String(process.env.MAILCHIMP_AUDIENCE_ID)
  const email = String(data.get('email'))
  try {
    const response = await mailchimp.lists.setListMember(audienceId, email, {
      email_address: email,
      merge_fields: {
        FNAME: String(data.get('firstName') ?? ''),
        LNAME: String(data.get('lastName') ?? ''),
      },
      marketing_permissions: [
        { marketing_permission_id: String(process.env.MAILCHIMP_MARKETING_PERMISSION_ID), enabled: true },
      ],
      status: 'pending',
      status_if_new: 'pending',
      language,
    })
    if (tags?.length) {
      await mailchimp.lists.updateListMemberTags(audienceId, email, {
        tags: tags.map((name) => ({ name, status: 'active' })),
      })
    }
    return response
  } catch (err) {
    console.error(err)
    return err
  }
}
