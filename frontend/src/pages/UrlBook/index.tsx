// UrlBook.tsx
import { UrlSendBtn } from './components/UrlSendBtn'
import UrlList from './components/UrlList'
// import UrlAddBtn from './components/UrlAddBtn'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import GlobalUrlAddBtn from './components/GlobalUrlAddBtn'

export const UrlBook = () => {


	return (
		<div className="min-h-screen bg-gray-100">
			<GlobalUrlAddBtn/>
			{/* <UrlAddBtn /> */}
			<UrlSendBtn />
			<UrlDeleteBtn />
			<div className="p-4">
				<UrlList />
			</div>
		</div>
	)
}
