import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
    subsets: ['latin'], 
    weight: ['100', '200', '300', '400', '500','600', '700', '800', '900'],
    style: ['normal', 'italic']
})
  

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    look?: 'full' | 'outline' | 'flat'
}

export default function Button({children, onClick, type="button", variant='primary', look="full"}: ButtonProps) {
    return <button onClick={onClick} type={type} className={`${styles.button} ${styles[variant]} ${styles[look]} ${poppins.className}`}>{children}</button>
}