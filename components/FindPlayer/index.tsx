import React from 'react'
import { Wrapper, H1, InputText, InputSubmit } from './findPlayer.styled'

function FindPlayer() {
	return (
		<Wrapper>
			<H1>player search</H1>
			<form>
				<InputText type="text" />
				<InputSubmit type="submit" />
			</form>
		</Wrapper>
	)
}

export default FindPlayer
