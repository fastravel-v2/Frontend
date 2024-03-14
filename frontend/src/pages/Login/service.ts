import { postGoogleLogin, postKakaoLogin } from './api'

// 로그인 api 요청이 성공하면, access, refresh token이 담기게 된다.
export const doLogin = async (loginType: 'kakao' | 'google', code: string) => {
	switch (loginType) {
		case 'kakao':
			await postKakaoLogin(code)
			break
		case 'google':
			await postGoogleLogin(code)
			break
	}
}
