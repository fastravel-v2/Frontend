import { getGoogleLogin, getKakaoLogin } from './api'
import { LoginTokenType } from './type'

export const getToken = async (
	loginType: LoginTokenType,
	code: string
): Promise<'success' | 'fail'> => {
	switch (loginType) {
		case 'kakao':
			return await getKakaoLogin(code)
		case 'google':
			return await getGoogleLogin(code)
	}
}
