// src/pages/UrlBook/store.ts
import { useEffect } from 'react'
import { create } from 'zustand'
import { UrlStore } from './types'


export const useUrlStore = create<UrlStore>((set) => ({
	urls: [],
	completed_urls: [], // SSE로 확인하고 status:true가 된urls 저장하고싶어요~

	setUrls: (newUrls) => {
		set(() => ({ urls: newUrls }))
	},

	addCompletedUrl: (urlItem) => {
		set((state) => ({
			completed_urls: [...state.completed_urls, urlItem],
		}))
	},

	toggleCheck: (index) => {
		set((state) => ({
			urls: state.urls.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			),
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

export const useCheckedUrlsLogger = () => {
	const urls = useUrlStore((state) => state.urls)
	useEffect(() => {
		const checkedUrls = urls.filter((item) => item.checked)
		console.log('Checked URLs:', checkedUrls)
	}, [urls])
}
