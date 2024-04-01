import { LikeLocation } from 'src/pages/MyPage/type'
import LikeLocationItemInfo from './LikeLocationItemInfo'
import { DefaultLocation } from 'src/assets/svgs'
import { Link } from 'react-router-dom'

interface ILikeLocationItemProps {
	locationInfo: LikeLocation
}

const LikeLocationItem = ({ locationInfo }: ILikeLocationItemProps) => {
	return (
		<Link to={'/location/' + locationInfo.locationId}>
			{locationInfo.locationImage ? (
				<div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
					<img
						src={locationInfo.locationImage}
						alt={locationInfo.locationName}
					/>
				</div>
			) : (
				<DefaultLocation className="w-full h-[148px] rounded-lg " />
			)}

			<LikeLocationItemInfo locationInfo={locationInfo} />
		</Link>
	)
}

export default LikeLocationItem
