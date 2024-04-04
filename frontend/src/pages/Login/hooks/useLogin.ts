import { useRouter } from 'src/hooks/useRouter'
import { isLoginTokenType } from 'src/utility/utils/typefilter'
import { useEffect } from 'react'
import { getToken } from '../service'
import { LoginTokenType } from '../type'
import { getHasValidToken } from 'src/utility/apis/user'

export const useDoLogin = async (
	loginType: string | undefined,
	code: string | null
) => {
	const { routeTo } = useRouter()

	const doLogin = async (loginType: LoginTokenType, code: string) => {
		// 1. 로그인 api 요청이 성공하면, access, refresh token이 담기게 된다.
		const tokenRes = await getToken(loginType, code)
		if (tokenRes === 'fail') {
			console.error('로그인 실패')
			return
		}

		// 2. 로그인이 성공하면 설문 조사 여부에 따라 설문 조사 페이지 및 메인 페이지로 이동한다.
		const isSurvey = await getHasValidToken()
		if (!isSurvey) {
			routeTo('/survey')
			return
		}

		routeTo('/')
	}

	useEffect(() => {
		if (loginType && code && isLoginTokenType(loginType)) {
			doLogin(loginType, code)
		}
	}, [loginType])
}
