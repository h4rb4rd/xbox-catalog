import ProductCard from 'components/ProductCard'
import React from 'react'

const ProductCards = ({ products }) => {
	return (
		<div className='flex flex-wrap gap-5 mt-8'>
			{products.map(({ id, ...props }) => (
				<ProductCard key={id} {...props} />
			))}
		</div>
	)
}

export default ProductCards
