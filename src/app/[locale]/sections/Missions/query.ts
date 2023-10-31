import { ID, RICH_TEXT } from "@/lib/queries";

export const MISSION = `
    ...on Mission {
        ${ID}
        title
        content {
            ${RICH_TEXT}
        }
    }
`