import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import UrlItem from './UrlItem'
import TravelBus2 from '../../../assets/lottie/TravelBus2.json'
import { useUrlStore } from '../store'

const UrlList: React.FC = () => {
	const { urls, fetchUrls } = useUrlStore()

    useEffect(() => {
        fetchUrls(); // 컴포넌트가 마운트될 때 URL 데이터를 불러옵니다.
    }, []); // 더 이상 fetchUrls를 의존성 배열에 넣을 필요가 없습니다.


	// Lottie 애니메이션 설정
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: TravelBus2,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div>
			<div className="mx-6">{/* RepositoryDropdown 관련 코드 제거됨 */}</div>
			{urls.length > 0 ? (
				urls.map((url, index) => (
					<UrlItem
						key={index}
						index={index}
						url_id={url.url_id}
						url={url.url}
						checked={url.checked}
					/>
				))
			) : (
				<div className="text-center">
					<Lottie options={defaultOptions} height={260} width={300} />
					<h1 className="text-xl font-bold">삐뽀삐뽀 URL 추가 요망</h1>
				</div>
			)}
		</div>
	)
}

export default UrlList
