export interface ITravelDetail {
	id: string
	info: {
		name: string
		profileImage: string | null
		startDate: string
		endDate: string
		cities: number[]
	}
	plan: IPlan
}

export interface IPlan {
	places: Record<string, IPlace>
	days: Record<string, IDay>
	dayOrder: string[]
}

interface IPlace {
	id: string
	name: string
	category: number[]
	lat: string
	long: string
}

interface IDay {
	placeIds: string[]
}
