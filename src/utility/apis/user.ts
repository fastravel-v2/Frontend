import axios from 'axios'
// import { tokenInstance } from './axios'

export const getHasValidToken = async (): Promise<boolean> => {
	// const checkTokenRes = await tokenInstance.get('core/profile/')
	const checkTokenRes = await axios.get(
		`${import.meta.env.VITE_DEPLOY_BASE_URL}/core/profile/`,
		{
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)

	return checkTokenRes.data.isServey
}

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

export const getUserLogout = async (): Promise<'success' | 'fail'> => {
	// const logoutRes = await tokenInstance.get('auth/logout/')

	const logoutRes = await axios.get(
		`${import.meta.env.VITE_DEPLOY_BASE_URL}/auth/logout`,
		{
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)

	return logoutRes.status === 200 ? 'success' : 'fail'
}
