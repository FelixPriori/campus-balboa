import { Markdown } from '@/lib/markdown';
import styles from './styles.module.scss';
import ContentfulImage from '@/lib/contentful-image';

interface AdministratorCard {
    avatar: {
        url: string
        title: string
    }
    name: string
    title: string
    bio: {
        json: any;
        links: any;
    }
    pronouns: string
}

export default function AdministratorCard({avatar, name, title, pronouns, bio}: AdministratorCard) {
    return (
        <div className={styles.administratorCard}>
            <div className={styles.avatarWrapper}>
                {avatar && <ContentfulImage className={styles.avatar} src={avatar.url} alt={name} width={100} height={100}/>}
            </div>
            <div className={styles.textWrapper}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.pronouns}>{pronouns}</p>
                <h4 className={styles.title}>{title}</h4>
                <Markdown content={bio}/>
            </div>
        </div>
    );
}

