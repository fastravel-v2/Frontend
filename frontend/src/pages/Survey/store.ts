import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface SurveyItemsStoreType {
	surveyItems: SurveyItemInfo[]
	setSurveyItem: (newItems: SurveyItemInfo[]) => void
	addSurveyItem: (newItem: SurveyItemInfo) => void
	removeSurveyItem: (id: string) => void
}

export const useSurveyItems = create<SurveyItemsStoreType>()(
	devtools((set) => ({
		surveyItems: [],
		setSurveyItem: (newItems: SurveyItemInfo[]) =>
			set((state) => ({ surveyItems: [...state.surveyItems, ...newItems] })),
		addSurveyItem: (newItem: SurveyItemInfo) =>
			set((state) => ({ surveyItems: [...state.surveyItems, newItem] })),
		removeSurveyItem: (id: string) =>
			set((state) => ({
				surveyItems: state.surveyItems.filter((item) => item.id !== id),
			})),
	}))
)
