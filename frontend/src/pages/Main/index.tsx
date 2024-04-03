//src/pages/Main/index.tsx

import TopNavBar from 'src/components/TopNavBar'
import RecommendSection from './components/RecommendSection'
import BottomNavBar from 'src/components/BottomNavBar'
import RecommendLocation from './components/RecommendLocation'
import RecommendationRandom from './components/RecommendationRandom'

const Main = () => {
	return (
		<div className="flex flex-col min-h-screen pt-9 pb-16 px-5">
			{/* 바텀 바 높이에 맞춰서 padding-bottom 조정 */}
			<TopNavBar />
			<h1 className="text-4xl">Main Page</h1>
			<hr />
			<h3 className="text-lg font-bold text-black mb-3">추천 여행지</h3>
			<RecommendSection />
			<RecommendLocation />
			<RecommendationRandom />
			<BottomNavBar />
		</div>
	)
}

export default Main
