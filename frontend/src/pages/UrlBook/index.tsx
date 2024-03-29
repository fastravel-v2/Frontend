import { UrlSendBtn } from './components/UrlSendBtn'
import UrlList from './components/UrlList'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import UrlAddBtn from './components/UrlAddBtn'

// QueryClientProvider 및 QueryClient import
import { QueryClient, QueryClientProvider } from 'react-query'

// QueryClient 인스턴스 생성
const queryClient = new QueryClient()

export const UrlBook = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-gray-100">
				<UrlAddBtn />
				<UrlSendBtn />
				<UrlDeleteBtn />
				<div className="p-4">
					{/* UrlList 컴포넌트 사용 */}
					<UrlList />
				</div>
			</div>
		</QueryClientProvider>
	)
}
