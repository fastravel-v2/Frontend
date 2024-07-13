import SearchHeader from 'src/components/header/SearchHeader'
import DefaultLayout from 'src/components/layout/DefaultLayout'
import { getSearchedLocation } from './api'
import {
	useSearchLocationResultStore,
	useSearchLocationTextStore,
} from './store'
import { useCallback } from 'react'
import NoSearchResult from './component/NoSearchResult'
import SearchResultList from './component/SearchResultList'
import NavbarLayout from 'src/components/layout/NavbarLayout'

const Search = () => {
	const { searchResult, setSearchResult } = useSearchLocationResultStore()
	const { setSearchText } = useSearchLocationTextStore()

	// :: Event Handlers
	const storeSearchedData = useCallback(
		async (searchText: string) => {
			const searchResult = await getSearchedLocation(searchText)
			console.log(searchText, searchResult)
			setSearchResult(searchResult)
		},
		[setSearchResult]
	)

	return (
		<DefaultLayout>
			<NavbarLayout>
				<SearchHeader
					placeHolder="여행지를 검색해주세요."
					setSearchText={setSearchText}
					storeSearchedData={storeSearchedData}
				/>
				{searchResult.length === 0 ? <NoSearchResult /> : <SearchResultList />}
			</NavbarLayout>
		</DefaultLayout>
	)
}

export default Search
