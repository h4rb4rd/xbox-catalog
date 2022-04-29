import Router, { useRouter } from 'utils/router'

const FiltersItem = ({ id, name, text }) => {
	const { pathname, query } = useRouter()

	function handleChangeDevice(evt) {
		Router.replace(
			{
				pathname,
				query: {
					...query,
					available: evt.currentTarget.value,
				},
			},
			{ shallow: true }
		)
	}

	return (
		<div className='relative'>
			<input
				id={id}
				name={name}
				type='radio'
				value={id}
				className='availability-radio absolute invisible h-0 w-0'
				onChange={handleChangeDevice}
			/>
			<label
				htmlFor={id}
				className='availability-label block p-3 cursor-pointer hover:bg-gray-300'
			>
				{text}
			</label>
		</div>
	)
}

export default FiltersItem
