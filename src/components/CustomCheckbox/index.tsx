import styles from './styles.module.scss'

interface CheckboxProps {
    name: string
    label: string
    id: string
}

export default function CustomCheckbox({name, label, id}: CheckboxProps) {
    return (
        <div className={styles.customCheckbox}>
            <input id={id} name={name} type="checkbox" />
            <label className={styles.label} htmlFor={id}>
                <span className={styles.checkbox}></span>
                {label}
            </label>
        </div>
    )
}