import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import UrlItem from './UrlItem'
import TravelBus2 from '../../../assets/lottie/TravelBus2.json'
import { useUrlStore, UrlItem as UrlItemType } from '../store'
import { useQueryClient, useQuery } from 'react-query' // React Query에서 useQuery와 useQueryClient 가져오기

const UrlList: React.FC = () => {
	const { fetchUrls } = useUrlStore()
	const queryClient = useQueryClient() // queryClient 인스턴스 생성

	useEffect(() => {
		fetchUrls() // 컴포넌트가 처음 마운트될 때 fetchUrls 호출
	}, [fetchUrls]) // useEffect 의존성 배열에 fetchUrls 및 queryClient 추가

	// useQuery 훅을 사용하여 데이터를 가져오고 캐시를 업데이트합니다.
	const { data: urls, isLoading } = useQuery(
		['urls'],
		async () => {
			const response = await fetch('http://j10d204.p.ssafy.io:8000/url/list', {
				headers: {
					Accept: 'application/json',
				},
			})
			return response.json()
		},
		{
			// onSuccess 콜백을 사용하여 쿼리가 성공적으로 완료될 때마다 새로운 데이터로 캐시를 업데이트합니다.
			onSuccess: (data) => {
				queryClient.setQueryData(['urls'], data)
			},
		}
	)

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
			{isLoading ? (
				<div>Loading...</div>
			) : urls && urls.length > 0 ? (
				urls.map((url: UrlItemType, index: number) => (
					<UrlItem
						key={url.url_id}
						index={index}
						url_id={url.url_id}
						url={url.url}
						checked={url.checked}
						title={url.title || ''}
						description={url.description || ''}
						image={url.image || ''}
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
