// src/components/BottomNavBar.tsx

import React from 'react'
import { Link } from 'react-router-dom'
import TravelHomeImg from '../assets/TravelHome.png'
import MyPageImg from '../assets/MyPage.png'
import Lottie from 'react-lottie'
import { UrlBookOption } from 'src/assets/lottie/LottieOptions'
import SearchIcon from '../assets/TablerSearch.png'

// 기타 필요한 아이콘 혹은 컴포넌트 임포트

const BottomNavBar: React.FC = () => {
	return (
    <div className="bottom-nav-bar fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
			<div className="flex justify-around items-center">
				<Link to="/" className="top-nav-logo">
					<img src={TravelHomeImg} alt="패스트래블" />
				</Link>
				<Link to="/mypage" className="myPage">
					<img src={MyPageImg} alt="패스트래블" />
				</Link>
        <Link to='/search'>

				<div className="text-xs text-darkGray3 flex flex-col items-center pt-1">
					<img src={SearchIcon} alt="Search" className="h-6 mb-1" />
					<div>search</div>
				</div>
          </Link>
				<div className="text-center text-xs text-darkGray3">
					<Link to="/urlbook" className="urlBook">
						<Lottie options={UrlBookOption} height={32} width={36} />
					</Link>
					<div>URL Book</div>
				</div>
			</div>
		</div>
	)
}

export default BottomNavBar
