// UrlBook.tsx
import { UrlSendBtn } from './components/UrlSendBtn'
import UrlList from './components/UrlList'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import UrlAddBtn from './components/UrlAddBtn'

export const UrlBook = () => {


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
