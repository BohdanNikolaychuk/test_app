import axios from 'axios'

export const instants = axios.create({
	baseURL: 'http://localhost:8080',
})
