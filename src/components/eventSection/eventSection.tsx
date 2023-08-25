import Image from 'next/image'
import styles from './eventSection.module.css'

type EventSectionProps = {
    children: React.ReactNode
    imgSrc: string
    imgAlt: string
    style?: React.CSSProperties
    clipDirection: 'bottom-left' | 'top-right-bottom-right' | 'top-left'
} 

export default function EventSection ({children, imgSrc, clipDirection, imgAlt, style = {}} : EventSectionProps) {
    return (
        <section 
            style={style} 
            className={`${styles[clipDirection]} ${styles.section}`}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                quality={100}
                objectFit='cover'
                fill
            />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}