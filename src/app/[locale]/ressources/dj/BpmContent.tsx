"use client"
import { ranges } from "@/assets/data/bpmRange";
import { useTranslations } from "next-intl";
import useLocationHash from "@/hooks/useLocationHash";
import styles from './page.module.scss'

type BpmDetailsProps = {
    name: string
    min: number
    max: number
    selected?: boolean
}

function BpmDetails ({name, min, max, selected = false}: BpmDetailsProps) {
    const t = useTranslations('Resources');
    return (
      <div id={name} className={`${styles.details} ${selected ? styles.selected : ''}`}>
        <h3>{t(`dj.bpm.${name}.title`)}</h3>
        <h4>{t(`dj.bpm.range`, {min, max: max !== 350 ? max : '∞'})}</h4>
        <p>{t(`dj.bpm.${name}.description`)}</p>
      </div>
    )
  }
  

export default function BpmContent() {
    const [currentHash] = useLocationHash()
    return ranges.map((r) => <BpmDetails key={r.name} {...r} selected={currentHash === `#${r.name}`}  />) 
}