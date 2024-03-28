import { cityInfo } from 'src/utility/constants/city'
import { useSearchCityStore } from '../store'
import CityItem from './CityItem'

const CityList = () => {
	const { searchedCities } = useSearchCityStore()

	return (
		<ul className="flex flex-col gap-4">
			{searchedCities.length === 0 &&
				Object.values(cityInfo).map((city) => {
					return <CityItem key={`city-category-${city.id}`} cityInfo={city} />
				})}
		</ul>
	)
}

export default CityList
