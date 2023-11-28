import Main from "@/layout/main";
import styles from './loading.module.scss'

export default function Loading() {
    return (
        <>
            <Main styles={{ borderRadius: '0.625rem' }}>
                <div className={styles.header}></div>
                <div className={styles.instructors}>
                    <div className={styles.yt}></div>
                </div>
            </Main>
            <div className={styles.footer} />
        </>
    )
}