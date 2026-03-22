import Image from 'next/image'
import styles from './PersonBlock.module.scss'
import { Markdown, type RichTextContent } from '@/app/_lib/markdown'

export const PERSON_VARIANT = {
  INSTRUCTOR: 'instructor',
  DJ: 'dj',
} as const

export type PersonVariant = typeof PERSON_VARIANT[keyof typeof PERSON_VARIANT]

interface PersonBlockProps {
  name: string
  biography?: RichTextContent | null
  avatar?: { url: string; title: string } | null
  pronouns?: string | null
  variant: PersonVariant
  nameAbove?: boolean
}

export function PersonBlock({
  name,
  biography,
  avatar,
  pronouns,
  variant,
  nameAbove = false,
}: PersonBlockProps) {
  return (
    <>
      {nameAbove && <h3>{name}</h3>}
      <div className={styles[variant]}>
        {avatar?.url && (
          <div className={styles.avatar}>
            <Image
              src={avatar.url}
              width={1080}
              height={1080}
              sizes={variant === PERSON_VARIANT.INSTRUCTOR ? '200px' : '120px'}
              style={{ objectFit: 'cover' }}
              alt={avatar.title}
            />
          </div>
        )}
        <div className={styles.details}>
          {!nameAbove && <h4>{name}</h4>}
          {pronouns && <p>{pronouns}</p>}
          <Markdown content={biography} />
        </div>
      </div>
    </>
  )
}
