// src/pages/UrlBook/store.ts
import { create } from 'zustand'
import axios from 'axios'
// import { fetchUrls } from './dummyData/urlDummy'

export interface UrlItem {
	checked: boolean
	url: string
	url_id: number // url_id 추가
}

interface UrlStore {
	urls: UrlItem[]
	toggleCheck: (index: number) => void
	addUrl: (url: string) => void
	addUrls: (urls: string[]) => void // 한번에 urls만들어서 렌더링
	selectAllUrls: () => void
	unSelectAllUrls: () => void
	deleteCheckedUrls: () => void
	deleteUrl: (url_id: number) => void
	fetchUrls: () => Promise<void>
}
export const useUrlStore = create<UrlStore>((set) => ({
	urls: [],
	fetchUrls: async () => {
		try {
			const response = await axios.get(
				'http://j10d204.p.ssafy.io:8000/url/list',
				{
					headers: {
						Accept: 'application/json',
						// INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
					},
				}
			)
			const data = response.data
			set({
				urls: data.map((item: UrlItem) => ({
					url: item.url,
					checked: false,
					url_id: item.url_id,
				})),
			})
		} catch (error) {
			console.error('URL 데이터 로딩 실패:', error)
		}
	},

	/// 더미더미~ 더미더미~ 더미더미~ ///
	// fetchUrls: async () => {
	// 	try {
	// 		const data = await fetchUrls()
	// 		set({
	// 			urls: data.map((item: UrlItem) => ({
	// 				url: item.url,
	// 				checked: false,
	// 				url_id: item.url_id,
	// 			})),
	// 		})
	// 	} catch (error) {
	// 		console.error('URL 데이터 로딩 실패:', error)
	// 	}
	// },
	toggleCheck: (index) => {
		set((state) => ({
			urls: state.urls.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			),
		}))
	},

	addUrl: async (url: string) => {
		try {
			const response = await axios.post(
				'http://j10d204.p.ssafy.io:8000/url/',
				null,
				{
					params: {
						target_url: url,
					},
					headers: {
						Accept: 'application/json',
						INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
					},
				}
			)

			const data = response.data
			console.log('URL 추가 성공:', data)
		} catch (error) {
			console.error('URL 추가 실패:', error)
		}
	},

	addUrls: (urls: string[]) => {
		set(() => ({
			urls: urls.map((url) => ({ url, checked: false } as UrlItem)),
		}))
	},
	deleteCheckedUrls: () => {
		set((state) => ({
			urls: state.urls.filter((item) => !item.checked),
		}))
	},

	deleteUrl: async (url_id: number) => {
		try {
			await axios.delete(
				`http://j10d204.p.ssafy.io:8000/url/?url_id=${url_id}`,
				{
					headers: {
						Accept: 'application/json',
						// 필요하다면 'internal_id': '사용자ID' 추가
					},
				}
			)
			set((state) => ({
				urls: state.urls.filter((item) => item.url_id !== url_id),
			}))
		} catch (error) {
			console.error('URL 삭제 실패:', error)
		}
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
