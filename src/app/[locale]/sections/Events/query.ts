import { ID, IMAGE, LINK } from '@/app/_lib/queries'

export const EVENT = `
    ...on Event {
        ${ID}
        title
        dark
        tagline
        image {
            ${IMAGE}
        }
        link {
            ${LINK}
        }
    }
`
