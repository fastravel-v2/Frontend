import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { getRecommendList } from './api'
import { useEffect, useMemo } from 'react'

const categoryInfo = {
	'자연 및 야외 활동': 1,
	'스포츠 및 레저': 2,
	'문화 및 역사': 3,
	'쇼핑 및 시장': 4,
	'음식 및 식당': 5,
	'숙박 및 휴식': 6,
	'체험 및 교육': 7,
	'공연 및 엔터테인먼트': 8,
	'건축물 및 구조물': 9,
	'여행 및 관광 서비스': 10,
	기타: 11,
}

// 모든 장소 데이터에 이미지가 있는지 확인해주는 함수
const checkEveryLocationHasImage = (recommendData: RecommendItemResInfo[]) => {
	return recommendData.every(
		(recommendLocation) =>
			recommendLocation.image_url && recommendLocation.image_url?.length > 0
	)
}

export const useRecommendListQuery = () => {
	const { data } = useQuery({
		queryKey: ['recommendList', 1],
		queryFn: getRecommendList,
	})

	useEffect(() => {
		console.log(data)
	}, [data])

	const recommendsList = useMemo(() => {
		if (!data) {
			return []
		}

		return data.reduce(
			(prev: RecommendItemInfo[], locationInfo: RecommendItemResInfo) => {
				return [
					...prev,
					{
						id: locationInfo.spot_id,
						name: locationInfo.name,
						address: locationInfo.address,
						image: locationInfo.image_url,
					} as RecommendItemInfo,
				]
			},
			[] as RecommendItemInfo[]
		)
	}, [data])

	return { recommendsList }
}

// :: 받아오는 데이터에 image_url에 없다면 새롭게 데이터를 받아온다. (refresh 기능)
export const useRefreshRecommendList = (
	categoryId: number,
	isNeededRefresh: boolean
) => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	if (!isNeededRefresh) return
	queryClient.refetchQueries({ queryKey: ['recommendList', categoryId] })
}

export const useRecommendCategoryList = () => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	const everyRecommendListInfo = useMemo(() => {
		const result: Record<number, RecommendItemResInfo[]> = {}
		Object.values(categoryInfo).forEach((categoryId) => {
			result[categoryId] = []
		})

		return result
	}, [])

	const recommendListQueriesResults = useQueries({
		queries: Object.values(categoryInfo).map((categoryId) => {
			return {
				queryKey: ['recommendList', categoryId],
				queryFn: getRecommendList,
			}
		}),
	})

	useEffect(() => {
		recommendListQueriesResults.forEach((result, index) => {
			const categoryId = Object.values(categoryInfo)[index]
			if (result.data && checkEveryLocationHasImage(result.data)) {
				queryClient.refetchQueries({ queryKey: ['recommendList', categoryId] })
			} else if (result.data) {
				everyRecommendListInfo[categoryId] = result.data
			}
		})
	}, [recommendListQueriesResults, categoryInfo, queryClient])

	// :: 이미지가 있는 데이터 반환
	// - 이미지가 없는 데이터거나 데이터가 비었다면 빈 배열 반환
	const recommendListWithImage = useMemo(() => {
		if (
			Object.values(everyRecommendListInfo).some(
				(recommendList) => recommendList.length === 0
			)
		) {
			return []
		}

		const result = Object.values(everyRecommendListInfo).reduce(
			(prev: RecommendItemInfo[], recommendList: RecommendItemResInfo[]) => {
				return [
					...prev,
					...recommendList.map(
						(locationInfo: RecommendItemResInfo) =>
							({
								id: locationInfo.spot_id,
								name: locationInfo.name,
								address: locationInfo.address,
								image: locationInfo.image_url,
							} as RecommendItemInfo)
					),
				]
			},
			[] as RecommendItemInfo[]
		)

		return result
	}, [everyRecommendListInfo])

	return { recommendListWithImage }
}
