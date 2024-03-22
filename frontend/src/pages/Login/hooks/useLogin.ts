import { hasValidToken } from 'src/utility/utils/userUtil'
import { useRouter } from 'src/hooks/useRouter'
import { isLoginTokenType } from 'src/utility/utils/typefilter'
import { useEffect } from 'react'
import { getToken } from '../service'

export const useDoLogin = async (
	loginType: string | undefined,
	code: string | null
) => {
	const { routeTo } = useRouter()

	// 1. 로그인 api 요청이 성공하면, access, refresh token이 담기게 된다.
	useEffect(() => {
		if (loginType && code && isLoginTokenType(loginType)) {
			getToken(loginType, code)
		}
	}, [loginType])

	// 2. 로그인이 성공하면 메인 페이지로 이동한다.
	if (await hasValidToken()) {
		// routeTo('/')
	} else {
		routeTo('/login')
	}
}
