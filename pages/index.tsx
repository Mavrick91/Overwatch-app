import React from 'react'
import styled, { css } from 'styled-components'
import FindPlayer from '~/components/FindPlayer'
import ListPlayers from '~/components/ListPlayers'
import Platform from '~/components/Platform'
import Page from '~/layouts/page'

const Wrapper = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.backgroundHome};
		background-image: url(/background_home.jpg);
		background-size: cover;
		min-height: 100%;
		padding: 72px 15px;
	`}
`

const MaxWidth = styled.div`
	margin: 0 auto;
	max-width: 1600px;
`

const Index = () => (
	<Page>
		<Wrapper>
			<MaxWidth>
				<FindPlayer />
				<Platform />
				<ListPlayers />
			</MaxWidth>
		</Wrapper>
	</Page>
)

export default Index
