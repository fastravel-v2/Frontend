export interface ContentTypeInfo {
	name: string
	path: string
}

export type TravelType = 'past' | 'present' | 'future'
export interface MyTravel {
	travelId: number // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
	travelImage: string
	travelName: string
	startDate: string
	endDate: string
	numOfCity: number
}
