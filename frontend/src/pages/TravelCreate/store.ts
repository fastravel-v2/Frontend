import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// :: Selected city store
interface ISearchCityTextStore {
	searchCityText: string
	setSearchCityText: (searchText: string) => void
}
export const useSearchCityTextStore = create<ISearchCityTextStore>()(
	devtools((set) => ({
		searchCityText: '',
		setSearchCityText: (searchText: string) =>
			set(() => ({
				searchCityText: searchText,
			})),
	}))
)

// :: Searched cities store
interface ISearchCityStore {
	searchedCities: string[]
	setSearchedCities: (searchedCities: string[]) => void
}
export const useSearchCityStore = create<ISearchCityStore>()(
	devtools((set) => ({
		searchedCities: [],
		setSearchedCities: (searchedCities: string[]) =>
			set(() => ({ searchedCities })),
	}))
)

// :: Selected city store
interface ISelectedCityStore {
	selectedCities: CityItemInfo[]
	addSelectedCity: (selectedCity: CityItemInfo) => void
	removeSelectedCity: (cityId: number) => void
	setSelectedCities: (selectedCities: CityItemInfo[]) => void
}
export const useSelectedCityStore = create<ISelectedCityStore>()(
	devtools((set) => ({
		selectedCities: [] as CityItemInfo[],
		addSelectedCity: (selectedCity: CityItemInfo) =>
			set((state) => ({
				selectedCities: state.selectedCities.concat(selectedCity),
			})),
		removeSelectedCity: (cityId: number) => {
			set((state) => ({
				selectedCities: state.selectedCities.filter(
					(city) => city.id !== cityId
				),
			}))
		},
		setSelectedCities: (selectedCities: CityItemInfo[]) =>
			set(() => ({ selectedCities })),
	}))
)

// Selected travel date store
interface ITravelDateStore {
	startDate: Date | null
	endDate: Date | null
	setStartDate: (startDate: Date | null) => void
	setEndDate: (endDate: Date | null) => void
	resetDate: () => void
}

export const useTravelDateStore = create<ITravelDateStore>()(
	devtools((set) => ({
		startDate: null,
		endDate: null,
		setStartDate: (startDate) => set(() => ({ startDate })),
		setEndDate: (endDate) => set(() => ({ endDate })),
		resetDate: () =>
			set(() => ({
				startDate: null,
				endDate: null,
			})),
	}))
)

interface ITravelPageTypeStore {
	pageType: PageType
	setPageType: (pageType: PageType) => void
}
// ::: Page type
export const useCreatingTravelPageTypeStore = create<ITravelPageTypeStore>()(
	devtools((set) => ({
		pageType: 'city',
		setPageType: (pageType: PageType) => set(() => ({ pageType })),
	}))
)
