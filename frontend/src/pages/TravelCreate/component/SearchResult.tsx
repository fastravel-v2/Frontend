import { useSelectedCityStore } from '../store'
import CityList from './CityList'

// Todo : UI CSS 개선 필요
// - section tag의 mb 값을 직접 계산하는 방식이 아니라 이쁘게 디자인을 하는 방향으로 접근해야한다.

const SearchResult = () => {
	const { selectedCities } = useSelectedCityStore()
	const setBottomMargin = () => {
		const numOfCity = selectedCities.length

		if (numOfCity === 0) {
			return 'mb-24'
		} else if (numOfCity <= 5) {
			return 'mb-[200px]'
		} else if (numOfCity <= 10) {
			return 'mb-[286px]'
		} else if (numOfCity <= 15) {
			return 'mb-[372px]'
		} else {
			return 'mb-[458px]'
		}
	}

	return (
		<section className={`mt-16 ${setBottomMargin()}`}>
			<h1 className="mt-6 text-2xl font-bold mb-7">도시 선택하기</h1>
			<CityList />
		</section>
	)
}

export default SearchResult
