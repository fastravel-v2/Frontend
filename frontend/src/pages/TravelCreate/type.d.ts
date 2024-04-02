type PageType = 'city' | 'date' | 'profile'

interface CityItemInfo {
	id: number
	name: string
	lat?: number
	long?: number
	children: string[]
}

interface TravelInfoRes {
	planId: number
	planName: string
	planImage: string | null
	startDate: string
	endDate: string | null
	cities: number[]
	numOfCity: number
}

interface TravelInfo {
	id: string
	profileName: string
	profileImage: string | null
	startDate: string
	endDate: string | null
	cities: CityItemInfo[]
}
