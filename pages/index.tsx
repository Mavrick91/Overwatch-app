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
		padding: 72px 30px;
	`}
`

const MaxWidth = styled.div`
	max-width: 1600px;
	margin: 0 auto;
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
