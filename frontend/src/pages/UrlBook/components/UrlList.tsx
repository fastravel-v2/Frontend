import React from 'react'
import Lottie from 'react-lottie'
import { travelBusOptions } from 'src/assets/lottie/LottieOptions'
import { useCheckedUrlsLogger, useUrlStore } from '../store'
import UrlItem from './UrlItem'
import { IUrlItem } from '../types'
import useFetchUrlList from '../hooks/useFetchUrlList'


const UrlList: React.FC = () => {
    const setUrls = useUrlStore((state) => state.setUrls);
    const { data, isLoading, isError } = useFetchUrlList();

	React.useEffect(() => {
		if (data) {
			setUrls(data)
		}
	}, [data, setUrls])

	useCheckedUrlsLogger()

	const completedUrls = data?.filter((url) => url.status) || []
	const pendingUrls = data?.filter((url) => !url.status) || []

	return (
		<div>
			{isLoading ? (
				<div>위잉위잉 데이터 가져오는 중 </div>
			) : isError ? (
				<div>Error occurred while fetching data.</div>
			) : (
				<>
					{/* 완료되지 않은 URL들 출력 */}
					{pendingUrls.length > 0 && (
						<div>
							<h2 className="text-sm text-darkGray3">완료되지 않은 URL</h2>
							{pendingUrls.map((url: IUrlItem, index) => (
								<UrlItem
									key={url.url_id}
									index={index}
									url_id={url.url_id}
									url={url.url}
									status={url.status}
									checked={url.checked}
								/>
							))}
						</div>
					)}

					{/* 완료된 URL들 출력 */}
					{completedUrls.length > 0 && (
						<div>
							<h2 className="text-sm text-darkGray3">완료된 URL</h2>
							{completedUrls.map((url: IUrlItem, index) => (
								<UrlItem
									key={url.url_id}
									index={index}
									url_id={url.url_id}
									url={url.url}
									status={url.status}
									checked={url.checked}
								/>
							))}
						</div>
					)}

					{/* 데이터가 없을 경우 */}
					{pendingUrls.length === 0 && completedUrls.length === 0 && (
						<div className="text-center">
							<Lottie options={travelBusOptions} height={260} width={300} />
							<h1 className="text-xl font-bold">삐뽀삐뽀 URL 추가 요망</h1>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default UrlList
