import { Router as RemixRouter } from '@remix-run/router/dist/router'
import { createBrowserRouter } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import LikeLocationInfo from './pages/MyPage/components/myPageContent/likeLocation/LikeLocationInfo'
import MyTravelInfo from './pages/MyPage/components/myPageContent/myTravel/MyTravelInfo'
import Alarm from './pages/Alerm'
import Search from './pages/Search'
import AddPlace from './pages/Search/AddPlace'
import LocationDetail from './pages/LocationDetail'
import NotFound from './pages/NotFound'
import { UrlBook } from './pages/UrlBook'
import EditMyPage from './pages/MyPage/EditMyPage'
import { ContentTypeInfo } from './pages/MyPage/type'
import Survey from './pages/Survey'
import Chat from './pages/Chat'
import TravelDetail from './pages/TravelDetail'
import TravelCreate from './pages/TravelCreate'
import UrlResult from './pages/UrlBook/components/UrlResult'

// Router와 관련된 데이터를 관리하는 객체의 타입
interface IRouterBase {
	path: string // 페이지 경로
	element: React.ReactNode // 페이지 엘리먼트
	label: string
	headerText?: string
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
	// Route for OAuth login
	{
		path: '/login/:loginType',
		element: <Login />,
		label: 'login',
	},
	{
		path: '/survey',
		element: <Survey />,
		label: 'survey',
	},
	{
		path: '/mypage',
		element: <MyPage />,
		label: 'mypage',
		children: [
			{
				path: '',
				element: <MyTravelInfo />,
				label: 'myTravelInfo',
				headerText: '내 여행',
			},
			{
				path: 'like',
				element: <LikeLocationInfo />,
				label: 'likeLocationInfo',
				headerText: '내 여행지',
			},
		],
	},
	{
		path: '/mypage/edit',
		element: <EditMyPage />,
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
	{
		path: '/travel/create',
		element: <TravelCreate />,
		label: 'travelCreate',
	},
	{
		path: '/travel/edit/:travelId',
		element: <TravelCreate />,
		label: 'travelEdit',
	},
	{
		path: '/travel/:id',
		element: <TravelDetail />,
		label: 'travelDetail',
	},
	{
		path: '/location/:id',
		element: <LocationDetail />,
		label: 'locationDetail',
	},
	{
		path: '/chat',
		element: <Chat />,
		label: 'chat',
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

export const myPageHeaderData: ContentTypeInfo[] = routerData.reduce(
	(prev, router) => {
		if (router.label !== 'mypage') return [...prev]

		let headerData

		if (router.children) {
			headerData = router.children
				.filter((child) => !!child.headerText) // path와 headerText가 있는 child 만 사용하겠다.
				.map((child) => {
					return {
						name: child.headerText,
						path: child.path,
					} as ContentTypeInfo
				})
			return [...headerData]
		}

		return [...prev]
	},
	[] as ContentTypeInfo[]
)

export default router
