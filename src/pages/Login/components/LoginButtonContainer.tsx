// import { Link } from 'react-router-dom'
import GoogleLoginBtn from './GoogleLoginBtn'
import KakaoLoginBtn from './KakaoLoginBtn'

const LoginButtonContainer = () => {
	return (
		<div className="flex flex-col items-center gap-3">
			<KakaoLoginBtn />
			<GoogleLoginBtn />
			{/* <Link to={'/'} className="border-b-2 text-lightGray1 border-lightGray1">
				로그인 없이 둘러보기
			</Link> */}
		</div>
	)
}

export default LoginButtonContainer
