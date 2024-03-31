import SearchHeader from 'src/components/header/SearchHeader'
import DefaultLayout from 'src/components/layout/DefaultLayout'
import { getSearchedLocation } from './api'
import { useSearchLocationResultStore } from './store'
import { useCallback } from 'react'

const Search = () => {
	const { setSearchResult } = useSearchLocationResultStore()

	const handleSearch = useCallback(
		async (searchText: string) => {
			const searchResult = await getSearchedLocation(searchText)
			setSearchResult(searchResult)
		},
		[setSearchResult]
	)

	return (
		<DefaultLayout>
			<SearchHeader
				placeHolder="여행지를 검색해주세요."
				handleSearch={handleSearch}
			/>
		</DefaultLayout>
	)
}

export default Search
