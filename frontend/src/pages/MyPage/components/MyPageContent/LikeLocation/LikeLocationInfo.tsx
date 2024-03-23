import { useLikeLocationListQuery } from 'src/pages/MyPage/query'
import LikeLocationItem from './LikeLocationItem'

const LikeLocationInfo = () => {
	const { data: likeLocationList, isLoading } = useLikeLocationListQuery()

	return (
		<ul className="grid grid-cols-2 gap-x-6 gap-y-5">
			{isLoading ? (
				<>Loading...</>
			) : (
				likeLocationList?.map((locationInfo, index) => {
					return (
						<li key={`like-${index}`} className="inline-block">
							<LikeLocationItem locationInfo={locationInfo} />
						</li>
					)
				})
			)}
		</ul>
	)
}

export default LikeLocationInfo
