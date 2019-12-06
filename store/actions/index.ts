import { AxiosResponse } from 'axios'

export const GET_ENTITIES_REQUEST = 'GET_ENTITIES_REQUEST'
export const UPDATE_LOCAL_ENTITIES = 'UPDATE_LOCAL_ENTITIES'

export const getEntities = (
	name: string,
	payload: object,
	endpoint: (any) => Promise<AxiosResponse>,
) => ({
	type: GET_ENTITIES_REQUEST,
	name,
	payload,
	endpoint,
})

export const updateLocalEntities = (name: string, data: any) => ({
	type: UPDATE_LOCAL_ENTITIES,
	name,
	data,
})
