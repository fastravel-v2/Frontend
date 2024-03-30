// src/pages/UrlBook/types.ts

export interface PlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

export interface IUrlResult {
	[key: string]: PlaceInfo[] // URL1, URL2 등 동적으로 키와 값을 가질 수 있도록 수정
}

export interface IUrlItem {
	checked: boolean
	url: string
	url_id: number
	title?: string
	description?: string
	status: string
	image?: string
}

export interface UrlStore {
	urls: IUrlItem[]
	setUrls: (newUrls: IUrlItem[]) => void
	addCompletedUrl: (urlItem: IUrlItem) => void // 완료된 URL 추가 메소드
	toggleCheck: (index: number) => void
	selectAllUrls: () => void
	unSelectAllUrls: () => void
	completed_urls: IUrlItem[] // 완료된 URL들을 저장할 배열
}
