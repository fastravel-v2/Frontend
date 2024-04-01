// src/pages/UrlBook/store.ts
import { create } from 'zustand'
import { UrlStore } from './types'

export const useUrlStore = create<UrlStore>((set) => ({
	urls: [], // types.ts에서 타입 선언해놨습니다~
	completed_urls: [], // SSE로 확인하고 status:true가 된urls 저장하고싶어요~
	sendingUrls: [], // 전송 중인 URL의 ID를 저장하는 배열

	removeUrl: (urlId) =>
		set((state) => ({
			urls: state.urls.filter((url) => url.url_id !== urlId),
		})), // 특정 URL을 제거하는 로직

	setUrls: (newUrls) => {
		set(() => ({ urls: newUrls }))
	},

	addUrl: (urlItem) => {
		set((state) => ({
			urls: [...state.urls, urlItem],
		}))
	},

	addSendingUrl: (urlId) =>
		set((state) => ({ sendingUrls: [...state.sendingUrls, urlId] })),

	removeSendingUrl: (urlId) =>
		set((state) => ({
			sendingUrls: state.sendingUrls.filter((id) => id !== urlId),
		})),

	// addCompletedUrl: (urlItem) => {
	// 	set((state) => ({
	// 		completed_urls: [...state.completed_urls, urlItem],
	// 	}))
	// },

	addCompletedUrl: (urlItem) => {
		// 로그확인용
		set((state) => {
			const updatedCompletedUrls = [...state.completed_urls, urlItem]
			console.log('완료URL추가중 : ', updatedCompletedUrls)
			return { completed_urls: updatedCompletedUrls }
		})
	},

	toggleCheck: (urlId) => {
		set((state) => ({
			urls: state.urls.map((url) =>
				url.url_id === urlId ? { ...url, checked: !url.checked } : url
			),
		}))
	},

	selectAllUrls: () => {
		set((state) => ({
			urls: state.urls.map((url) => ({ ...url, checked: true })),
		}))
	},

	selectAllPendingUrls: () => {
		set((state) => ({
			urls: state.urls.map((url) => ({
				...url,
				// status가 문자열 "false"인 경우에만 checked를 true로 설정
				checked: url.status === false,
			})),
		}))
	},

	unSelectAllUrls: () => {
		set((state) => ({
			urls: state.urls.map((url) => ({ ...url, checked: false })),
		}))
	},
}))
