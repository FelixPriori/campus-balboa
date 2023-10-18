import { ReactNode } from "react";
import style from './main.module.css'

export default function Main({children, styles}: {children: ReactNode, styles?: any}) {
    return <main style={styles} className={style.main}>{children}</main>
}