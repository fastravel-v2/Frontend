import { useQuery } from '@tanstack/react-query'
import { getTravelInfo } from './api'
import { useMemo } from 'react'
import { cityInfo } from 'src/utility/constants/city'

export const useTravelInfoQuery = (travelId: string | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['travelProfile', travelId],
		queryFn: getTravelInfo,
		enabled: !!travelId,
	})

	const travelData: TravelInfo | null = useMemo(() => {
		if (!data) return null

		const travelToEditData = data.find(
			(item) => item.planId === Number(travelId)
		)
		if (!travelToEditData) return null

		return {
			id: String(travelToEditData.planId),
			profileName: travelToEditData.planName,
			profileImage: travelToEditData.planImage || null,
			startDate: travelToEditData.startDate,
			endDate: travelToEditData.endDate || null,
			cities: travelToEditData.cities.map((cityId) => ({
				id: cityId,
				name: cityInfo[String(cityId)].name,
				lat: cityInfo[String(cityId)].lat,
				long: cityInfo[String(cityId)].long,
				children: cityInfo[String(cityId)].children,
			})),
		}
	}, [data, travelId])

	return { travelData, isLoading }
}
