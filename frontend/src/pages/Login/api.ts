import axios from 'axios'
// import { instance } from 'src/utility/apis/axios'

export const getGoogleLogin = async (
	code: string
): Promise<'success' | 'fail'> => {
	// await instance.get(`auth/google?code=${code}`)
	const googleRes = await axios.get(
		`${import.meta.env.VITE_DEPLOY_BASE_URL}/auth/google?code=${code}`
	)

	return googleRes.status === 200 ? 'success' : 'fail'
}

export const getKakaoLogin = async (
	code: string
): Promise<'success' | 'fail'> => {
	// await instance.get(`auth/kakao?code=${code}`)
	const kakaoRes = await axios.get(
		`${import.meta.env.VITE_DEPLOY_BASE_URL}/auth/kakao?code=${code}`
	)

	return kakaoRes.status === 200 ? 'success' : 'fail'
}
