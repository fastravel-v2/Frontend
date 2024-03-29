import { useQueries } from '@tanstack/react-query'
import { getSurveyList } from './api'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { categoryInfo } from 'src/utility/constants/location'

export const useSurveyListQueries = () => {
	const getInitialSurveyListInfo = useCallback(() => {
		const result: Record<string, SurveyItemResInfo[]> = {}
		Object.values(categoryInfo).forEach((categoryId) => {
			result[categoryId] = []
		})

		return result
	}, [])

	const [everySurveyListInfo, setEverySurveyListInfo] = useState(
		getInitialSurveyListInfo()
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
		const categoryIds = Object.values(categoryInfo)
		surveyListQueriesResults.forEach((result, index) => {
			const categoryId = categoryIds[index]
			console.log(categoryId, result.data)
			if (result.data) {
				setEverySurveyListInfo((prev) => ({
					...prev,
					[categoryId]: result.data ?? [],
				}))
			}
		})
	}, [...surveyListQueriesResults.map((result) => result.isFetching)])

	// Todo: useQueries의 result 값은 dependency 배열에 넣어 사용하고 있는데, 이게 맞는 방법인지 확인 필요
	// Todo: Queries 중 한개의 Query가 값을 받아올 때 이 result 값이 바뀌는 것인지 확인 필요(github 코드를 확인해보자.)
	// :: 이미지가 있는 데이터 반환
	// - 이미지가 없는 데이터거나 데이터가 비었다면 빈 배열 반환
	const surveyListWithImage = useMemo(() => {
		if (
			Object.values(everySurveyListInfo).some((surveyList) => {
				return surveyList.length === 0
			})
		) {
			return []
		}

		const result = Object.values(everySurveyListInfo).reduce(
			(prev: SurveyItemInfo[], surveyList: SurveyItemResInfo[]) => {
				console.log(surveyList)
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
