import axios from 'axios'
import { deleteByID } from '../utils'

export const createTask = (id: string, name: string) => {
	return axios.post(`http://localhost:8080/board/${id}/task`, { name })
}

export const deleteTask = (taskId: string) => {
	return axios.delete(deleteByID(taskId, 'task'))
}
