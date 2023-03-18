import { createAsyncThunk } from '@reduxjs/toolkit'
import { createTask, deleteTask } from '../../services/task.services'
import { BoardAction } from '../slices'

export const FetchPostTask = createAsyncThunk(
	'tasks/createTask',
	async (props: { id: string; name: string }, { dispatch }) => {
		try {
			const { id, name } = props
			const { data } = await createTask(id, name)

			dispatch(BoardAction.addTask(data.result))
		} catch (error) {}
	}
)

export const FetchDeleteTask = createAsyncThunk(
	'tasks/deleteTask',
	async (props: { _id: string }, { dispatch }) => {
		try {
			const { data } = await deleteTask(props._id)
			dispatch(BoardAction.deleteTask(data))
		} catch (error) {}
	}
)
