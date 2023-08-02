import { ReactNode } from "react";
import style from './main.module.css'

export default function Main({children}: {children: ReactNode}) {
    return <main className={style.main}>{children}</main>
}