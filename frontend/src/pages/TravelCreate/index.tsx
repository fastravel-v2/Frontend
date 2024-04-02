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
import { startOfDay, startOfToday } from 'date-fns'
import { useTravelInfoQuery } from './query'
import { useParams } from 'react-router-dom'

const TravelCreate = () => {
	// :: Stores
	const { setSelectedCities } = useSelectedCityStore()
	const { setSearchedCities } = useSearchCityStore()
	const { pageType, setPageType } = useCreatingTravelPageTypeStore()
	const { setStartDate, setEndDate, resetDate } = useTravelDateStore()

	const { travelId } = useParams()
	const { travelData, isLoading } = useTravelInfoQuery(travelId)

	// page 나갈 때 해당 내용 초기화
	useEffect(() => {
		if (travelData) {
			// console.log(
			// 	travelData.cities,
			// 	new Date(travelData.startDate),
			// 	travelData.endDate && new Date(travelData.endDate)
			// )
			setSelectedCities(travelData.cities)
			setStartDate(startOfDay(new Date(travelData.startDate)))
			travelData.endDate && setEndDate(startOfDay(new Date(travelData.endDate)))
		} else {
			setStartDate(startOfToday())
		}

		return () => {
			setSelectedCities([])
			setSearchedCities([])
			setPageType('city')
			resetDate()
		}
	}, [travelData])

	return (
		<DefaultLayout>
			{pageType === 'city' ? (
				<SelectCity />
			) : pageType === 'date' ? (
				<SelectDate />
			) : (
				<WriteProfile
					profileName={travelData?.profileName}
					profileImage={travelData?.profileImage}
					isLoading={isLoading}
				/>
			)}
		</DefaultLayout>
	)
}

export default TravelCreate
