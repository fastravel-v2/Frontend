import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// :: Search Location Text
interface ISearchLocationTextStore {
	searchText: string
	setSearchText: (text: string) => void
}
export const useSearchLocationTextStore = create<ISearchLocationTextStore>()(
	devtools((set) => ({
		searchText: '',
		setSearchText: (text: string) => set(() => ({ searchText: text })),
	}))
)

// :: Search Location Result
// - 검색 결과를 받아오는 store
// - 이 정보를 이용해서 클릭했을 때 해당 지역들을 지도에 표시할 수 있어야 한다.
interface ISearchLocationResultStore {
	searchResult: SearchLocationInfo[]
	setSearchResult: (result: SearchLocationInfo[]) => void
}

export const useSearchLocationResultStore =
	create<ISearchLocationResultStore>()(
		devtools((set) => ({
			searchResult: [],
			setSearchResult: (result: SearchLocationInfo[]) =>
				set(() => ({ searchResult: result })),
		}))
	)
