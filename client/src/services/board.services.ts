import axios from 'axios'
import { BASE_URL, deleteByID } from '../utils'

export const getAllBoards = () => {
	return axios.get(`${BASE_URL}/board`)
}

export const createBoard = (name: string) => {
	return axios.post(`${BASE_URL}/board`, { name })
}

export const deleteBoard = (id: string) => {
	return axios.delete(deleteByID(id, 'board'))
}
