// import { useQuery, useQueryClient } from '@tanstack/react-query'
// import { getRecommendList } from './api'
// import { useEffect, useMemo, useState } from 'react'

// // const categoryInfo = {
// // 	'자연 및 야외 활동': 1,
// // 	'스포츠 및 레저': 2,
// // 	'문화 및 역사': 3,
// // 	'쇼핑 및 시장': 4,
// // 	'음식 및 식당': 5,
// // 	'숙박 및 휴식': 6,
// // 	'체험 및 교육': 7,
// // 	'공연 및 엔터테인먼트': 8,
// // 	'건축물 및 구조물': 9,
// // 	'여행 및 관광 서비스': 10,
// // 	기타: 11,
// // }

// const checkEveryLocationHasImage = (recommendData: RecommendItemResInfo[]) => {
// 	return (
// 		recommendData.filter((recommendLocation) => recommendLocation.image_url)
// 			.length === recommendData.length
// 	)
// }

// // - 받아오는 데이터에 image_url에 없다면 새롭게 데이터를 받아온다. (refresh 기능)
// export const useRecommendCategoryList = (categoryId: number) => {
// 	const { data, isLoading } = useQuery<RecommendItemResInfo[]>({
// 		queryKey: ['recommendList', categoryId],
// 		queryFn: getRecommendList,
// 	})

// 	const recommendListWithImage = useRecommendListHasImage(data)

// 	return { recommendListWithImage, isLoading }
// }

// export const useRecommendListHasImage = (
// 	data: RecommendItemResInfo[] | undefined
// ) => {
// 	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴
// 	const [isValidData, setIsValidData] = useState(false)

// 	useEffect(() => {
// 		if (data && checkEveryLocationHasImage(data)) {
// 			setIsValidData(true)
// 		} else {
// 			setIsValidData(false)
// 		}
// 	}, [data])

// 	const recommnedListWithImage = useMemo(() => {
// 		if (!isValidData || !data) {
// 			return []
// 		}

// 		const result = data.map((locationInfo) => ({
// 			id: locationInfo.spot_id,
// 			name: locationInfo.name,
// 			address: locationInfo.address,
// 			image: locationInfo.image_url,
// 		}))

// 		return result
// 	}, [isValidData, data])
// }
