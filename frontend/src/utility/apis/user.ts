import axios from 'axios'
// import { tokenInstance } from './axios'

export const getUserInfo = async (): Promise<UserInfo> => {
	// const userInfoRes = await tokenInstance.get('core/profile/')
	const userInfoRes = await axios.get(
		`${import.meta.env.VITE_DEPLOY_BASE_URL}/core/profile/`,
		{
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
	return userInfoRes.data
}
