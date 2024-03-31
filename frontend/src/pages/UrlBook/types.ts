// src/pages/UrlBook/types.ts

export interface UrlStore {
	// UrlStore에서 한번에 타입 다 불러올거얌
	urls: IUrlItem[] // 모든 URL들 store에서 반영, 관리하게
	completed_urls: IUrlItem[] // 완료된 URL들을 저장할 배열
	setUrls: (newUrls: IUrlItem[]) => void // 맨처음 urls에다가 URL들 세팅
	toggleCheck: (index: number) => void // 체크된 URL들 스토어에서 관리
	addCompletedUrl: (urlItem: IUrlItem) => void // 완료된 URL 추가 메소드
	selectAllUrls: () => void // 전부 체크 항상 렌더링하기 아까워서 사용하는곳에서 낙관적 UI로 체크박스 전부 true로 만들어버림
	unSelectAllUrls: () => void
}

export interface IUrlItem {
	// URL이 가지는 칼럼
	checked: boolean
	url_id: number
	url: string
	title?: string
	description?: string
	status: string
	image?: string
}


// export interface IPlaceInfo {
// 	spot_id: string
// 	image_url: string
// 	name: string
// 	address: string
// }

// export interface IPlaceSectionProps {
//     title: string; // 각 URL 섹션의 제목
//     places: IPlaceInfo[];
// }