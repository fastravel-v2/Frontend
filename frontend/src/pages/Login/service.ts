import { postGoogleLogin } from './api'

export const doLogin = async (loginType: 'kakao' | 'google', code: string) => {
	switch (loginType) {
		case 'kakao':
			break
		case 'google':
			await postGoogleLogin(code)
			break
	}
}
