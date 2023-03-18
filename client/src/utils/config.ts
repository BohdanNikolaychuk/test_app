export const BASE_URL = 'https://treello-clone-test-app.onrender.com/'

export const deleteByID = (id: string, typeOfValue: string) =>
	BASE_URL + `/${typeOfValue}/` + id
