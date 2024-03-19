// import { tokenInstance } from 'src/utility/apis/axios'
import { LikeLocation, MyTravel } from './type'

const dummyData = {
	data: [
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: new Date('2024.12.7'),
			endDate: new Date('2024.12.7'),
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: new Date('2024.12.7'),
			endDate: new Date('2024.12.7'),
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: new Date('2024.12.7'),
			endDate: new Date('2024.12.7'),
			numOfCity: 1,
		},
		{
			travelId: 1, // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
			travelImage: '/src/assets/svgs/travelImage.svg',
			travelName: '여수 여행',
			startDate: new Date('2024.12.7'),
			endDate: new Date('2024.12.7'),
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

const dummyLikeData = {
	data: [
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: '크림 쏟아버렸던 그 곳.. 찐맛이었다. 또 가고 싶다.',
		},
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: null,
		},
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: '크림 쏟아버렸던 그 곳.. 찐맛이었다. 또 가고 싶다.',
		},
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: null,
		},
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: null,
		},
		{
			locationId: 1,
			locationImage: '/src/assets/svgs/travelImage.svg',
			locationName: '홉히',
			locationAddress: '제주 시내(제주)',
			locationMemo: null,
		},
	],
}

export const getLikeLocation = async (): Promise<LikeLocation[]> => {
	// :: after api is ready
	// const myLikeRes = await tokenInstance.post('user/like')
	// return myLikeRes.data

	return new Promise((resolve) => {
		resolve(dummyLikeData.data)
	})
}
