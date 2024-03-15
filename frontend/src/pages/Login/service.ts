import { postGoogleLogin, postKakaoLogin } from './api'
import { LoginTokenType } from './type'

export const getToken = async (loginType: LoginTokenType, code: string) => {
	switch (loginType) {
		case 'kakao':
			await postKakaoLogin(code)
			break
		case 'google':
			await postGoogleLogin(code)
			break
	}
}
