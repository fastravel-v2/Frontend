import { LikeLocation } from 'src/pages/MyPage/type'
import LikeLocationItemInfo from './LikeLocationItemInfo'

interface ILikeLocationItemProps {
	locationInfo: LikeLocation
}

const LikeLocationItem = ({ locationInfo }: ILikeLocationItemProps) => {
	return (
		<>
			<img src={locationInfo.locationImage} alt={locationInfo.locationName} />
			<LikeLocationItemInfo locationInfo={locationInfo} />
			<div>
				<p>{locationInfo.locationName}</p>
				<p>{locationInfo.locationAddress}</p>
				<p>{locationInfo.locationMemo}</p>
			</div>
		</>
	)
}

export default LikeLocationItem
