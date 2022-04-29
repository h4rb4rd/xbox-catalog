import useSWR from 'swr'

import { getUrl } from 'utils/getUrl'
import { useRouter } from 'utils/router'
import ProductCard from 'components/ProductCard'

const ProductCards = ({ products }) => {
	const { pathname, params, query } = useRouter()
	const url = getUrl(params, query)

	const { data, isValidating } = useSWR(url, {
		initialData: products,
		revalidateOnFocus: false,
	})

	return (
		<div className='flex flex-wrap gap-5 mt-8'>
			{data.map(({ id, ...props }) => (
				<ProductCard key={id} isValidating={isValidating} {...props} />
			))}
		</div>
	)
}

export default ProductCards
