import { useLocation, useParams } from 'react-router-dom'

import MainLogo from './components/MainLogo'
import LoginButtonContainer from './components/LoginButtonContainer'
import { useDoLogin } from './hooks/useLogin'

const Login = () => {
	const { loginType } = useParams()
	const code = new URLSearchParams(useLocation().search).get('code')

	useDoLogin(loginType, code)

	return (
		<section className="flex flex-col justify-center h-screen px-5">
			<MainLogo />
			<LoginButtonContainer />
		</section>
	)
}

export default Login
