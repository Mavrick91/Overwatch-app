import { fromJS, Map } from 'immutable'

type ActionType = {
	type: string
	name: string
	data: any
}

const initialState = fromJS({
	platforms: {
		loading: false,
		error: null,
		data: [
			{ text: 'pc', value: 'pc', isChecked: false },
			{ text: 'playstation 4', value: 'psn', isChecked: false },
			{ text: 'xbox one', value: 'xbl', isChecked: false },
			{ text: 'nintendo switch', value: 'nintendo-switch', isChecked: false },
		],
	},
})

export default (state: Map<any, any> = initialState, action: ActionType) => {
	if (action.type.endsWith('SUCCESS') || action.type.includes('UPDATE')) {
		return state
			.setIn([action.name, 'data'], action.data)
			.setIn([action.name, 'loading'], false)
			.setIn([action.name, 'error'], null)
	}
	if (action.type.endsWith('REQUEST')) {
		return state
			.setIn([action.name, 'data'], null)
			.setIn([action.name, 'loading'], true)
			.setIn([action.name, 'error'], null)
	}
	return state
}
