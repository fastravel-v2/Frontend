import { KakaoButtonIcon } from '../../../assets/svgs'

const KakaoLoginBtn = () => {
	return (
		<button className="flex flex-row text-black bg-yellow">
			<KakaoButtonIcon />
			<p>카카오로 로그인</p>
		</button>
	)
}

export default KakaoLoginBtn
