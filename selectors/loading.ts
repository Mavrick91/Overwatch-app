import { createSelector } from 'reselect'
import { Map } from 'immutable'

const getPlayersFoundLoading = (state: Map<any, any>) =>
	state.getIn(['playersFound', 'loading'])

export const getPlayersFoundLoadingSelector = createSelector(
	getPlayersFoundLoading,
	(playersFoundLoading): boolean => playersFoundLoading,
)
