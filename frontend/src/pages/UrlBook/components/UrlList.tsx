import React from 'react'
import Lottie from 'react-lottie'
import { TravelBusOption } from 'src/assets/lottie/LottieOptions'
import { useUrlStore } from '../store'
import UrlItem from './UrlItem'
import { IUrlItem } from '../types'
import useFetchUrlList from '../hooks/useFetchUrlList'
import { useCheckedUrlsLogger } from '../hooks/useCheckedUrlsLoger'
import SelectAllPendingButton from './SelectAllPendingBtn'
import UnselectAllButton from './UnselectAllButton' // UnselectAllButton을 임포트합니다.

const UrlList: React.FC = () => {
	const setUrls = useUrlStore((state) => state.setUrls)
	const { urls } = useUrlStore() // useUrlStore에서 urls 상태를 직접 사용합니다.
	const { data, isLoading, isError } = useFetchUrlList()

	React.useEffect(() => {
		if (data) {
			setUrls(data)
		}
	}, [data, setUrls])

	useCheckedUrlsLogger()

	const checkedCount = urls.filter((url) => url.checked).length // 현재 선택된 URL의 개수를 계산합니다.
	const completedUrls = data?.filter((url) => url.status === 'True') || []
	const pendingUrls = data?.filter((url) => url.status === 'None') || []
	const unRecommendableUrls =
		data?.filter((url) => url.status === 'False') || []

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
							<div className="flex justify-between">
								<h2 className="text-sm text-darkGray3">완료되지 않은 URL</h2>
								{/* 하나 이상의 URL이 선택되었을 때 UnselectAllButton을 표시합니다. */}

								{checkedCount > 0 ? (
									<UnselectAllButton />
								) : (
									<SelectAllPendingButton />
								)}
							</div>
							{pendingUrls.map((url: IUrlItem, index) => (
								<UrlItem
									key={url.url_id}
									index={index}
									url_id={url.url_id}
									url={url.url}
									status={url.status}
									checked={url.checked}
									error={url.error} // error prop 추가
								/>
							))}
						</div>
					)}

					{/* 완료된 URL들 출력 */}
					{completedUrls.length > 0 && (
						<div>
							<div className="flex justify-between">
								<h2 className="text-sm text-darkGray3">완료된 URL</h2>
							</div>
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
					{/* 여기에 추천 불가능한 URL 출력 */}
					{unRecommendableUrls.length > 0 && (
						<div>
							<h2 className="text-sm text-darkGray3">
								추천 불가능한 URL이에요 😔
							</h2>
							{unRecommendableUrls.map((url: IUrlItem, index) => (
								<UrlItem
									key={url.url_id}
									index={index}
									url_id={url.url_id}
									url={url.url}
									status={url.status}
									checked={url.checked}
									error={url.error}
								/>
							))}
						</div>
					)}

					{/* 데이터가 없을 경우 */}
					{pendingUrls.length === 0 && completedUrls.length === 0 && (
						<div className="text-center">
							<Lottie options={TravelBusOption} height={260} width={300} />
							<h1 className="text-xl font-bold">삐뽀삐뽀 URL 추가 요망</h1>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default UrlList
