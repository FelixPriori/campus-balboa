import styles from './page.module.scss';

export default function MissionsCard({title, content}: {title: string, content: string}) {
    return (
        <div className={styles.missionCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardContent}>{content}</p>
        </div>
    );
}

