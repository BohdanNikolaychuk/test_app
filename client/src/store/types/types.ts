import type { store } from '../root'

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface State {
	boards: IBoards[]

	status: 'init' | 'loading' | 'error' | 'success'
}

export interface IBoards {
	_id: string
	name: string
	createdAt: string
	updatedAt: string
	tasks: ITasks[]
}

export interface ITasks {
	_id: string
	board: string
	createdAt: string
	name: string
	updatedAt: string
}
