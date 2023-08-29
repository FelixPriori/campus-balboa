import { Fragment } from 'react'
import styles from './bpmBar.module.scss'

type BpmRangeProps = {
    min: number
    max: number
    name: string
    cssClass: string
    selected?: boolean
}

const values = Array.from(Array(8).keys()).map((_, i) => i * 50)
const ranges: BpmRangeProps[] = [
    {
        name: 'Slow Balboa',
        min: 40,
        max: 100,
        cssClass: 'slowBal'
    },
    {
        name: 'Awkward Range',
        min: 100,
        max: 150,
        cssClass: 'awkwardRange'
    },
    {
        name: 'Beginner Class',
        min: 150,
        max: 170,
        cssClass: 'beginnerClass'
    },
    {
        name: 'Bulk of Music',
        min: 170,
        max: 220,
        cssClass: 'bulk'
    },
    {
        name: 'Comfortable Area',
        min: 180,
        max: 210,
        cssClass: 'comfortableArea'
    },
    {
        name: 'Sweet Spot',
        min: 190,
        max: 205,
        cssClass: 'sweetSpot'
    },
    {
        name: 'Competition Range',
        min: 210,
        max: 230,
        cssClass: 'competitionRange'
    },
    {
        name: 'Fast Tempo',
        min: 220,
        max: 350,
        cssClass: 'fastTempo',
    },
]

function BpmRange({cssClass, selected = false}: BpmRangeProps) {
    return (
        <div 
            className={`${styles.range} ${styles[cssClass]} ${selected ? styles.selected : ''}`}
        />
    )
}

export default function BpmBar () {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {values.map((v) => 
                    <Fragment key={v}>
                        <div className={styles.bar}></div>
                        <div className={styles.label}>
                            <p>{v} BPM</p>
                        </div>
                    </Fragment>
                )}
            </div>
            <div className={styles.ranges}>
                {ranges.map(r => <BpmRange key={r.name} {...r}/>)}
            </div>
        </div>
    )
}