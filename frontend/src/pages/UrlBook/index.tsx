// UrlBook.tsx
import UrlList from './components/UrlList'
import { UrlSendBtn } from './components/UrlSendBtn'
import UrlAddBtn from './components/UrlAddBtn'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import { useFetchDummyUrls, useUrlStore } from './store'
import RepositoryDropdown from './components/RepositoryDropdown'
import { useEffect } from 'react'

export const UrlBook = () => {
	const selectedRepositoryId  = useUrlStore(state => state.selectedRepositoryId)
	useFetchDummyUrls(selectedRepositoryId)

	const fetchUrlsForRepository = useUrlStore((state) => state.fetchUrlsForRepository)

	useEffect(() => {
		if (selectedRepositoryId) {
			fetchUrlsForRepository(selectedRepositoryId)
		}
	}, [selectedRepositoryId, fetchUrlsForRepository])


	return (
		<div className="min-h-screen bg-gray-100">
			<UrlAddBtn />
			<div className='ml-4 mt-4'>
				<RepositoryDropdown />
			</div>
			<UrlSendBtn />
			<UrlDeleteBtn />
			<div className="p-4">
				<UrlList />
			</div>
		</div>
	)
}
