import axios from 'axios'
import { BASE_URL, deleteByID } from '../utils'

export const createTask = (id: string, name: string) => {
	return axios.post(`${BASE_URL}/board/${id}/task`, { name })
}

export const deleteTask = (taskId: string) => {
	return axios.delete(deleteByID(taskId, 'task'))
}
