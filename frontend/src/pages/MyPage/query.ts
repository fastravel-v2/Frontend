import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMyTravel, getLikeLocation, getMyTravel } from './api'
import { sortDatesBasedOnCurrent } from './service'
import { useMemo } from 'react'
import { LikeLocation } from './type'

// :: My Travel List
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

export const useDeleteTravelMutation = () => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	const deleteTravelMutation = useMutation({
		mutationFn: deleteMyTravel,
		onSuccess: () => {
			// 'myTravel' 쿼리 키로 캐시된 데이터를 무효화하여, 삭제 후 목록을 갱신
			queryClient.invalidateQueries({ queryKey: ['myTravel'] })
		},
	})

	return deleteTravelMutation
}

// :: Like Location List
export const useLikeLocationListQuery = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['likeLocation'],
		queryFn: getLikeLocation,
	})

	const likeLocationList: LikeLocation[] = useMemo(() => {
		if (!data) {
			return [] as LikeLocation[]
		}

		return data.map((likeLocationInfo) => ({
			locationId: likeLocationInfo.spot_id,
			locationName: likeLocationInfo.name,
			locationAddress: likeLocationInfo.address || '',
			locationImage: likeLocationInfo.image_url || '',
			locationMemo: likeLocationInfo.memo || null,
		}))
	}, [data])
	return { isLoading, likeLocationList }
}
