import { GoogleLogo } from 'src/assets/svgs'
import { GOOGLE_AUTH_BASE_URL } from '../../../utility/constants/auth'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI
const GOOGLE_URL = `${GOOGLE_AUTH_BASE_URL}
						?client_id=${CLIENT_ID}
						&redirect_uri=${REDIRECT_URI}
						&response_type=code
						&scope=profile email
					`

const GoogleLoginBtn = () => {
	console.log(GOOGLE_URL)
	return (
		<a
			href={GOOGLE_URL}
			className="flex flex-row items-center self-stretch justify-center gap-2 py-4 font-bold text-black border-2 rounded border-lightGray1"
		>
			<GoogleLogo />
			<p>구글 계정으로 로그인</p>
		</a>
	)
}

export default GoogleLoginBtn
