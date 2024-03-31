import SearchHeader from 'src/components/header/SearchHeader'
import DefaultLayout from 'src/components/layout/DefaultLayout'

const Search = () => {
	const handleSearch = async (searchText: string) => {
		console.log(searchText)
	}

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
