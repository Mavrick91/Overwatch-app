import React from 'react'
import { useSelector } from 'react-redux'
import ListPlayersItem from '~/components/ListPlayersItem'
import Loader from '~/components/Loader'
import { getPlayersFoundLoadingSelector } from '~/selectors/loading'
import { getPlayersFoundSortedSelector } from '~/selectors/playersFound'
import {
	FilterRow,
	Item,
	Label,
	NoPlayerFound,
	Wrapper,
} from './ListPlayers.styled'

function ListPlayers() {
	const [keyToSort, setKeyToSort] = React.useState('level')
	const isPlayerFetching: boolean = useSelector(getPlayersFoundLoadingSelector)
	const playersFoundSorted: Player[] | undefined = useSelector(state =>
		getPlayersFoundSortedSelector(state, keyToSort),
	)

	function DisplayListPlayer(allPlayers) {
		if (isPlayerFetching) return <Loader text="Loading Results" />
		else if (!allPlayers) return null
		else if (allPlayers.length === 0)
			return (
				<NoPlayerFound>
					No players found for given platform filtered
				</NoPlayerFound>
			)
		else {
			return allPlayers.map((player: Player) => (
				<ListPlayersItem
					name={player.name}
					key={player.id}
					level={player.level}
					platform={player.platform}
					isPublic={player.isPublic}
				/>
			))
		}
	}

	return (
		<Wrapper>
			<FilterRow>
				<Label>Sort By:</Label>
				{['level', 'platform'].map((item, index) => (
					<Item
						key={item}
						isChecked={keyToSort === item}
						onClick={() => setKeyToSort(item)}
					>
						{item}
					</Item>
				))}
			</FilterRow>
			{DisplayListPlayer(playersFoundSorted)}
		</Wrapper>
	)
}

export default ListPlayers
