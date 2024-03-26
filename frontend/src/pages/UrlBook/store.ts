// src/pages/UrlBook/store.ts
import { create } from 'zustand'
import { fetchUrls } from 'src/pages/UrlBook/dummyData/urlDummy'
import { useEffect } from 'react'

export interface UrlItem {
	checked: boolean
	url: string
}

interface UrlStore {
	urls: UrlItem[]
	toggleCheck: (index: number) => void
	addUrl: (url: string) => void // Modify the type of newUrl parameter
	addUrls: (urls: string[]) => void // 한번에 urls만들어서 렌더링
	deleteCheckedUrls: () => void
	selectAllUrls: () => void
	unSelectAllUrls: () => void

	// asd: string;
	selectedRepositoryId: string
	setSelectedRepositoryId: (repositoryId: string) => void
	fetchUrlsForRepository: (repositoryId: string) => Promise<void>
	///
}

export const useUrlStore = create<UrlStore>((set) => ({
	urls: [],

	// asd: 'asdasd',
	selectedRepositoryId: '',
	setSelectedRepositoryId: (repositoryId) =>
		set(() => ({ selectedRepositoryId: repositoryId })),
	fetchUrlsForRepository: async (repositoryId) => {
		const urls = await fetchUrls(repositoryId)
		set(() => ({
			urls: urls.map((entry) => ({ url: entry.url, checked: false })),
		}))
	},
	///

	toggleCheck: (index) => {
		set((state) => {
			const updatedUrls = state.urls.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			)
			// console.log("Checked Items:", updatedUrls.filter(item => item.checked).map(item => item.url));
			// console.log("asd:", state.asd)
			return {
				urls: updatedUrls,
				// asd: state
			}
		})
	},

	addUrl: (url) => {
		set((state) => ({
			urls: [...state.urls, { url, checked: false }],
		}))
	},

	addUrls: (urls: string[]) => {
		set(() => ({
			urls: urls.map((url) => ({ url, checked: false })),
		}))
	},

	deleteCheckedUrls: () => {
		set((state) => ({
			urls: state.urls.filter((item) => !item.checked),
		}))
	},

	selectAllUrls: () => {
		set((state) => ({
			urls: state.urls.map((url) => ({ ...url, checked: true })),
		}))
	},

	unSelectAllUrls: () => {
		set((state) => ({
			urls: state.urls.map((url) => ({ ...url, checked: false })),
		}))
	},
}))

// 더미 데이터를 가져와서 store에 추가하는 코드
// useEffect를 사용하여 컴포넌트가 렌더링될 때 한 번만 실행됩니다.
export const useFetchDummyUrls = (repositoryId: string) => {
	// repositoryId 인자 추가
	const addUrls = useUrlStore((state) => state.addUrls) // addUrls 함수 참조

	useEffect(() => {
		const fetchData = async () => {
			// 비동기 함수 정의
			try {
				const urlEntries = await fetchUrls(repositoryId) // 수정: repositoryId 인자 전달
				const urls = urlEntries.map((entry) => entry.url)
				addUrls(urls) // URL 문자열 배열만 전달
			} catch (error) {
				console.error('Error fetching URLs:', error)
			}
		}

		fetchData() // 비동기 함수 호출
	}, [repositoryId, addUrls]) // 의존성 배열에 repositoryId 추가
}
