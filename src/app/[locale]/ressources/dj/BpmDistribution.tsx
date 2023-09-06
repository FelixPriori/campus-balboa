"use client"
import { useTranslations } from "next-intl"
import { useState } from "react"
import PillRadio from "@/components/pillRadio/pillRadio"
import BpmDistributionGraph, { Level } from "@/components/bpmDistributionGraph/bpmDistributionGraph"
import styles from './page.module.scss'


export default function BpmDistribution() {
    const [level, setLevel] = useState<Level>(Level.all)
    const t = useTranslations('Resources');
    
    
    const changeLevel = (level: Level) => setLevel(level)
    
    return (
        <div>
            <h3>{t('dj.bpm.distribution.title')}</h3>
            <p>{t('dj.bpm.distribution.description')}</p>
            <div className={styles.pillWrapper}>
                <PillRadio 
                    options={[
                        {
                            onClick: () => changeLevel(Level.all),
                            active: level === Level.all,
                            name: t('dj.bpm.distribution.all')
                        },
                        {
                            onClick: () => changeLevel(Level.beginner),
                            active: level === Level.beginner,
                            name: t('dj.bpm.distribution.beginner')
                        },
                        {
                            onClick: () => changeLevel(Level.intermediate),
                            active: level === Level.intermediate,
                            name: t('dj.bpm.distribution.intermediate')
                        },
                        {
                            onClick: () => changeLevel(Level.advanced),
                            active: level === Level.advanced,
                            name: t('dj.bpm.distribution.advanced')
                        },
                    ]}
                />
            </div>
            <div className={styles.graphWrapper}>
                <BpmDistributionGraph level={level} />
            </div>
        </div>
    )
}

