import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMyTravel, getLikeLocation, getMyTravel } from './api'
import { sortDatesBasedOnCurrent } from './service'
import { useMemo } from 'react'

export const useMyTravelListQuery = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['myTravel'],
		queryFn: getMyTravel,
	})

	const sortedMyTravelList = useMemo(
		() => sortDatesBasedOnCurrent(data || []),
		[data]
	)

	return { isLoading, sortedMyTravelList }
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

export const useLikeLocationListQuery = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['likeLocation'],
		queryFn: getLikeLocation,
	})

	return { isLoading, data }
}
