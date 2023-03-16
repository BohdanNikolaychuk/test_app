import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { getBoards } from './store/asyncAction/boards'
import { useAppDispatch } from './store/hooks'
function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getBoards())
	}, [])

	return <RouterProvider router={router}></RouterProvider>
}

export default App
