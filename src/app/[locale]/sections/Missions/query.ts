import { ID, RICH_TEXT } from '@/app/_lib/queries'

export const MISSION = `
    ...on Mission {
        ${ID}
        title
        content {
            ${RICH_TEXT}
        }
    }
`
