import styles from './styles.module.scss';
import DonateButton from '@/components/paypal/DonateButton';

type FooterProps = {
    contact: string;
    contactLink: {
        href: string;
        text: string;
    }
    copyright: string;
}

export default function Footer({contact, contactLink, copyright}: FooterProps) {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.content}>
                <div>
                    <p className={styles.copy}>
                        <span>{contact}</span><a href={contactLink.href}>{contactLink.text}</a>
                    </p>
                    <p className={styles.copy}>{copyright}</p>
                </div>
                <div className={styles.donateWrapper}>
                    <DonateButton />
                </div>
            </div>
        </footer>
    );
}

