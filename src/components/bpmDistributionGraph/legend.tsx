"use client"
import { useTranslations } from 'next-intl'
import { Level } from './bpmDistributionGraph'
import styles from './bpmDistributionGraph.module.scss'

export default function Legend() {
    const t = useTranslations('Resources');
    return (
        <div className={styles.legend}>
            <ul>
                {Object.keys(Level).map((l, i) => i === 0 ? null :  
                    <li key={l} className={styles[l]}>
                        <div></div>
                        <p>{t(`dj.bpm.distribution.${l}`)}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}