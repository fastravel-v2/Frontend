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

// Todo: setDate할 때, startOfDay를 사용하는 부분은 store에 setEndDate와 setStartDate 하는 쪽으로 옮겨서 처리하는 것이 좋을 것 같다.
// Todo: 지금은 store 로직이랑 관련이 적은 부분에 startOfDay를 사용하고 있는데, store로직에 startOfDay를 사용하는 것이 더 좋을 것 같다.
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
