"use client"
import { ReactNode } from 'react';
import { useRouter } from '../../../../navigation';
import styles from './styles.module.scss';

export default function BackButton({ children }: { children: ReactNode }) {
    const router = useRouter();
    return (
        <button className={styles.backButton} type="button" onClick={() => router.back()}>{children}</button>
    )
}