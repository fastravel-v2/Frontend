import axios from 'axios'
// import { instance } from 'src/utility/apis/axios'

export const getGoogleLogin = async (code: string) => {
	// await instance.get(`auth/google?code=${code}`)
	await axios.get(
		`${import.meta.env.VITE_OAUTH_BASE_URL}auth/google?code=${code}`
	)
}

export const getKakaoLogin = async (code: string) => {
	// await instance.get(`auth/kakao?code=${code}`)
	await axios.get(
		`${import.meta.env.VITE_OAUTH_BASE_URL}auth/google?code=${code}`
	)
}
