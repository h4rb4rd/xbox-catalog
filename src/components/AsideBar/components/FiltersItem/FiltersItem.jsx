import React from 'react'

const FiltersItem = ({ id, name, text }) => {
	return (
		<div className='relative'>
			<input
				id={id}
				name={name}
				type='radio'
				className='availability-radio absolute invisible h-0 w-0'
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
