import SearchResult from '../component/SearchResult'
import SearchHeader from 'src/components/header/SearchHeader'
import CitySubmit from '../component/CitySubmit'
import { useSearchCityTextStore, useSelectedCityStore } from '../store'
import SelectedCitiesContainer from '../component/SelectedCitiesContainer'

const SelectCity = () => {
	const { selectedCities } = useSelectedCityStore()
	const { setSearchCityText } = useSearchCityTextStore()

	// Todo: 도시 검색 함수 구현을 이용하고 검색 결과 가져오기
	const storeSearchedData = async (searchText: string) => {
		console.log(searchText)
	}

	return (
		<>
			<SearchHeader
				placeHolder="어디로 떠나시나요?"
				setSearchText={setSearchCityText}
				storeSearchedData={storeSearchedData}
			/>
			<SearchResult />
			{selectedCities.length > 0 ? <SelectedCitiesContainer /> : <CitySubmit />}
		</>
	)
}

export default SelectCity
