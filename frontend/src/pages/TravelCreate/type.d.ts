type PageType = 'city' | 'date' | 'profile'

interface CityItemInfo {
	id: number
	name: string
	children: string[]
}

interface TravelInfo {
	id: number
	profileName: string
	profileImage: string | null
	startDate: string
	endDate: string
	cities: CityItemInfo[]
}
