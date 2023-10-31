import LanguageSwitcher from '@/components/LanguageSwitcher';
import styles from './styles.module.scss';
import { Markdown } from '@/lib/markdown';

type HeroProps = {
    title: string;
    description: {
        json: any;
        links: any;
    }
}

export default function Hero({title, description}: HeroProps) {
    return (
        <header className={styles.heroWrapper}>
            <div className={styles.content}>
                <div className={styles.languageSwitcher}>
                    <LanguageSwitcher />
                </div>
                <h1 className={styles.heroTitle}>{title}</h1>
                <div className={styles.heroDescription}>
                    <Markdown content={description} />
                </div>
            </div>
        </header>
    );
}
