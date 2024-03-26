// UrlBook.tsx
import { useFetchDummyUrls, useUrlStore } from './store'
import { useEffect } from 'react'
import { UrlSendBtn } from './components/UrlSendBtn'
import UrlList from './components/UrlList'
// import UrlAddBtn from './components/UrlAddBtn'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import RepositoryDropdown from './components/RepositoryDropdown'
import GlobalUrlAddBtn from './components/GlobalUrlAddBtn'

export const UrlBook = () => {
	const selectedRepositoryId  = useUrlStore(state => state.selectedRepositoryId)
	useFetchDummyUrls(selectedRepositoryId)

	const fetchUrlsForRepository = useUrlStore((state) => state.fetchUrlsForRepository)

	useEffect(() => {
		if (selectedRepositoryId) {
			fetchUrlsForRepository(selectedRepositoryId)
		}
	}, [selectedRepositoryId, fetchUrlsForRepository])

	const setSelectedRepositoryId = useUrlStore(state => state.setSelectedRepositoryId); // setSelectedRepositoryId 추가

	return (
		<div className="min-h-screen bg-gray-100">
			<GlobalUrlAddBtn/>
			{/* <UrlAddBtn /> */}
			<div className='m-4 mt-4'>
                    <RepositoryDropdown // 컴포넌트로 쪼개서 두개넘겨욧~
                        selectedRepositoryId={selectedRepositoryId}
                        setSelectedRepositoryId={setSelectedRepositoryId}
                    />
			</div>
			<UrlSendBtn />
			<UrlDeleteBtn />
			<div className="p-4">
				<UrlList />
			</div>
		</div>
	)
}
