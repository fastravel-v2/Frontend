import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { doLogin } from './service'
import { isLoginTokenType } from 'src/utility/utils/typefilter'
import ServiceLogo from './components/ServiceLogo'
import LoginButtonContainer from './components/LoginButtonContainer'

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
			<LoginButtonContainer />
		</section>
	)
}

export default Login
