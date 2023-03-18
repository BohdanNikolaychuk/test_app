import { createSlice } from '@reduxjs/toolkit'
import { FetchGetBoards } from '../asyncAction/boards'
import { State } from '../types'

const initialState: State = {
	boards: [],
	status: 'init',
}

const BoardSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		addBoard(state, action) {
			state.boards.push(action.payload)
		},
		deleteBoard(state, action) {
			state.boards = state.boards.filter(
				element => element._id !== action.payload
			)
		},
		addTask(state, action) {
			const findBoard = state.boards.find(
				element => element._id === action.payload.board
			)

			findBoard?.tasks.push(action.payload)
		},
		deleteTask(state, action) {
			const findBoard = state.boards.find(
				element => element._id === action.payload.board
			)

			findBoard?.tasks.splice(
				findBoard?.tasks.findIndex(
					element => element._id === action.payload._id
				),
				1
			)
		},
	},
	extraReducers: builder => {
		builder

			//Fetch get all boards
			.addCase(FetchGetBoards.pending, state => {
				state.status = 'loading'
			})
			.addCase(FetchGetBoards.fulfilled, (state, action) => {
				state.status = 'success'
				state.boards = action.payload
			})
			.addCase(FetchGetBoards.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { reducer: BoardReducer, actions: BoardAction } = BoardSlice
