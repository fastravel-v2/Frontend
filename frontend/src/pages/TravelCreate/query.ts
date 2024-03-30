import { useQuery } from '@tanstack/react-query'
import { getTravelInfo } from './api'

export const useTravelInfoQuery = (travelId: string | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['travelProfile', travelId],
		queryFn: getTravelInfo,
		enabled: !!travelId,
	})

	return { data, isLoading }
}
