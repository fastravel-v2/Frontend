import { useQuery } from '@tanstack/react-query'
import { getMyTravel } from './api'

export const useMyTravelListQuery = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['myTravel'],
		queryFn: getMyTravel,
	})

	return { isLoading, data }
}
