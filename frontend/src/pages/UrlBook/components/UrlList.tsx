//src/pages/UrlBook/components/UrlList.tsx

import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import UrlItem from './UrlItem'
import RepositoryDropdown from './RepositoryDropdown'
import { useUrlStore } from '../store'
import TravelBus2 from '../../../assets/lottie/TravelBus2.json'

const UrlList: React.FC = () => {
	const { urls, selectedRepositoryId } = useUrlStore((state) => ({
		urls: state.urls,
		selectedRepositoryId: state.selectedRepositoryId,
	}))

	// 저장소별로 필터링된 URL 목록
	const filteredUrls = urls.filter(
		(urlEntry) => urlEntry.repositoryId === selectedRepositoryId
	)

	// Lottie 애니메이션 설정
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: TravelBus2,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	// 선택한 저장소의 URL 가져오기
	const fetchUrlsForRepository = useUrlStore(
		(state) => state.fetchUrlsForRepository
	)
	useEffect(() => {
		if (selectedRepositoryId) {
			fetchUrlsForRepository(selectedRepositoryId)
		}
	}, [selectedRepositoryId, fetchUrlsForRepository])

	// 선택한 저장소 변경 시 실행될 함수
	const setSelectedRepositoryId = useUrlStore(
		(state) => state.setSelectedRepositoryId
	)

	return (
		<div>
			<div className="mx-6">
				{/* RepositoryDropdown 컴포넌트 */}
				<RepositoryDropdown
					selectedRepositoryId={selectedRepositoryId}
					setSelectedRepositoryId={setSelectedRepositoryId}
				/>
			</div>
			{filteredUrls.length > 0 ? (
				// URL 목록 출력
				filteredUrls.map((url, index) => (
					<UrlItem key={index} index={index} {...url} />
				))
			) : (
				// URL이 없을 경우
				<div className="text-center">
					<Lottie options={defaultOptions} height={260} width={300} />
					<h1 className="text-xl font-bold">삐뽀삐뽀 URL 추가 요망</h1>
				</div>
			)}
		</div>
	)
}

export default UrlList
