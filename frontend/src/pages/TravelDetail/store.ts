import { create } from "zustand";
import { IPlan } from "./type";

interface PlanState {
    plan: IPlan | undefined;
    setPlan: (plan: IPlan) => void;
}

const usePlanStore = create<PlanState>(
    (set) => ({
        plan: undefined,
        setPlan: (plan: IPlan) => set({plan})
    })
)

export default usePlanStore