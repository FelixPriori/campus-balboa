import styles from './pillRadio.module.css'

type OptionProps = {
    name: string
    onClick: () => void
    active: boolean
    first?: boolean
    last?: boolean
}

type PillRadioProps = {
    options: OptionProps[]
}

function Option ({name, onClick, active, first = false, last = false}: OptionProps) {
    return (
        <button
            className={`${styles.option} ${active && styles.active} ${first && styles.first} ${last && styles.last}`} 
            onClick={onClick} 
            type="button"
        >
            {name}
        </button>
    )
}

export default function PillRadio ({options = []}: PillRadioProps) {
    return <div className={styles.pillRadio}>
        {options.map((option, index) => 
            <Option 
                key={option.name} 
                first={index === 0}
                last={index === options.length - 1} 
                {...option} 
            />
        )}
    </div>
}