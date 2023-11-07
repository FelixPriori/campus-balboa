import Link from "next/link";
import styles from './styles.module.scss'

interface NavLinkProps {
    text: string;
    href: string;
}

export default function NavLink({text, href}: NavLinkProps) {
    return (
        <li className={styles.navLink}>
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}