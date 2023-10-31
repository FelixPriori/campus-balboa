import { Markdown } from '@/lib/markdown';
import styles from './styles.module.scss';

export default function MissionsCard({title, content}: {title: string, content: {json: any, links: any}}) {
    return (
        <div className={styles.missionCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <Markdown content={content}/>
        </div>
    );
}

