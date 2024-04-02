//src/pages/Main/store.ts

import create from 'zustand'
import { IRecommendationState } from './types'

// 추천 장소 목록을 관리하는 스토어
export const useRecommendationStore = create<IRecommendationState>((set) => ({
	recommendations: [],

	setRecommendations: (recommendations) => set({ recommendations }),
}))
