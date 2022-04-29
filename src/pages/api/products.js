import { fetchProducts } from 'utils/fetchProducts'

export default async function productsController(req, res) {
	const products = await fetchProducts({
		filter: req.query.filter,
		available: req.query.available,
	})

	res.json(products)
}
