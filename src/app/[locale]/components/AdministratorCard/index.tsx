import Image from 'next/image';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface AdministratorCard {
    avatar: string;
    name: string
    title: string
    bio: ReactNode
    pronouns: string
}

export default function AdministratorCard({avatar, name, title, pronouns, bio}: AdministratorCard) {
    return (
        <div className={styles.administratorCard}>
            <div className={styles.avatarWrapper}>
                {avatar && <Image className={styles.avatar} src={avatar} alt={name} width={100} height={100}/>}
            </div>
            <div className={styles.textWrapper}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.pronouns}>{pronouns}</p>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    );
}

