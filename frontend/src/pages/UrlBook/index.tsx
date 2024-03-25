// UrlBook.tsx
import UrlList from './components/UrlList'
import { UrlSendBtn } from './components/UrlSendBtn'
import UrlAddBtn from './components/UrlAddBtn'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import { useFetchDummyUrls } from './store'

export const UrlBook = () => {
	useFetchDummyUrls()

	return (
		<div className="min-h-screen bg-gray-100">
			<UrlAddBtn />
			<UrlSendBtn />
			<UrlDeleteBtn />
			<div className="p-4">
				<UrlList />
			</div>
		</div>
	)
}
