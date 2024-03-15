import { getUserInfo } from '../apis/user'

export const hasValidToken = async (): Promise<boolean> => {
	const userInfoRes = await getUserInfo()
	return userInfoRes !== null
}
