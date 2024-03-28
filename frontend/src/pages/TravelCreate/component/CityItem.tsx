import { DefaultLocation } from 'src/assets/svgs'
import { useSelectedCityStore } from '../store'
import { useMemo } from 'react'

interface CityItemInfo {
	id: number
	name: string
	children: string[]
}

interface CityItemProps {
	cityInfo: CityItemInfo
}
const CityItem = ({ cityInfo }: CityItemProps) => {
	const { selectedCities, addSelectedCity, removeSelectedCity } =
		useSelectedCityStore()

	const isSelected = useMemo(
		() => selectedCities.includes(cityInfo.id),
		[selectedCities, cityInfo.id]
	)

	const handleStoreAndRemoveCity = () => {
		console.log('city clicked', cityInfo)
		if (isSelected) {
			console.log('no selected')
			removeSelectedCity(cityInfo.id)
		} else {
			console.log('selected')
			addSelectedCity(cityInfo.id)
		}
	}

	return (
		<li className="flex items-center">
			<div className="flex grow">
				<DefaultLocation className="mr-4 rounded-full w-14 h-14" />
				<div className="flex flex-col justify-center">
					<p key={`city-${0}`}>{cityInfo.name}</p>
				</div>
			</div>
			<button onClick={handleStoreAndRemoveCity}>
				{isSelected ? '취소' : '선택'}
			</button>
		</li>
	)
}

export default CityItem
