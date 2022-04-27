import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from '../../utils/router'

const NavLink = ({ children, ...props }) => {
	const { pathName } = useRouter()
	const isActive = pathName === props.href

	return (
		<Link {...props}>
			<a
				className={clsx(
					'block p-2 text-sm hover:underline',
					isActive && 'text-green-600'
				)}
			>
				{children}
			</a>
		</Link>
	)
}

export default NavLink
