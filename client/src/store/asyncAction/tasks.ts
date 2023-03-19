import { createAsyncThunk } from '@reduxjs/toolkit'
import { createTask, deleteTask } from '../../services/task.services'
import { BoardAction } from '../slices'

export const FetchPostTask = createAsyncThunk(
	'tasks/createTask',
	async (
		props: { id: string; name: string },
		{ dispatch, rejectWithValue }
	) => {
		try {
			const { id, name } = props
			const { data } = await createTask(id, name)

			dispatch(BoardAction.addTask(data.result))
			return data
		} catch (error) {
			if (error) {
				return rejectWithValue(error)
			}
		}
	}
)

export const FetchDeleteTask = createAsyncThunk(
	'tasks/deleteTask',
	async (
		props: { _id: string; board: string },
		{ dispatch, rejectWithValue }
	) => {
		try {
			dispatch(BoardAction.deleteTask(props))
			const { data } = await deleteTask(props._id)

			return data
		} catch (error) {
			if (error) {
				return rejectWithValue(error)
			}
		}
	}
)
