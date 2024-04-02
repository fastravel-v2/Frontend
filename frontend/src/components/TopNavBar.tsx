// src/components/TopNavBar.tsx

import React from 'react'
import { Link } from 'react-router-dom'
import NavUrlAddBtn from './NavUrlAddBtn'
import FasTravelLogo from '../assets/FasTravelLogo.png'
import CalendarIcon from '../assets/Calender.png'

const TopNavBar: React.FC = () => {
	return (
		<>
			{/* 실제 내비게이션 바 */}
			<div className="fixed top-0 left-0 right-0 bg-white py-2 px-4 flex justify-between items-center z-50">
				<Link to="/" className="flex items-center">
					<img src={FasTravelLogo} alt="FastTravel" className="h-8 mr-2" />
				</Link>
				<div className="flex items-center">
					<NavUrlAddBtn />
					<Link to="/travel/create">
						<div className="py-2 pl-4">
							<img src={CalendarIcon} alt="Calendar" className="h-6" />
						</div>
					</Link>
				</div>
			</div>

			{/* 내비게이션 바와 동일한 높이의 플레이스홀더 */}
			<div className="py-2"></div>
		</>
	)
}

export default TopNavBar
