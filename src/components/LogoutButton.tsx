import { useRouter } from 'src/hooks/useRouter'
import { getUserLogout } from 'src/utility/apis/user'

// 유효한 토큰인지를 전역 상태로 관리하고 해당 state를 통해 라우터 프로텍션을 수행한다.
// 로그아웃 버튼을 누르면 deleteUserLogin 함수를 호출하여 로그아웃을 수행한다.
const LogoutButton = () => {
	const { routeTo } = useRouter()

	const handleLogout = async () => {
		const logoutRes = await getUserLogout()

		if (logoutRes === 'success') {
			routeTo('/login')
		}
	}
	return (
		<button
			onClick={handleLogout}
			className="fixed left-[50%] -translate-x-[50%] bottom-24 border-b-2 text-darkGray4 border-darkGray4 w-20"
		>
			로그아웃
		</button>
	)
}

export default LogoutButton
