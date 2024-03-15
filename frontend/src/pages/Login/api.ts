import { instance } from 'src/utility/apis/axios'

export const postGoogleLogin = async (code: string) => {
	await instance.post('oauth/google', { code })
}

export const postKakaoLogin = async (code: string) => {
	await instance.post('oauth/kakao', { code })
}
