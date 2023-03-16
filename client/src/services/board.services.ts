import axios from 'axios'

export const getAllBoards = () => {
	return axios.get('http://localhost:8080/board')
}
