import { useEffect } from 'react'
import {
	useCreatingTravelPageTypeStore,
	useSearchCityStore,
	useSelectedCityStore,
	useTravelDateStore,
} from './store'
import SelectCity from './SelectCity'
import SelectDate from './SelectDate'
import WriteProfile from './WriteProfile'
import DefaultLayout from 'src/components/layout/DefaultLayout'
import { startOfToday } from 'date-fns'

const TravelCreate = () => {
	const { setSelectedCities } = useSelectedCityStore()
	const { setSearchedCities } = useSearchCityStore()
	const { pageType, setPageType } = useCreatingTravelPageTypeStore()
	const { setStartDate, resetDate } = useTravelDateStore()

	// page 나갈 때 해당 내용 초기화
	useEffect(() => {
		setStartDate(startOfToday())

		return () => {
			setSelectedCities([])
			setSearchedCities([])
			setPageType('city')
			resetDate()
		}
	}, [])

	return (
		<DefaultLayout>
			{pageType === 'city' ? (
				<SelectCity />
			) : pageType === 'date' ? (
				<SelectDate />
			) : (
				<WriteProfile />
			)}
		</DefaultLayout>
	)
}

export default TravelCreate
