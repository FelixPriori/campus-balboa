import SocialMedia, { ISocialMedia } from '../../components/SocialMedia';
import styles from './styles.module.scss';
import DonateButton from '@/components/paypal/DonateButton';

type FooterProps = {
    contact: string;
    contactLink: {
        href: string;
        text: string;
    }
    copyright: string;
    socialMediasCollection: {
        items: ISocialMedia[]
    }
}

export default function Footer({contact, contactLink, copyright, socialMediasCollection}: FooterProps) {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.content}>
                <div>
                    <p className={styles.copy}>
                        <span>{contact}</span><a href={contactLink.href}>{contactLink.text}</a>
                    </p>
                    <p className={styles.copy}>{copyright}</p>
                </div>
                <div className={styles.links}>
                    {socialMediasCollection?.items?.map((sm) => <SocialMedia key={sm.sys.id} {...sm}/>)}
                    <DonateButton />
                </div>
            </div>
        </footer>
    );
}

