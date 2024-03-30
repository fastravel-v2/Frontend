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
import { useTravelInfoQuery } from './query'
import { useParams } from 'react-router-dom'

const TravelCreate = () => {
	// :: Stores
	const { setSelectedCities } = useSelectedCityStore()
	const { setSearchedCities } = useSearchCityStore()
	const { pageType, setPageType } = useCreatingTravelPageTypeStore()
	const { setStartDate, setEndDate, resetDate } = useTravelDateStore()

	const { travelId } = useParams()
	const { data, isLoading } = useTravelInfoQuery(travelId)

	// page 나갈 때 해당 내용 초기화
	useEffect(() => {
		if (data) {
			setSelectedCities(data.cities)
			setStartDate(new Date(data.startDate))
			data.endDate && setEndDate(new Date(data.endDate))
		} else {
			setStartDate(startOfToday())
		}

		return () => {
			setSelectedCities([])
			setSearchedCities([])
			setPageType('city')
			resetDate()
		}
	}, [data])

	return (
		<DefaultLayout>
			{pageType === 'city' ? (
				<SelectCity />
			) : pageType === 'date' ? (
				<SelectDate />
			) : (
				<WriteProfile
					profileName={data?.profileName}
					profileImage={data?.profileImage}
					isLoading={isLoading}
				/>
			)}
		</DefaultLayout>
	)
}

export default TravelCreate
