import React from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import Meta from '~/components/Meta/meta'
import { store } from '~/store'
import { GlobalStyle, theme } from '~/styles/theme'

const Wrapper = styled.div`
	height: 100%;
`

function Page({ children }) {
	return (
		<Wrapper>
			<Meta />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider store={store}>{children}</Provider>
			</ThemeProvider>
		</Wrapper>
	)
}

export default Page
