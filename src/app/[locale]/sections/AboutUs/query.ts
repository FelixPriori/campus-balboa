import { ID, IMAGE, RICH_TEXT } from "@/lib/queries";

export const ADMINISTRATOR = `
    ...on Administrator {
        ${ID}
        name
        pronouns
        title
        bio {
            ${RICH_TEXT}
        }
        avatar {
            ${IMAGE}
        }
    }
`