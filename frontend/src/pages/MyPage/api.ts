// import { tokenInstance } from 'src/utility/apis/axios'
import { MyTravel } from './type'
// import { tokenMultipartInstance } from 'src/utility/apis/axios'
import { NameMessageType } from './type'

const dummyData = {
	data: [
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: '2024-03-16T19:20+01:00',
			endDate: '2024-03-31T19:20+01:00',
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: '2024-03-13T19:20+01:00',
			endDate: '2024-03-14T19:20+01:00',
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: '2024-03-01T19:20+01:00',
			endDate: '2024-03-02T19:20+01:00',
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: '2024-04-16T19:20+01:00',
			endDate: '2024-04-17T19:20+01:00',
			numOfCity: 1,
		},
	],
}

export const getMyTravel = async (): Promise<MyTravel[]> => {
	// :: after api is ready
	// const myTravelRes = await tokenInstance.post('user/travel')
	// return myTravelRes.data

	return new Promise((resolve) => {
		resolve(dummyData.data)
	})
}

// TODO: API 연결할 때는 매개변수로 travelId를 받아서 해당 여행을 삭제하도록 수정
export const deleteMyTravel = async (): Promise<'success' | 'fail'> => {
	// :: after api is ready
	// const deleteRes = await tokenInstance.delete(`user/travel/${travelId}`)
	// return deleteRes.data

	return new Promise((resolve) => {
		resolve('success')
	})
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
