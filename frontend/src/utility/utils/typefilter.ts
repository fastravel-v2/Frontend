import { LoginTokenType } from 'src/pages/Login/type'

export const isLoginTokenType = (
	loginType: string
): loginType is LoginTokenType => {
	if (loginType === 'google' || loginType === 'kakao') {
		return true
	}
	return false
}
