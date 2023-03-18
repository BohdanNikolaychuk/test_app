export const BASE_URL = 'http://localhost:8080'

export const deleteByID = (id: string, typeOfValue: string) =>
	BASE_URL + `/${typeOfValue}/` + id
