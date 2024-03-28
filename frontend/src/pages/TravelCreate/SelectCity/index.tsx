import DefaultLayout from 'src/components/layout/DefaultLayout'
import SearchResult from '../component/SearchResult'
import SearchHeader from 'src/components/header/SearchHeader'
import CitySubmit from '../component/CitySubmit'

const SelectCity = () => {
	// Todo: 도시 검색 함수 구현을 이용하고 검색 결과 가져오기
	// Todo: 검색 결과를 전역 저장소에 저장하기
	const handleSearch = async (searchText: string) => {
		console.log(searchText)
	}

	return (
		<DefaultLayout>
			<SearchHeader
				placeHolder="어디로 떠나시나요?"
				handleSearch={handleSearch}
			/>
			<SearchResult />
			<CitySubmit />
		</DefaultLayout>
	)
}

export default SelectCity
