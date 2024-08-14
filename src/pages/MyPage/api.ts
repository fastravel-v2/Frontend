import { tokenInstance, tokenMultipartInstance } from 'src/utility/apis/axios'
import { LikeLocationItemRes, MyTravel } from './type'
import { NameMessageType } from './type'
// import axios from 'axios'

// :: My Travel
export const getMyTravel = async (): Promise<MyTravel[]> => {
	// :: For production api
	const myTravelRes = await tokenInstance.get('/core/travel/list')

	// :: For development api
	// const myTravelRes = await axios.get(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel/list`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return myTravelRes.data
}

export const deleteMyTravel = async (
	travelId: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	const deleteRes = await tokenInstance.delete(
		`core/travel/?planId=${travelId}`
	)

	// :: For development api
	// const deleteRes = await axios.delete(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel?planId=${travelId}`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return deleteRes.data
}

// :: Profile
export const getNameIsDuplicated = async (
	name: string
): Promise<NameMessageType> => {
	// :: For production api
	const duplicateRes = await tokenInstance.get(`core/profile/${name}/duplicate`)

	// :: For development api
	// const duplicateRes = await axios.get(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/profile/${name}/duplicate`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return duplicateRes.data.data
}

export const putUserProfile = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// :: For production api
	const editRes = await tokenMultipartInstance.put(
		'core/profile/',
		profileFormData
	)

	// :: For development api
	// const editRes = await axios.put(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/profile`,
	// 	profileFormData,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return editRes.status === 200 ? 'success' : 'fail'
}

// :: Like location
export const getLikeLocation = async (): Promise<LikeLocationItemRes[]> => {
	// :: For production api
	const myLikeRes = await tokenInstance.get('/core/my_spot/list')

	// :: For development api
	// const myLikeRes = await axios.get(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/list`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return myLikeRes.data
}

export const postLikeLocation = async (
	locationId: string,
	memoText: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	const editRes = await tokenInstance.post(`/core/my_spot/`, {
		spot_id: locationId,
		memo: memoText,
	})

	// :: For development api
	// const editRes =	await axios.post(
	// 		`${import.meta.env.VITE_CORE_BASE_URL}/my_spot`,
	// 		{ spot_id: locationId, memo: memoText },
	// 		{
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 			},
	// 			withCredentials: true,
	// 		}
	// 	)

	return editRes.status === 200 ? 'success' : 'fail'
}

export const deleteLikeLocation = async (
	locationId: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	const deleteRes = await tokenInstance.delete(`core/my_spot/${locationId}`)

	// :: For development api
	// const deleteRes = await axios.delete(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/${locationId}`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return deleteRes.status === 200 ? 'success' : 'fail'
}

// :: My Location Memo
export const getMyLocationMemoList = async (): Promise<
	LikeLocationItemRes[]
> => {
	// :: For production api
	// const myLikeRes = await tokenInstance.get('/core/my_spot/list')
	// return myLikeRes.data

	// dummy data
	return [
		{
			spotId: '1000981',
			name: '김춘수 유품전시관',
			address: '경상남도 통영시 해평5길 142-16',
			imageUrl:
				'http://tong.visitkorea.or.kr/cms/resource/25/2367625_image2_1.jpg',
			memo: '방문 시 김춘수 시인의 유품을 가까이에서 볼 수 있습니다.',
		},
		{
			spotId: '1001011',
			name: '윤이상 기념공원(도천테마파크)',
			address: '경상남도 통영시 중앙로 27',
			imageUrl:
				'http://tong.visitkorea.or.kr/cms/resource/62/1002462_image2_1.jpg',
			memo: '윤이상 선생의 유품을 볼 수 있는 멋진 공원입니다.',
		},
	]

	// :: For development api
	// const myLikeRes = await axios.get(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/my_spot/list`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )
}

export const putMyLocationMemo = async ({
	locationId,
	memoText,
}: {
	locationId: string
	memoText: string
}): Promise<'success' | 'fail'> => {
	// :: For production api
	const myLocationMemoRes = await tokenInstance.put(
		`/core/my_spot/memo?spot_id=${locationId}&memo=${memoText}`
	)

	// :: For development api
	// const myLocationMemoRes = await axios.put(
	// 	`${
	// 		import.meta.env.VITE_CORE_BASE_URL
	// 	}/my_spot/memo?spot_id=${locationId}&memo=${memoText}`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return myLocationMemoRes.status === 200 ? 'success' : 'fail'
}
