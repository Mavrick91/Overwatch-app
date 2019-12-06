import axios from 'axios'

export const profilePlayerAPI = ({ playerName }) =>
	axios.get(`/en-us/search/account-by-name/${playerName}`)
