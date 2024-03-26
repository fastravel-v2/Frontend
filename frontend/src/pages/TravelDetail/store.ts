import { create } from "zustand";
import { IPlan } from "./type";

interface PlanState {
    plan: IPlan | undefined;
    selectedPlaceIds: string[];
    setPlan: (plan: IPlan) => void;
    togglePlaceSelection: (placeId: string) => void;
    clearSelectedItems: () => void;
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
    })
)

export default usePlanStore