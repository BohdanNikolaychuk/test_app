import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllBoards } from '../../services/board.services'

export const getBoards = createAsyncThunk('boards/getBoards', async () => {
	try {
		const { data } = await getAllBoards()

		return data
	} catch (error) {}
})
