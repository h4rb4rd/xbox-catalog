import FiltersItem from './components/FiltersItem'
import NavBar from './components/NavBar'

const AsideBar = () => {
	return (
		<aside className='w-60 flex-shrink-0'>
			<h3 className='text-2xl font-bold'>Collections</h3>
			<hr className='border-gray-300 mt-7 mb-5' />
			<NavBar />
			<form>
				<h3 className='text-2xl font-bold mb-4'>Filters</h3>
				<button
					type='reset'
					className='uppercase font-extrabold text-green-700 '
				>
					Clear Filters
				</button>
				<hr className='border-gray-300 mt-4 mb-2' />
				<details className='bg-gray-50'>
					<summary className='cursor-pointer p-3 mb-1 bg-gray-100 hover:shadow hover:bg-gray-300'>
						<svg
							className='arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform -rotate-90'
							viewBox='0 0 128 128'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z'></path>
						</svg>
						Available on
					</summary>
					<fieldset className=''>
						<FiltersItem
							id='xbox-series-x-s'
							name='available-on'
							text='Xbox Series X|S'
						/>
						<FiltersItem id='xbox-one' name='available-on' text='Xbox One' />
						<FiltersItem id='xbox-360' name='available-on' text='Xbox 360' />
						<FiltersItem id='pc' name='available-on' text='PC' />
					</fieldset>
				</details>
			</form>
		</aside>
	)
}

export default AsideBar
