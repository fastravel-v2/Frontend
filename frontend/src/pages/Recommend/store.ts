import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface SurveyItemsStoreType {
	surveyItems: RecommendItemInfo[]
	setSurveyItem: (newItems: RecommendItemInfo[]) => void
	addSurveyItem: (newItem: RecommendItemInfo) => void
	removeSurveyItem: (id: string) => void
}
export const useSurveyItems = create<SurveyItemsStoreType>()(
	devtools((set) => ({
		surveyItems: [],
		setSurveyItem: (newItems: RecommendItemInfo[]) =>
			set((state) => ({ surveyItems: [...state.surveyItems, ...newItems] })),
		addSurveyItem: (newItem: RecommendItemInfo) =>
			set((state) => ({ surveyItems: [...state.surveyItems, newItem] })),
		removeSurveyItem: (id: string) =>
			set((state) => ({
				surveyItems: state.surveyItems.filter((item) => item.id !== id),
			})),
	}))
)
