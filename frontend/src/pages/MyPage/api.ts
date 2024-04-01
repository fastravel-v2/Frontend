// import { tokenInstance } from 'src/utility/apis/axios'
import { LikeLocationItemRes, MyTravel } from './type'
// import { tokenMultipartInstance } from 'src/utility/apis/axios'
import { NameMessageType } from './type'
import axios from 'axios'

// const dummyData = {
// 	data: [
// 		{
// 			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
// 			travelImage: '/src/assets/svgs/travelImage.svg',
// 			travelName: '여수 여행',
// 			startDate: '2024-03-16T19:20+01:00',
// 			endDate: '2024-03-31T19:20+01:00',
// 			numOfCity: 1,
// 		},
// 		{
// 			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
// 			travelImage: '/src/assets/svgs/travelImage.svg',
// 			travelName: '여수 여행',
// 			startDate: '2024-03-13T19:20+01:00',
// 			endDate: '2024-03-14T19:20+01:00',
// 			numOfCity: 1,
// 		},
// 		{
// 			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
// 			travelImage: '/src/assets/svgs/travelImage.svg',
// 			travelName: '여수 여행',
// 			startDate: '2024-03-01T19:20+01:00',
// 			endDate: '2024-03-02T19:20+01:00',
// 			numOfCity: 1,
// 		},
// 		{
// 			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
// 			travelImage: '/src/assets/svgs/travelImage.svg',
// 			travelName: '여수 여행',
// 			startDate: '2024-04-16T19:20+01:00',
// 			endDate: '2024-04-17T19:20+01:00',
// 			numOfCity: 1,
// 		},
// 	],
// }

// export const getMyTravel = async () => {
export const getMyTravel = async (): Promise<MyTravel[]> => {
	// :: For production api
	// const myTravelRes = await tokenInstance.get('/core/travel/list')

	// :: For development api
	const myTravelRes = await axios.get(
		`${import.meta.env.VITE_CORE_BASE_URL}/travel/list`,
		{
			headers: {
				'Content-Type': 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
			withCredentials: true,
		}
	)

	return myTravelRes.data

	// return new Promise((resolve) => {
	// 	resolve(dummyData.data)
	// })
}

// const dummyLikeData = {
// 	data: [
// 		{
// 			locationId: 1,
// 			locationImage: '/src/assets/svgs/travelImage.svg',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: '크림 쏟아버렸던 그 곳.. 찐맛이었다. 또 가고 싶다.',
// 		},
// 		{
// 			locationId: 2,
// 			locationImage: '/src/assets/svgs/travelImage.svg',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: null,
// 		},
// 		{
// 			locationId: 3,
// 			locationImage: '',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: '크림 쏟아버렸던 그 곳.. 찐맛이었다. 또 가고 싶다.',
// 		},
// 		{
// 			locationId: 4,
// 			locationImage: '',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: null,
// 		},
// 		{
// 			locationId: 5,
// 			locationImage: '/src/assets/svgs/travelImage.svg',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: null,
// 		},
// 		{
// 			locationId: 6,
// 			locationImage: '/src/assets/svgs/travelImage.svg',
// 			locationName: '홉히',
// 			locationAddress: '제주 시내(제주)',
// 			locationMemo: null,
// 		},
// 	],
// }

export const getNameIsDuplicated = async (
	name: string
): Promise<NameMessageType> => {
	// const res = await tokenInstance.post('/user/duplicate', { name })
	// return res.data

	await new Promise((resolve) => setTimeout(resolve, 2000)) // 2초 대기
	console.log(name)
	return 'valid' // 현재는 테스트를 위해 항상 valid를 반환
}

export const putUserProfile = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// const editRes = await tokenMultipartInstance.put('/user/profile', profileFormData)
	// return editRes.data

	console.log(profileFormData)
	return 'success'
}

export const deleteMyTravel = async (
	travelId: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	// const deleteRes = await tokenInstance.delete(`core/travel?planId=${travelId}`)

	// :: For development api
	const deleteRes = await axios.delete(
		`${import.meta.env.VITE_CORE_BASE_URL}/travel?planId=${travelId}`,
		{
			headers: {
				'Content-Type': 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
			withCredentials: true,
		}
	)

	return deleteRes.data
}

// :: Like location
export const getLikeLocation = async (): Promise<LikeLocationItemRes[]> => {
	// :: For production api
	// const myLikeRes = await tokenInstance.get('/core/travel/like/list')

	// :: For development api
	const myLikeRes = await axios.get(
		`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/list`,
		{
			headers: {
				'Content-Type': 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
			withCredentials: true,
		}
	)

	return myLikeRes.data

	// return new Promise((resolve) => {
	// 	resolve(dummyLikeData.data)
	// })
}

export const postLikeLocation = async (
	locationId: string,
	memoText: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	// const editRes = await tokenInstance.put(`my_spot/${locationId}`, { spot_id: locationId, memo: memoText },)
	// return editRes.data

	// :: For development api
	try {
		await axios.post(
			`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/${locationId}`,
			{ spot_id: locationId, memo: memoText },
			{
				headers: {
					'Content-Type': 'application/json',
					INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
				},
				withCredentials: true,
			}
		)

		return 'success'
	} catch (error) {
		console.log(error)
		return 'fail'
	}
}

export const deleteLikeLocation = async (
	locationId: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	// const deleteRes = await tokenInstance.delete(`core/my_spot/${locationId}`)

	// :: For development api
	try {
		await axios.delete(
			`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/${locationId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
				},
				withCredentials: true,
			}
		)

		return 'success'
	} catch (error) {
		console.log(error)
		return 'fail'
	}
}
