const Footer = () => {
	return (
		<footer className='mt-4 p-6 text-center leading-tight space-y-2'>
			<p>
				Made with ❤️ by &nbsp;
				<a
					href='https://github.com/h4rb4rd'
					className='inline-block border-b border-sky-200 text-sky-600'
				>
					h4rb4rd
				</a>
			</p>
			<p>
				Powered by &nbsp;
				<a
					href='https://nextjs.org'
					className='inline-block border-b border-sky-200 text-sky-600'
				>
					Next.js
				</a>
				&nbsp; and &nbsp;
				<a
					href='https://tailwindcss.com'
					className='inline-block border-b border-sky-200 text-sky-600'
				>
					Tailwind CSS
				</a>
				. Hosted on ▲
				<a
					href='https://vercel.com'
					className='inline-block border-b border-sky-200 text-sky-600'
				>
					Vercel
				</a>
			</p>
		</footer>
	)
}

export default Footer
