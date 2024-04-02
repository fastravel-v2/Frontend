import { LocationIcon } from 'src/assets/svgs'
import { LikeLocation } from 'src/pages/MyPage/type'
import LikeButton from './LikeButton'
import { Link } from 'react-router-dom'

interface ILikeLocationItemInfoProps {
	locationInfo: LikeLocation
}

const LikeLocationItemInfo = ({ locationInfo }: ILikeLocationItemInfoProps) => {
	return (
		<Link
			to={'/location/' + locationInfo.locationId}
			className="relative flex flex-col gap-1 mx-1 mt-2 text-black"
		>
			<p className="text-sm font-extrabold">{locationInfo.locationName}</p>
			{locationInfo.locationAddress && (
				<p className="text-[10px] font-light flex items-center">
					<LocationIcon className="inline-block w-4 mr-[2px]" />
					<span>{locationInfo.locationAddress}</span>
				</p>
			)}

			<LikeButton locationId={locationInfo.locationId} />
		</Link>
	)
}

export default LikeLocationItemInfo
