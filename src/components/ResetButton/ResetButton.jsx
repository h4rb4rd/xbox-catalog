import Router from 'utils/router'

const ResetButton = ({ children }) => {
	function handleClearFiltersClick() {
		Router.replace('/', { shallow: true })
	}

	return (
		<button
			type='reset'
			className='uppercase font-extrabold text-green-700'
			onClick={handleClearFiltersClick}
		>
			{children}
		</button>
	)
}

export default ResetButton
