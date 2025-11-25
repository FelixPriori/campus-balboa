import ObnlSvg from '@/app/_assets/svgs/obnl'
import styling from './styles.module.scss'

export default function Logo() {
	return (
		<div className={styling.logo}>
			<ObnlSvg />
		</div>
	)
}
