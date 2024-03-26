// src/UrlBook/components/UrlList.tsx
// 저장소별로 나눠서 저장해도 여기서 나눠서 띄워버리면 됩니다 ~

import UrlItem from './UrlItem'
import { useUrlStore } from '../store'
import TravelBus2 from '../../../assets/lottie/TravelBus2.json'
import Lottie from 'react-lottie'

const UrlList: React.FC = () => {
	const urls = useUrlStore((state) => state.urls)

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: TravelBus2, // Lottie 애니메이션 데이터
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div>
			{urls.length > 0 ? (
				urls.map((url, index) => <UrlItem key={index} index={index} {...url} />)
			) : (
				<div className="text-center py-12">
					<Lottie options={defaultOptions} height={300} width={300} />
					<h1 className="text-xl font-bold">삐뽀삐뽀 URL 추가 요망</h1>
				</div>
			)}
		</div>
	)
}

export default UrlList