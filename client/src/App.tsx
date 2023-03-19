import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { FetchGetBoards } from './store/asyncAction'
import { useAppDispatch } from './store/hooks/redux.hook'
function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(FetchGetBoards())
	}, [])

	return <RouterProvider router={router}></RouterProvider>
}

export default App
