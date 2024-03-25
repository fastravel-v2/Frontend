import { create } from "zustand";
import { IDay, IPlace, IPlan } from "./type";

interface PlanState {
    plan: IPlan | undefined;
    selectedPlaceIds: string[];
    setPlan: (plan: IPlan) => void;
    togglePlaceSelection: (placeId: string) => void;
    clearSelectedItems: () => void;
    deleteSelectedPlaces: () => void;
}

const usePlanStore = create<PlanState>(
    (set) => ({
        plan: undefined,
        selectedPlaceIds: [],
        setPlan: (plan: IPlan) => set({plan}),
        togglePlaceSelection: (placeId) => set((state) => ({
            selectedPlaceIds: state.selectedPlaceIds.includes(placeId)
                ? state.selectedPlaceIds.filter((id) => id !==placeId)
                : [...state.selectedPlaceIds, placeId]
        })),
        clearSelectedItems: () => set({selectedPlaceIds: []}),
        deleteSelectedPlaces: () => set((state) => {
            if (!state.plan) return {}

            const updatedDays = Object.keys(state.plan.days).reduce<{[key: string]: IDay}>((acc, dayKey) => {
                const day = state.plan!.days[dayKey]
                acc[dayKey] = {...day, placeIds: day.placeIds.filter(id => !state.selectedPlaceIds.includes(id))}
                return acc
            }, {})

            const updatedPlaces = Object.keys(state.plan.places).reduce<{[key: string]: IPlace}>((acc, placeId) => {
                if (!state.selectedPlaceIds.includes(placeId)) {
                    acc[placeId] = state.plan!.places[placeId]
                }
                return acc
            }, {})

            return {
                plan: {...state.plan, days: updatedDays, places: updatedPlaces },
                selectedPlaceIds: []
            }
        })
    })
)

export default usePlanStore