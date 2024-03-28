import { getGoogleLogin, getKakaoLogin } from './api'
import { LoginTokenType } from './type'

export const getToken = async (loginType: LoginTokenType, code: string) => {
	switch (loginType) {
		case 'kakao':
			await getKakaoLogin(code)
			break
		case 'google':
			await getGoogleLogin(code)
			console.log('try google login')
			break
	}
}
