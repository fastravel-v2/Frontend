//src/pages/Main/api.ts

import axios from 'axios'
import { instance, tokenInstance } from 'src/utility/apis/axios'

const BASE_URL = 'https://j10d204.p.ssafy.io/api/core'

// 추천 장소 데이터를 가져오는 함수
export const fetchRecommendations = async () => {
	const response = await axios.get(`${BASE_URL}/recommendation/`, {
		headers: { Accept: 'application/json' },
	})
	return response.data
}

export const getRecommendationsLocation = async (
	lat: number,
	long: number
): Promise<IPlaceInfo[]> => {
	const response: { data: IPlaceInfo[] } = await tokenInstance.post(
		`core/recommendation/location`,
		{ lat, long }
	)
	// const response: {data: IPlaceInfo[]} = await tokenInstance.post(`recommendation/location`, {lat, long})
	return response.data
}
export const getRecommendationsRandom = async (): Promise<IPlaceInfo[]> => {
	const response: { data: IPlaceInfo[] } = await instance.get(
		`core/recommendation/best_list`
	)
	// const response: {data: IPlaceInfo[]} = await instance.get(`recommendation/best_list`)
	return response.data
}
