import { createSelector } from 'reselect'
import { prop, sortBy } from 'ramda'
import { Map } from 'immutable'
import { shouldShowAllPlatform } from './platform'
import { getPlatformsSelector } from '~/selectors/platform'
import { getPropsSelector } from './utils'

const getPlayersFound = (state: Map<any, any>) =>
	state.getIn(['playersFound', 'data'])

export const getPlayersFoundSelector = createSelector(
	getPlayersFound,
	(playersFound): Array<Player> | undefined => playersFound,
)

export const getPlayersCountSelector = createSelector(
	getPlayersFound,
	(playersFound): number => playersFound?.length,
)

export const getPlayersFoundSortedSelector = createSelector(
	getPlayersFoundSelector,
	shouldShowAllPlatform,
	getPlatformsSelector,
	getPropsSelector,
	(
		playersFound,
		showAllPlatform,
		allPlatforms,
		keyToSort,
	): Array<Player> | undefined => {
		if (!playersFound) return undefined

		return sortBy(prop(keyToSort), playersFound)
			.reverse()
			.filter(player => {
				if (showAllPlatform) return true
				return (
					allPlatforms
						.find(a => player.platform === a.get('value'))
						.get('isChecked') === true
				)
			})
	},
)
