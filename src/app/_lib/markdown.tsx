import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'

interface Asset {
  sys: { id: string }
  url?: string | null
  description?: string | null
}

export interface RichTextContent {
  json: Document
  links: {
    assets: {
      block: (Asset | null)[]
    }
  }
}

function RichTextAsset({ id, assets }: { id: string; assets: (Asset | null)[] | undefined }) {
  const asset = assets?.find((a): a is Asset => a != null && a.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} fill alt={asset.description ?? ''} />
  }

  return null
}

export function Markdown({
  content,
  paragraphStyling = '',
}: {
  content: RichTextContent | null | undefined
  paragraphStyling?: string
}) {
  if (!content) return null
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset id={node.data.target.sys.id} assets={content.links.assets.block} />
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => <p className={paragraphStyling}>{children}</p>,
    },
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="rich-italic">{text}</span>,
      [MARKS.BOLD]: (text) => <span className="rich-bold">{text}</span>,
    },
  })
}
