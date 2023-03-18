import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createBoard,
	deleteBoard,
	getAllBoards,
} from '../../services/board.services'
import { BoardAction } from '../slices'

export const FetchGetBoards = createAsyncThunk('boards/getBoards', async () => {
	try {
		const { data } = await getAllBoards()
		return data
	} catch (error) {}
})

export const FetchPostBoard = createAsyncThunk(
	'boards/createBoard',
	async (name: string, { dispatch }) => {
		try {
			const { data } = await createBoard(name)
			dispatch(BoardAction.addBoard(data.result))
		} catch (error) {}
	}
)

export const FetchDeleteBoard = createAsyncThunk(
	'boards/deleteBoard',
	async (id: string, { dispatch }) => {
		try {
			const { data } = await deleteBoard(id)
			dispatch(BoardAction.deleteBoard(id))
		} catch (error) {}
	}
)
