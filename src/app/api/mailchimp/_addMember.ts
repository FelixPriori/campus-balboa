"use server"
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
});

export interface AddMemberParams {
  data: FormData
  language: string,
  tags?: string[]
}

export async function addMember({data, language, tags}: AddMemberParams) {
  const email = data.get('email')
  try {
    const response = await mailchimp.lists.setListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
      email,
      {
        email_address: data.get('email'),
        merge_fields: {
          FNAME: data.get('firstName'),
          LNAME: data.get('lastName'),
        },
        marketing_permissions: {
          enabled: data.get('permission')
        },
        status: 'subscribed',
        tags,
        language,
      }
    );
    return response;
  } catch (err) {
    console.error(err)
    return err
  }
}