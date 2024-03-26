import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// :: Bucket Detail
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
