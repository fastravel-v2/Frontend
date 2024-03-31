import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UrlList from './components/UrlList'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import UrlAddBtn from './components/UrlAddBtn'
import UrlUpdater from './components/UrlUpdater'
import SelectAllButton from './components/SelectAllBtn'
import UnselectAllButton from './components/UnselectAllButton'
import DummyResultButton from './components/UrlResusltDummyBtn'
import UrlSendButton from './components/UrlSendBtn'
import useUrlBook from './hooks/useUrlBook' // 가정: 이 훅에서 urls 상태와 countCheckedUrls 함수를 제공한다고 가정

const queryClient = new QueryClient()

export const UrlBook = () => {
	const { urls, countCheckedUrls } = useUrlBook()
	const checkedCount = countCheckedUrls()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-gray-100">
				<UrlUpdater />
				<UrlAddBtn />
				<div className="flex justify-between mt-2">
					{checkedCount > 0 && (
						<React.Fragment>
							<DummyResultButton />
							<UrlSendButton />
						</React.Fragment>
					)}
					{urls.length > 0 && (
						<div className="ml-auto">
							{checkedCount === 0 ? <SelectAllButton /> : <UnselectAllButton />}
						</div>
					)}
				</div>
				<UrlDeleteBtn />
				<div className="p-4">
					<UrlList />
				</div>
			</div>
		</QueryClientProvider>
	)
}
