import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSearchCityStore, useSelectedCityStore } from './store'

const TravelCreate = () => {
	const { setSelectedCities } = useSelectedCityStore()
	const { setSearchedCities } = useSearchCityStore()

	// page 나갈 때 해당 내용 초기화
	useEffect(() => {
		return () => {
			setSelectedCities([])
			setSearchedCities([])
		}
	}, [])
	return <Outlet />
}

export default TravelCreate
