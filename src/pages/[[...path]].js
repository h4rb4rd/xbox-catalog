import AsideBar from 'components/AsideBar'
import ResetButton from 'components/ResetButton'
import ProductCards from 'components/ProductCards'
import { fetchProducts } from 'utils/fetchProducts'
import MainLayout from 'layouts/MainLayout'

export const getServerSideProps = async ({ params }) => {
	const products = await fetchProducts({ filter: params.path?.[0] })

	return {
		props: { products },
	}
}

const Catalog = ({ products }) => {
	return (
		<MainLayout>
			<AsideBar />
			<section className='ml-12 '>
				<div className='text-xs my-3'>Viewing 1-20 of 554 results</div>
				<ResetButton>Clear Filters</ResetButton>
				<ProductCards products={products} />
			</section>
		</MainLayout>
	)
}

export default Catalog
