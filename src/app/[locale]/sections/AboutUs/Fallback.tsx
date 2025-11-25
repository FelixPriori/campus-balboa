import Skeleton from '../../../_components/Skeleton'
import styles from './styles.module.scss'

export default function Fallback() {
	return (
		<div className={styles.aboutFallback}>
			<Skeleton />
		</div>
	)
}
