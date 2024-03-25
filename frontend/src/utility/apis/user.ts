import { tokenInstance } from './axios'

export const getUserInfo = async (): Promise<UserInfo> => {
	const userInfoRes = await tokenInstance.get('/profile')
	return userInfoRes.data
}
