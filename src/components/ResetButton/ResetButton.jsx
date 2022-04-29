import React from 'react'

const ResetButton = ({ children }) => {
	return (
		<button type='reset' className='uppercase font-extrabold text-green-700'>
			{children}
		</button>
	)
}

export default ResetButton
