import { Router as RemixRouter } from '@remix-run/router/dist/router'
import { createBrowserRouter } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import Alarm from './pages/Alerm'
import Search from './pages/Search'
import AddPlace from './pages/Search/AddPlace'
import NotFound from './pages/NotFound'
import { UrlBook } from './pages/UrlBook'
import UrlResult from './pages/UrlBook/components/UrlResult'

// Router와 관련된 데이터를 관리하는 객체의 타입
interface IRouterBase {
	path: string // 페이지 경로
	element: React.ReactNode // 페이지 엘리먼트
	label: string
	children?: IRouterBase[]
}

// 나중에 인증과 관련된 여러 종류의 Router 설정을 위해 사용된다.
// Ex : type RouterElement = UserAccessibleRouterElement | AdminAccessibleRouterElement | NoneUserOnlyAccessibleRouterElement
type RouterElement = IRouterBase

// 라우터와 관련된 모든 데이터를 관리하는 배열
const routerData: RouterElement[] = [
	{ path: '/', element: <Main />, label: 'main' },
	{
		path: '/login',
		element: <Login />,
		label: 'login',
	},
	{
		path: '/login/:loginType',
		element: <Login />,
		label: 'login',
	},
	{
		path: '/mypage',
		element: <MyPage />,
		label: 'profile',
	},
	{
		path: '/mypage/edit',
		element: <MyPage />,
		label: 'editProfile',
	},
	{
		path: '/alarm',
		element: <Alarm />,
		label: 'alarm',
	},
	{
		path: '/search',
		element: <Search />,
		label: 'search',
	},
	{
		path: '/search/add-place',
		element: <AddPlace />,
		label: 'addPlace',
	},
	{
		path: '/urlbook',
		element: <UrlBook />,
		label: 'urlBook',
	},
	{
		path: '/urlbook/result',
		element: <UrlResult />,
		label: 'urlBook',
	},
	{ path: '*', element: <NotFound />, label: 'notFound' },
]

const router: RemixRouter = createBrowserRouter(
	routerData.map((router) => {
		return {
			path: router.path,
			element: router.element,
			children: router.children ?? router.children,
		}
	})
)

export default router
