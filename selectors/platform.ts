import { createSelector } from 'reselect'
import { List, Map } from 'immutable'

const getPlatforms = (state: Map<any, any>) =>
	state.getIn(['platforms', 'data'])

export const getPlatformsSelector = createSelector(
	getPlatforms,
	(platforms): List<Map<string, string | boolean>> => platforms,
)

export const shouldShowAllPlatform = createSelector(
	getPlatformsSelector,
	(platforms): boolean =>
		!!(platforms.findIndex(p => p.get('isChecked') === true) === -1),
)
