import Image from 'next/image'
import clsx from 'clsx'

const ProductCard = ({ title, img, price, msrp, isValidating }) => {
	return (
		<article
			className={clsx(
				!isValidating && 'product',
				'relative flex items-start flex-col w-[150px] mb-6'
			)}
		>
			<div
				className={clsx(
					!isValidating && 'product-image',
					'mb-2 transform transition h-[225px] w-[150px]  ',
					isValidating && 'bg-gray-200 animate-pulse rounded-md'
				)}
			>
				{!isValidating && (
					<Image src={img} width='150' height='225' alt={title} />
				)}
			</div>
			<span className='bg-gray-200 inline-block px-1 uppercase text-xs leading-relaxed tracking-widest mb-2'>
				{!isValidating ? '40% off' : '0% off'}
			</span>
			<h3>
				<a
					href='#'
					className='game-link inline-block leading-tight text-sm hover:underline mb-2'
					title={!isValidating ? title : ''}
				>
					{!isValidating ? title : ''}
				</a>
			</h3>
			<div className='text-lg'>
				<span className='line-through text-gray-600 mr-1'>
					${!isValidating ? price : '$0'}
				</span>
				<span>${!isValidating ? msrp : '$0'}</span>
			</div>
		</article>
	)
}

export default ProductCard
