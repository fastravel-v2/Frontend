import { ReactNode } from 'react'
import BottomNavBar from '../BottomNavBar'

interface IDefaultLayoutProps {
	children: ReactNode
}

/* 컨텐츠가 많아짐에 	 width를 넘어가는 문제 해결을 위한 max-width 지정 */
const NavbarLayout = ({ children }: IDefaultLayoutProps) => {
	return (
		<div className="relative pb-16 ">
			{children}
			<BottomNavBar />
		</div>
	)
}

export default NavbarLayout
