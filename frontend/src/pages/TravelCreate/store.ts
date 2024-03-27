import { startOfToday } from 'date-fns'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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
	selectedCities: number[]
	addSelectedCity: (selectedCity: number) => void
	removeSelectedCity: (selectedCity: number) => void
	setSelectedCities: (selectedCities: number[]) => void
}
export const useSelectedCityStore = create<ISelectedCityStore>()(
	devtools((set) => ({
		selectedCities: [] as number[],
		addSelectedCity: (selectedCity: number) =>
			set((state) => ({
				selectedCities: state.selectedCities.concat(selectedCity),
			})),
		removeSelectedCity: (selectedCity: number) => {
			set((state) => ({
				selectedCities: state.selectedCities.filter(
					(city) => city !== selectedCity
				),
			}))
		},
		setSelectedCities: (selectedCities: number[]) =>
			set(() => ({ selectedCities })),
	}))
)

interface ISelectedCityStore {
	selectedCities: number[]
	addSelectedCity: (selectedCity: number) => void
	removeSelectedCity: (selectedCity: number) => void
	setSelectedCities: (selectedCities: number[]) => void
}

interface ITravelDateStore {
	startDate: Date
	endDate: Date | null
	setStartDate: (startDate: Date) => void
	setEndDate: (endDate: Date | null) => void
	resetDate: () => void
}

export const useTravelDateStore = create<ITravelDateStore>()(
	devtools((set) => ({
		startDate: startOfToday(),
		endDate: null,
		setStartDate: (startDate) => set(() => ({ startDate })),
		setEndDate: (endDate) => set(() => ({ endDate })),
		resetDate: () =>
			set(() => ({
				startDate: startOfToday(),
				endDate: startOfToday(),
			})),
	}))
)
