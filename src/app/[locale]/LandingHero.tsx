import { ReactNode } from 'react';
import styles from './page.module.scss';


export default function LandingHero({children}: {children: ReactNode}) {
    return (
        <header className={styles.heroWrapper}>
            <div className={styles.content}>
                {children}
            </div>
        </header>
    );
}
