import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { BoardReducer } from './slices'
const rootReducer = combineReducers({
	board: BoardReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
