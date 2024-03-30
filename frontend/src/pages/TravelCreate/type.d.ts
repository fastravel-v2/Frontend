type PageType = 'city' | 'date' | 'profile'

interface CityItemInfo {
	id: number
	name: string
	children: string[]
}
