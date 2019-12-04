import React from 'react'
import Meta from '~/components/meta'

function Page({ children }) {
	return (
		<div>
			<Meta />
			{children}
			<style jsx global>{`
				body {
					margin: 0;
					padding: 0;
				}
			`}</style>
		</div>
	)
}

export default Page
