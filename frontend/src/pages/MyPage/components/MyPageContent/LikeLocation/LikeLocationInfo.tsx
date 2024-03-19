import { useLikeLocationListQuery } from 'src/pages/MyPage/query'

const LikeLocationInfo = () => {
	const { data: likeLocationList, isLoading } = useLikeLocationListQuery()

	return (
		<ul className="">
			{isLoading ? (
				<>Loading...</>
			) : (
				likeLocationList?.map((locationInfo, index) => {
					return (
						<li key={`like-${index}`} className="">
							{locationInfo.locationName}
						</li>
					)
				})
			)}
		</ul>
	)
}

export default LikeLocationInfo
