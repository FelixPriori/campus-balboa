import Image from "next/image";
import styles from "./styles.module.scss"

export interface ISocialMedia {
    sys: {
        id: string;
    }
    href: string;
    accessibilityDescription: string;
    logo: {
        url: string;
        title: string;
    }
}

export default function SocialMedia({href, accessibilityDescription, logo: {url, title}}: ISocialMedia) {
    return (
        <a className={styles.socialMedia} href={href} target="_blank" rel="norefferer">
            <span className="sr-only">{accessibilityDescription}</span>
            <Image src={url} alt={title} width={42} height={42} />
        </a>
    )
}