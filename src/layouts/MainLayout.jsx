import Head from 'next/head'
import Footer from 'partials/Footer'

const MainLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Xbox Catalog</title>
				<meta
					name='description'
					content='Clone of Xbox Game Catalog. Implemented with Next.js and Tailwind'
				/>
				<meta name='keywords' content='HTML, CSS, JavaScript'></meta>
			</Head>
			<main className='flex mx-6 my-8'>{children}</main>
			<Footer />
		</>
	)
}

export default MainLayout
