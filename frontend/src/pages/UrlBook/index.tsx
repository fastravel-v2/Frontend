import UrlList from './components/UrlList'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import UrlAddBtn from './components/UrlAddBtn'
import UrlSendBtn from './components/UrlSendBtn'

// QueryClientProvider 및 QueryClient import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UrlUpdater from './components/UrlUpdater'

// QueryClient 인스턴스 생성
const queryClient = new QueryClient()

export const UrlBook = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-gray-100">
				<UrlUpdater/>
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
