import Image from 'next/image'

const ProductCard = ({ title, img, price, msrp }) => {
	return (
		<article className='product relative flex items-start flex-col w-[150px] mb-6'>
			<div className='product-image mb-2 transform transition h-[225px]'>
				<Image src={img} width='150' height='225' alt={title} />
			</div>
			<span className='bg-gray-200 inline-block px-1 uppercase text-xs leading-relaxed tracking-widest mb-2'>
				40% off
			</span>
			<h3>
				<a
					href='#'
					className='game-link inline-block leading-tight text-sm hover:underline'
					title={title}
				>
					{title}
				</a>
			</h3>
			<div className='text-lg'>
				<span className='line-through text-gray-600 mr-1'>${price}</span>
				<span>${msrp}</span>
			</div>
		</article>
	)
}

export default ProductCard
