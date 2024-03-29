import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components'
import { Dashboard, Home } from '../pages'
import { _routes } from './_routes'

export const router = createBrowserRouter([
	{
		path: _routes.dashboard,
		element: <Layout />,
		errorElement: <> HTTP Error</>,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: '/home',
				element: <Home />,
			},
		],
	},
])
