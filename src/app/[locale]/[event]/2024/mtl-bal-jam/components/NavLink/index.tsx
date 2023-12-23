import Link from "next/link";
import styles from './styles.module.scss'

interface NavLinkProps {
    text: string;
    href: string;
    isCurrent: boolean;
}

export default function NavLink({ text, href, isCurrent }: NavLinkProps) {
    return (
        <li className={`${styles.navLink} ${isCurrent ? styles.current : ''}`}>
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}