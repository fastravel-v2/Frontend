import { Link, useLocation, useParams } from 'react-router-dom'
import GoogleLoginBtn from './components/GoogleLoginBtn'
import KakaoLoginBtn from './components/KakaoLoginBtn'
import { useEffect } from 'react'
import { doLogin } from './service'
import { isLoginTokenType } from 'src/utility/utils/typefilter'
import ServiceLogo from './components/ServiceLogo'

const Login = () => {
	const { loginType } = useParams()
	const code = new URLSearchParams(useLocation().search).get('code')

	useEffect(() => {
		if (loginType && code && isLoginTokenType(loginType)) {
			doLogin(loginType, code)
		}
	}, [loginType])

	return (
		<section className="flex flex-col justify-center h-screen px-5">
			<ServiceLogo />
			<div className="flex flex-col items-center gap-3">
				<KakaoLoginBtn />
				<GoogleLoginBtn />
				<Link to={'/'} className="border-b-2 text-lightGray1 border-lightGray1">
					로그인 없이 둘러보기
				</Link>
			</div>
		</section>
	)
}

export default Login
