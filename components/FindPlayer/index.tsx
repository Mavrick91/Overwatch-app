import React from 'react'
import { useDispatch } from 'react-redux'
import { profilePlayerAPI } from '~/api/endpoints'
import { getEntities } from '~/store/actions'
import { H1, InputSubmit, InputText, Wrapper } from './findPlayer.styled'

function FindPlayer() {
	const [playerName, setPlayerName] = React.useState('')
	const dispatch = useDispatch()

	function onSubmit(e: React.FormEvent) {
		e.preventDefault()

		dispatch(getEntities('playersFound', { playerName }, profilePlayerAPI))
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPlayerName(e.currentTarget.value)
	}

	return (
		<Wrapper>
			<H1 className="sm:text-7xl">player search</H1>
			<form onSubmit={onSubmit}>
				<InputText
					type="text"
					value={playerName}
					onChange={handleChange}
					className="sm:w-1/2"
				/>
				<InputSubmit type="submit" value="SEARCH" className="sm:w-auto" />
			</form>
		</Wrapper>
	)
}

export default FindPlayer
