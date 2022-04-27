import Head from 'next/head'

import AsideBar from 'components/AsideBar'

const Catalog = () => {
	return (
		<>
			<Head>
				<title>Xbox Catalog</title>
			</Head>
			<main className='flex mx-6 my-8'>
				<AsideBar />
			</main>
		</>
	)
}

export default Catalog
