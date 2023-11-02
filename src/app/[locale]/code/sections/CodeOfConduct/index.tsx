import { PageSectionProps } from "@/app/[locale]/sections";
import { Markdown } from "@/lib/markdown";
import styles from './styles.module.scss';


export default function CodeOfConductSection({title, anchor, content}: PageSectionProps) {
    return (
        <section id={anchor} className={styles.codeOfConductSection}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                {content && <Markdown content={content}/>}
            </div>
        </section>
    )
}