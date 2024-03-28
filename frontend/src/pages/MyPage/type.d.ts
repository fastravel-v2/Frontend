export type NameMessageType =
	| 'empty'
	| 'tooLong'
	| 'invalidChar'
	| 'duplicate'
	| 'loading'
	| 'valid'
export interface ContentTypeInfo {
	name: string
	path: string
}

// TODO: endDate는 null일 수 있기 때문에 처리 필요
export type TravelType = 'past' | 'present' | 'future'
export interface MyTravel {
	planId: number // 여행 상세 일정이나 url 상세 정보로 들억가기 위한 정보
	planImage: string
	planName: string
	startDate: string
	endDate: string
	numOfCity: number
}

export interface LikeLocation {
	locationId: number
	locationImage: string
	locationName: string
	locationAddress: string
	locationMemo: string | null
}
