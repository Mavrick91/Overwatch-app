import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_ENTITIES_REQUEST } from '~/store/actions/index'

function* fetchEntities(action) {
	const { name, payload, endpoint } = action

	try {
		const response: AxiosResponse = yield call(endpoint, payload)

		yield put({
			type: 'ENTITIES_SUCCESS',
			name,
			data: response.data,
		})
	} catch (err) {
		throw Error('Error: ' + err)
	}
}

function* mySaga() {
	yield takeLatest(GET_ENTITIES_REQUEST, fetchEntities)
}

export default mySaga
