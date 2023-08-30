import { Fragment } from 'react'
import styles from './bpmBar.module.scss'
import Link from 'next/link'
import { BpmRangeProps, ranges } from '@/assets/data/bpmRange'
import useLocationHash from '@/hooks/useLocationHash'

const values = Array.from(Array(8).keys()).map((_, i) => i * 50)


function BpmRange({name, selected = false}: BpmRangeProps) {
    return (
        <Link 
            href={`#${name}`}
            scroll={true}
            className={`${styles.range} ${styles[name]} ${selected ? styles.selected : ''}`}
        />
    )
}

export default function BpmBar () {
    const [currentHash] = useLocationHash()

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
                {ranges.map(r => <BpmRange key={r.name} {...r} selected={currentHash === `#${r.name}`}/>)}
            </div>
        </div>
    )
}