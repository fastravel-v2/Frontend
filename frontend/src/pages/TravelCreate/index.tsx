import { useEffect } from 'react'
import {
	useCreatingTravelPageTypeStore,
	useSearchCityStore,
	useSelectedCityStore,
} from './store'
import SelectCity from './SelectCity'
import SelectDate from './SelectDate'
import WriteProfile from './WriteProfile'

const TravelCreate = () => {
	const { setSelectedCities } = useSelectedCityStore()
	const { setSearchedCities } = useSearchCityStore()
	const { pageType, setPageType } = useCreatingTravelPageTypeStore()

	// page 나갈 때 해당 내용 초기화
	useEffect(() => {
		return () => {
			setSelectedCities([])
			setSearchedCities([])
			setPageType('city')
		}
	}, [])

	return (
		<>
			{pageType === 'city' ? (
				<SelectCity />
			) : pageType === 'date' ? (
				<SelectDate />
			) : (
				<WriteProfile />
			)}
		</>
	)
}

export default TravelCreate
