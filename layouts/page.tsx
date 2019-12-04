import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Meta from '~/components/Meta/meta'
import { theme, GlobalStyle } from '~/styles/theme'

const Wrapper = styled.div`
	height: 100%;
`

function Page({ children }) {
	return (
		<Wrapper>
			<Meta />
			<GlobalStyle />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</Wrapper>
	)
}

export default Page
