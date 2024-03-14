import { KakaoButtonIcon } from '../../../assets/svgs'

const KakaoLoginBtn = () => {
	return (
		<button className="flex flex-row items-center self-stretch justify-center gap-2 py-4 text-base font-bold text-black rounded bg-yellow">
			<KakaoButtonIcon />
			<p>카카오로 로그인</p>
		</button>
	)
}

export default KakaoLoginBtn
