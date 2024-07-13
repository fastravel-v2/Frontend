// src/components/BottomNavBar.tsx

import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie'
import { UrlBookOption } from 'src/assets/lottie/LottieOptions'
// import TravelHomeImg from '../assets/TravelHome.png'
// import MyPageImg from '../assets/MyPage.png'
// import SearchIcon from '../assets/TablerSearch.png'
import { HiOutlineSearch } from 'react-icons/hi'
import { MainPageNavbarIcon, MyPageNavbarIcon } from 'src/assets/svgs'

// 기타 필요한 아이콘 혹은 컴포넌트 임포트

const BottomNavBar: React.FC = () => {
	return (
		<div className="bottom-nav-bar fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 pb-2">
			<div className="flex justify-around items-end">
				<NavLink
					to="/"
					className={({ isActive }: { isActive: boolean }) =>
						isActive
							? 'text-xs text-green1 flex flex-col items-center pt-1 fill-green1'
							: 'text-xs text-darkGray3 flex flex-col items-center pt-1'
					}
				>
					{/* <img src={TravelHomeImg} alt="패스트래블" /> */}
					<MainPageNavbarIcon fill="#454545" className="" />
					<p>여행 홈</p>
				</NavLink>

				<NavLink
					to="/search"
					className={({ isActive }: { isActive: boolean }) =>
						isActive
							? 'text-xs text-green1 flex flex-col items-center pt-1 fill-green1'
							: 'text-xs text-darkGray3 flex flex-col items-center pt-1'
					}
				>
					{/* <img src={SearchIcon} alt="Search" className="h-6 mb-1" /> */}
					<HiOutlineSearch size="2rem" className="text-black h-6" />
					<div>search</div>
				</NavLink>

				<NavLink
					to="/urlbook"
					className={({ isActive }: { isActive: boolean }) =>
						isActive
							? 'text-xs text-green1 flex flex-col items-center pt-1 fill-green1 '
							: 'text-xs text-darkGray3 flex flex-col items-center pt-1'
					}
				>
					<Lottie options={UrlBookOption} height={28} width={32} />
					<div>URL Book</div>
				</NavLink>

				<NavLink
					to="/mypage"
					className={({ isActive }: { isActive: boolean }) =>
						isActive
							? 'text-xs text-green1 flex flex-col items-center pt-1 fill-green1'
							: 'text-xs text-darkGray3 flex flex-col items-center pt-1'
					}
				>
					<MyPageNavbarIcon fill="#454545" className="h-8" />
					<p>내 정보</p>
				</NavLink>
			</div>
		</div>
	)
}

export default BottomNavBar
