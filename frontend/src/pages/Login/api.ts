import { instance } from 'src/utility/apis/axios'

export const getGoogleLogin = async (code: string) => {
	await instance.get(`auth/google?code=${code}`)
}

export const getKakaoLogin = async (code: string) => {
	await instance.get(`auth/kakao?code=${code}`)
}
