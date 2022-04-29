import Head from 'next/head'

import AsideBar from 'components/AsideBar'
import ResetButton from 'components/ResetButton'
import ProductCards from 'components/ProductCards'
import { fetchProducts } from 'utils/fetchProducts'

export const getServerSideProps = async ({ params }) => {
	const products = await fetchProducts({ filter: params.path?.[0] })

	return {
		props: { products },
	}
}

const Catalog = ({ products }) => {
	return (
		<>
			<Head>
				<title>Xbox Catalog</title>
			</Head>
			<main className='flex mx-6 my-8'>
				<AsideBar />
				<section className='ml-12 '>
					<div className='text-xs my-3'>Viewing 1-20 554 results</div>
					<ResetButton>Clear Filters</ResetButton>
					<ProductCards products={products} />
				</section>
			</main>
		</>
	)
}

export default Catalog
