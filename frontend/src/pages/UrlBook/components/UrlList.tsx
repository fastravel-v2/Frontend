// src/pages/UrlBook/components/UrlList.tsx
// 저장소별로 나눠서 저장해도 여기서 나눠서 띄워버리면 됩니다 ~

import UrlItem from './UrlItem'
import { useUrlStore } from '../store'
import TravelBus2 from '../../../assets/lottie/TravelBus2.json'
import Lottie from 'react-lottie'
// import { filter } from 'lodash'

const UrlList: React.FC = () => {
    const { urls, selectedRepositoryId } = useUrlStore((state) => ({
        urls: state.urls,
        selectedRepositoryId: state.selectedRepositoryId,
    }));

	// 이친구 그냥 url 다른 저장소에 추가해도 urls로 나오는데
	console.log('urls = ', urls)


	// 굳이 여기서 한번 더 걸러야 실시간으로 렌더링될 때 출력 안됨
	// 승질나네그냥
	const filteredUrls = urls.filter(urlEntry => urlEntry.repositoryId === selectedRepositoryId);
	
	console.log('filter = ', filteredUrls)
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
			{filteredUrls.length > 0 ? (
				filteredUrls.map((url, index) => <UrlItem key={index} index={index} {...url} />)
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