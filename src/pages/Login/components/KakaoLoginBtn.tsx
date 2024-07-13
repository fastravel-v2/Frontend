import { KAKAO_AUTH_BASE_URL } from 'src/utility/constants/auth'
import { KakaoButtonIcon } from '../../../assets/svgs'

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
const KAKAO_URL = `${KAKAO_AUTH_BASE_URL}
					?response_type=code
					&client_id=${REST_API_KEY}
					&redirect_uri=${REDIRECT_URI}
				`

const KakaoLoginBtn = () => {
	console.log(KAKAO_URL)

	return (
		<a
			href={KAKAO_URL}
			className="flex flex-row items-center self-stretch justify-center gap-2 py-4 text-base font-bold text-black rounded bg-yellow"
		>
			<KakaoButtonIcon />
			<p>카카오로 로그인</p>
		</a>
	)
}

export default KakaoLoginBtn
