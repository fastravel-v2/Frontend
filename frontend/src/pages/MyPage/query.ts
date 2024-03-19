import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMyTravel, getMyTravel } from './api'

export const useMyTravelListQuery = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['myTravel'],
		queryFn: getMyTravel,
	})

	return { isLoading, data }
}

// useMutation을 사용하여 여행 삭제 로직을 수행하는 Hook
export const useDeleteTravelMutation = () => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	const { mutate, status } = useMutation({
		mutationFn: deleteMyTravel,
		onSuccess: () => {
			// 'myTravel' 쿼리 키로 캐시된 데이터를 무효화하여, 삭제 후 목록을 갱신
			queryClient.invalidateQueries({ queryKey: ['myTravel'] })
		},
	})

	return { mutate, status }
}
