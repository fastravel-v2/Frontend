import { LikeLocation } from 'src/pages/MyPage/type'
import LikeLocationItemInfo from './LikeLocationItemInfo'
import { DefaultLocation } from 'src/assets/svgs'

interface ILikeLocationItemProps {
	locationInfo: LikeLocation
}

const LikeLocationItem = ({ locationInfo }: ILikeLocationItemProps) => {
	return (
		<>
			{locationInfo.locationImage ? (
				<img
					src={locationInfo.locationImage}
					alt={locationInfo.locationName}
					className="w-full rounded-sm"
				/>
			) : (
				<DefaultLocation className="w-full rounded-lg" />
			)}
			<LikeLocationItemInfo locationInfo={locationInfo} />
		</>
	)
}

export default LikeLocationItem
