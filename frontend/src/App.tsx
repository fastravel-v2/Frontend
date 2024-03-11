import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</>
	)
}

export default App
