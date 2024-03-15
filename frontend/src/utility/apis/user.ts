import { tokenInstance } from './axios'

export const getUserInfo = async (): Promise<UserInfo | null> => {
	const userInfoRes = await tokenInstance.get('/user')
	return userInfoRes.data
}
