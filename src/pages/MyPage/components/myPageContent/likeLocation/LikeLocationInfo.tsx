import { useLikeLocationListQuery } from 'src/pages/MyPage/query'
import LikeLocationItem from './LikeLocationItem'

const LikeLocationInfo = () => {
	const { likeLocationList, isLoading } = useLikeLocationListQuery()

	return (
		<ul className="grid grid-cols-2 gap-x-6 gap-y-5">
			{isLoading || likeLocationList === undefined ? (
				<>Loading...</>
			) : likeLocationList.length > 0 ? (
				likeLocationList?.map((locationInfo, index) => {
					return (
						<li key={`like-${index}`} className="inline-block">
							<LikeLocationItem locationInfo={locationInfo} />
						</li>
					)
				})
			) : (
				<>좋아요한 여행지가 없습니다.</>
			)}
		</ul>
	)
}

export default LikeLocationInfo
