import React from 'react'
import Lottie from 'react-lottie'
import { TravelBusOption } from 'src/assets/lottie/LottieOptions'
import { useUrlStore } from '../store'
import UrlItem from './UrlItem'
import { IUrlItem } from '../types'
import useFetchUrlList from '../hooks/useFetchUrlList'
import SelectAllPendingButton from './SelectAllPendingBtn'
import UnselectAllButton from './UnselectAllButton'

const UrlList: React.FC = () => {
	const setUrls = useUrlStore((state) => state.setUrls)
	const { urls } = useUrlStore()
	const { data, isLoading, isError } = useFetchUrlList()

	React.useEffect(() => {
		if (data) {
			setUrls(data)
		}
	}, [data, setUrls])

	const checkedCount = urls.filter((url) => url.checked).length
	const completedUrls = data?.filter((url) => url.status === 'True') || []
	const pendingUrls = data?.filter((url) => url.status === 'None') || []
	const unRecommendableUrls =
		data?.filter((url) => url.status === 'False') || []

	if (isLoading) {
		return (
			<div className="text-center">
				<div>위잉위잉 데이터 가져오는 중</div>
			</div>
		)
	} else if (isError) {
		return (
			<div className="text-center">
				<div>Error occurred while fetching data.</div>
			</div>
		)
	} else if (data?.length === 0) {
		return (
			<div className="text-center">
				<Lottie options={TravelBusOption} height={260} width={300} />
				<h1 className="text-xl font-bold">데이터가 없습니다.</h1>
			</div>
		)
	}

	return (
		<div>
			{/* 완료되지 않은 URL들 출력 */}
			{pendingUrls.length > 0 && (
				<div>
					<div className="flex justify-between">
						<h2 className="text-sm text-darkGray3">완료되지 않은 URL</h2>
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

			{/* 추천 불가능한 URL 출력 */}
			{unRecommendableUrls.length > 0 && (
				<div>
					<h2 className="text-sm text-darkGray3">추천 불가능한 URL이에요 😔</h2>
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
		</div>
	)
}

export default UrlList
