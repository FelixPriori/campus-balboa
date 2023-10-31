import { ID, IMAGE, LINK, RICH_TEXT } from "@/lib/queries";

export const FEATURED_SLIDE = `
    ...on FeaturedSlide {
        ${ID}
        image {
            ${IMAGE}
        }
        title
        type
        details {
            ${RICH_TEXT}
        }
        link {
            ${LINK}
        }
    }
`