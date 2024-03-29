//src/pages/UrlBook/store.ts

import { create } from 'zustand'
import axios from 'axios'
import fetchUrlInfo from './utils/fetchUrlInfo'

export interface UrlItem {
	checked: boolean
	url: string
	url_id: number
	title?: string // URL의 제목
	description?: string // URL의 설명
	image?: string // URL의 이미지
}

interface UrlStore {
	urls: UrlItem[]
	toggleCheck: (index: number) => void
	selectAllUrls: () => void
	unSelectAllUrls: () => void
	deleteCheckedUrls: () => void
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
					},
				}
			)
			const urls = response.data

			// 각 URL에 대한 세부 정보를 가져옵니다.
			const detailedUrls = await Promise.all(
				urls.map(async (item: UrlItem) => {
					const details = await fetchUrlInfo(item.url_id)
					return {
						...item,
						title: details.title, // URL 제목
						description: details.description, // URL 설명
						image: details.image, // URL 이미지
					}
				})
			)

			set({ urls: detailedUrls })
		} catch (error) {
			console.error('URL 데이터 로딩 실패:', error)
		}
	},
	toggleCheck: (index) => {
		set((state) => ({
			urls: state.urls.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			),
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
