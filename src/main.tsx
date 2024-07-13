import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClickToComponent } from 'click-to-react-component'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>
		<ClickToComponent />
	</>
)
