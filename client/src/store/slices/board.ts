import { createSlice } from '@reduxjs/toolkit'
import { FetchDeleteTask, FetchPostTask } from '../asyncAction'
import { FetchDeleteBoard, FetchGetBoards } from '../asyncAction/boards'
import { State } from '../types/types'

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
		sortingTask(state, action) {
			const findBoard = state.boards.find(
				element => element._id === action.payload._id
			)
			if (!action.payload.sortBy) {
				findBoard?.tasks.sort((a, b) => {
					if (new Date(a.createdAt) < new Date(b.createdAt)) {
						return 1
					}
					if (new Date(b.createdAt) < new Date(a.createdAt)) {
						return -1
					}
					return 0
				})
			} else {
				findBoard?.tasks
					.sort((a, b) => {
						if (new Date(a.createdAt) < new Date(b.createdAt)) {
							return 1
						}
						if (new Date(b.createdAt) < new Date(a.createdAt)) {
							return -1
						}
						return 0
					})
					.reverse()
			}
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

			//delete board

			.addCase(FetchDeleteBoard.pending, state => {
				state.status = 'loading'
			})
			.addCase(FetchDeleteBoard.fulfilled, (state, action) => {
				state.status = 'success'
			})
			.addCase(FetchDeleteBoard.rejected, state => {
				state.status = 'error'
			})

			//delete task

			.addCase(FetchDeleteTask.pending, state => {
				state.status = 'loading'
			})

			.addCase(FetchDeleteTask.fulfilled, state => {
				state.status = 'success'
			})
			.addCase(FetchDeleteTask.rejected, state => {
				state.status = 'error'
			})

			//create task

			.addCase(FetchPostTask.pending, state => {
				state.status = 'loading'
			})

			.addCase(FetchPostTask.fulfilled, state => {
				state.status = 'success'
			})
			.addCase(FetchPostTask.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { reducer: BoardReducer, actions: BoardAction } = BoardSlice
