// import { tokenInstance } from './axios'

const dummyUserInfo = {
	data: {
		username: '이우성',
		profileImage: '/src/assets/svgs/defaultProfile.svg',
	},
}

export const getUserInfo = async (): Promise<UserInfo> => {
	// const userInfoRes = await tokenInstance.get('/user')
	// return userInfoRes.data

	return dummyUserInfo.data
	// return null
}
