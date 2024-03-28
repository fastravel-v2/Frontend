// import { tokenInstance } from 'src/utility/apis/axios'
import { tokenInstance } from 'src/utility/apis/axios'
import { LikeLocation, MyTravel } from './type'
// import { tokenMultipartInstance } from 'src/utility/apis/axios'
import { NameMessageType } from './type'

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
	// :: after api is ready
	const myTravelRes = await tokenInstance.get('travel/list')
	console.log(myTravelRes.data)
	return myTravelRes.data

	// return new Promise((resolve) => {
	// 	resolve(dummyData.data)
	// })
}

// TODO: API 연결할 때는 매개변수로 travelId를 받아서 해당 여행을 삭제하도록 수정
export const deleteMyTravel = async (
	travelId: string
): Promise<'success' | 'fail'> => {
	// :: after api is ready
	const deleteRes = await tokenInstance.delete(`/travel/list?id=${travelId}`)
	return deleteRes.data
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

export const getLikeLocation = async (): Promise<LikeLocation[]> => {
	// :: after api is ready
	const myLikeRes = await tokenInstance.get('travel/like/list')
	return myLikeRes.data

	// return new Promise((resolve) => {
	// 	resolve(dummyLikeData.data)
	// })
}

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

export const putMemoSave = async (
	locationId: number,
	memoText: string
): Promise<'success' | 'fail'> => {
	// const editRes = await tokenInstance.put(`/user/like/memo/${locationId}`, { memoText })
	// return editRes.data

	console.log(locationId, memoText)
	return 'success'
}

export const deleteLikeLocation = async (
	locationId: number
): Promise<'success' | 'fail'> => {
	// const deleteRes = await tokenInstance.delete(`user/like/${locationId}`)
	// return deleteRes.data

	console.log(locationId)
	return 'success'
}

export const postLikeLocation = async (
	locationId: number
): Promise<'success' | 'fail'> => {
	// const postRes = await tokenInstance.post('user/like', locationId)
	// return postRes.data

	console.log(locationId)
	return 'success'
}
