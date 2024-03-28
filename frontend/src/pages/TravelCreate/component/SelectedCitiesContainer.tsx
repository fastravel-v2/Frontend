import { useSelectedCityStore } from '../store'
import CitySubmit from './CitySubmit'
import SelectedCityItem from './SelectedCityItem'

// Todo : UI CSS 개선 필요
// - ul tag의 gap 값을 직접 계산하는 방식이 아니라 이쁘게 디자인을 하는 방향으로 접근해야한다.
const SelectedCitiesContainer = () => {
	const { selectedCities } = useSelectedCityStore()

	return (
		<section className="fixed bottom-0 m-h-[180px] border-t-[1px] p-6 pb-24 border-lightGray1 w-full left-0 bg-white ">
			<ul className="flex flex-wrap gap-x-7 gap-y-4">
				{selectedCities.map((city, index) => (
					<SelectedCityItem key={`selected-city-${index}`} cityInfo={city} />
				))}
			</ul>
			<CitySubmit />
		</section>
	)
}

export default SelectedCitiesContainer
