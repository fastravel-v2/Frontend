//src/pages/Main/types.ts

// 장소 정보를 나타내는 인터페이스

// 추천 장소 상태를 관리하는 스토어의 상태 타입
export interface IRecommendationState {
	recommendations: IPlaceInfo[]
	setRecommendations: (recommendations: IPlaceInfo[]) => void
}
