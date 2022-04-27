import NavLink from 'components/NavLink'

const NavBar = () => {
	return (
		<nav>
			<ul className='ml-2 space-y-2 mb-5'>
				<li>
					<NavLink href='/' shallow>
						All Xbox Games
					</NavLink>
				</li>
				<li>
					<NavLink href='/new-releases' shallow>
						New Releases
					</NavLink>
				</li>
				<li>
					<NavLink href='/most-played' shallow>
						Most Played
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
