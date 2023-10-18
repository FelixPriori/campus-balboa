import LanguageSwitcher from '@/components/languageSwitcher/languageSwitcher';
import styles from './styles.module.scss';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <LanguageSwitcher />
            {/* <ul>
                <li><a>Instructors</a></li>
                <li><a>Venue</a></li>
                <li><a>Music</a></li>
            </ul> */}
        </nav>
    )
}