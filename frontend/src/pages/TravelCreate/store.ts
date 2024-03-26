import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// :: Searched cities store
interface ISearchCityStore {
	searchedCities: string[]
	setSearchedCities: (searchedCities: string[]) => void
}
export const useSearchCity = create<ISearchCityStore>()(
	devtools((set) => ({
		searchedCities: [],
		setSearchedCities: (searchedCities: string[]) =>
			set(() => ({ searchedCities })),
	}))
)

// :: Selected city store
interface ISelectedCityStore {
	selectedCities: string[]
	setSelectedCities: (selectedCities: string[]) => void
}
export const useSelectedCity = create<ISelectedCityStore>()(
	devtools((set) => ({
		selectedCities: [],
		setSelectedCities: (selectedCities: string[]) =>
			set(() => ({ selectedCities })),
	}))
)
