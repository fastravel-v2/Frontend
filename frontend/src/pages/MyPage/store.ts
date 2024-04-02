import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { NameMessageType } from './type'

// :: Username Message Type
interface IUserNameMessageTypeStore {
	nameStatus: NameMessageType
	setNameStatus: (nameStatus: NameMessageType) => void
}
export const useUserNameMessageTypeStore = create<IUserNameMessageTypeStore>()(
	devtools((set) => ({
		nameStatus: 'valid',
		setNameStatus: (nameStatus: NameMessageType) => set(() => ({ nameStatus })),
	}))
)
