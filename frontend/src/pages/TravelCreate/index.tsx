import DefaultLayout from 'src/components/layout/DefaultLayout'
import SearchHeader from 'src/components/header/SearchHeader'

const TravelCreate = () => {
	// Todo: api 함수를 호출하여 검색 결과 가져오기
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
		</DefaultLayout>
	)
}

export default TravelCreate
