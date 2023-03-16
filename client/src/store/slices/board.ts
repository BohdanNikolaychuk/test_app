import { createSlice } from '@reduxjs/toolkit'
import { getBoards } from '../asyncAction/boards'

interface State {
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

const initialState: State = {
	boards: [],
	status: 'init',
}

const BoardSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getBoards.pending, state => {
				state.status = 'loading'
			})
			.addCase(getBoards.fulfilled, (state, action) => {
				state.status = 'success'
				state.boards = action.payload
			})
			.addCase(getBoards.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { reducer: BoardReducer, actions: BoardAction } = BoardSlice
