import Profile from './components/Profile'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { useRouter } from 'src/hooks/useRouter'
import DefaultLayout from 'src/components/layout/DefaultLayout'
import MyPageHeader from 'src/components/header/MyPageHeader'
import MyPageContent from './components/myPageContent/MyPageContent'
import { myPageHeaderData } from 'src/router'
import NavbarLayout from 'src/components/layout/NavbarLayout'

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

	// :: NavigationHeader data

	// :: Rendering
	return (
		<DefaultLayout>
			<NavbarLayout>
				<MyPageHeader menu={headerMenu} func={headerFunc} />

				<Profile />
				<MyPageContent headerData={myPageHeaderData} />
				{/* <div className="sticky top-20">sticky sticky</div> */}
				{/* <div className="h-80">height for sticky</div> */}
			</NavbarLayout>
		</DefaultLayout>
	)
}

export default MyPage
