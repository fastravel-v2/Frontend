import { create } from 'zustand'

interface IHasValidTokenStore {
	hasValidToken: boolean
	setCheckResult: (checkTokenResult: boolean) => void
}

export const useHasValidTokenStore = create<IHasValidTokenStore>((set) => ({
	hasValidToken: false,
	setCheckResult: (checkTokenResult) =>
		set({ hasValidToken: checkTokenResult }),
}))
