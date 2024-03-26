import { useQueries, useQueryClient } from '@tanstack/react-query'
import { getSurveyList } from './api'
import { useCallback, useEffect, useMemo, useState } from 'react'

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

// :: 받아오는 데이터에 image_url에 없다면 새롭게 데이터를 받아온다. (refresh 기능)
export const useRefreshsurveyList = (
	categoryId: number,
	isNeededRefresh: boolean
) => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	if (!isNeededRefresh) return
	queryClient.refetchQueries({ queryKey: ['surveyList', categoryId] })
}

export const useSurveyListQueries = () => {
	const getInitialsurveyListInfo = useCallback(() => {
		const result: Record<number, SurveyItemResInfo[]> = {}
		Object.values(categoryInfo).forEach((categoryId) => {
			result[categoryId] = []
		})

		return result
	}, [])

	const [everySurveyListInfo, setEverySurveyListInfo] = useState(
		getInitialsurveyListInfo()
	)

	// :: check current data
	useEffect(() => {
		console.log('combined data', everySurveyListInfo)
	}, [everySurveyListInfo])

	const surveyListQueriesResults = useQueries({
		queries: Object.values(categoryInfo).map((categoryId) => {
			return {
				queryKey: ['surveyList', categoryId],
				queryFn: getSurveyList,
				refetchOnWindowFocus: false,
				refetchOnMount: false,
			}
		}),
	})

	useEffect(() => {
		console.log('queries result', surveyListQueriesResults)
		surveyListQueriesResults.forEach((result, index) => {
			const categoryId = Object.values(categoryInfo)[index]
			if (result.data) {
				setEverySurveyListInfo((prev) => ({
					...prev,
					[categoryId]: result.data,
				}))
			}
		})
	}, [...surveyListQueriesResults.map((result) => result.isLoading)])

	// Todo: useQueries의 result 값은 dependency 배열에 넣어 사용하고 있는데, 이게 맞는 방법인지 확인 필요
	// Todo: Queries 중 한개의 Query가 값을 받아올 때 이 result 값이 바뀌는 것인지 확인 필요(github 코드를 확인해보자.)
	// :: 이미지가 있는 데이터 반환
	// - 이미지가 없는 데이터거나 데이터가 비었다면 빈 배열 반환
	const surveyListWithImage = useMemo(() => {
		if (
			Object.values(everySurveyListInfo).some(
				(surveyList) => surveyList.length === 0
			)
		) {
			return []
		}

		const result = Object.values(everySurveyListInfo).reduce(
			(prev: SurveyItemInfo[], surveyList: SurveyItemResInfo[]) => {
				return [
					...prev,
					...surveyList.map(
						(locationInfo: SurveyItemResInfo) =>
							({
								id: locationInfo.spot_id,
								name: locationInfo.name,
								address: locationInfo.address,
								image: locationInfo.image_url,
							} as SurveyItemInfo)
					),
				]
			},
			[] as SurveyItemInfo[]
		)

		return result
	}, [everySurveyListInfo])

	return { surveyListWithImage }
}
