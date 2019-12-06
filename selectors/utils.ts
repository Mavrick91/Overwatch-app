import { createSelector } from 'reselect'

export const getPropsSelector = createSelector(
	(_, props) => props,
	(props): any => props,
)
