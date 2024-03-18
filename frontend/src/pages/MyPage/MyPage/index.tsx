import Profile from '../components/Profile'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { useRouter } from 'src/hooks/useRouter'
import DefaultLayout from 'src/components/layout/DefaultLayout'
import MyPageHeader from 'src/components/header/MyPageHeader'

const MyPage = () => {
	const { routeTo } = useRouter()

	// :: Header
	const handleRightFunc = () => {
		routeTo('/mypage/edit')
	}
	const headerMenu: IMenu = {
		left: null,
		center: null,
		right: <button className="text-base text-blue1">정보 관리</button>,
	}
	const headerFunc: IMenuFunc = {
		left_func: undefined,
		right_func: handleRightFunc,
	}

	// :: Rendering
	return (
		<DefaultLayout>
			<MyPageHeader menu={headerMenu} func={headerFunc} />
			<Profile />
		</DefaultLayout>
	)
}

export default MyPage
