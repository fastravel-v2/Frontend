export interface ContentTypeInfo {
	name: string
	path: string
}

export interface MyTravel {
	travelId: number // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
	travelImage: string
	travelName: string
	startDate: Date
	endDate: Date
	numOfCity: number
}
