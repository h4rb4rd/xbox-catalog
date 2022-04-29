export const getUrl = (params, query) => {
	let url = '/api/products'

	const searchParams = new URLSearchParams()

	if (params.path?.[0]) {
		searchParams.append('filter', params.path[0])
	}

	if (query.available) {
		searchParams.append('available', query.available)
	}

	const searchString = searchParams.toString()

	return `${url}${searchString.length !== 0 ? '?' + searchString : ''}`
}
