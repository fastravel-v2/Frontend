import { useLocation, useParams } from 'react-router-dom'
import GoogleLoginBtn from './components/GoogleLoginBtn'
import KakaoLoginBtn from './components/KakaoLoginBtn'
import { useEffect } from 'react'
import { doLogin } from './service'
import { isLoginTokenType } from 'src/utility/utils/typefilter'

const Login = () => {
	const { loginType } = useParams()
	const code = new URLSearchParams(useLocation().search).get('code')

	useEffect(() => {
		if (loginType && code && isLoginTokenType(loginType)) {
			doLogin(loginType, code)
		}
	}, [loginType])

	return (
		<div>
			<p>Login Page</p>
			<KakaoLoginBtn />
			<GoogleLoginBtn />
		</div>
	)
}

export default Login
