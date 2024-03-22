import { LocationIcon } from 'src/assets/svgs'
import { LikeLocation } from 'src/pages/MyPage/type'
import MemoButton from './MemoButton'

interface ILikeLocationItemInfoProps {
	locationInfo: LikeLocation
}

const LikeLocationItemInfo = ({ locationInfo }: ILikeLocationItemInfoProps) => {
	return (
		<div className="flex flex-col gap-1 mt-2 text-black">
			<p className="text-sm font-extrabold">{locationInfo.locationName}</p>
			<p className="text-[10px] font-light flex items-center">
				<LocationIcon className="inline-block w-4 mr-[2px]" />
				<span>{locationInfo.locationAddress}</span>
			</p>
			{locationInfo.locationMemo ? (
				<p className="text-[10px] font-light text-darkGray1">
					{locationInfo.locationMemo}
				</p>
			) : (
				<MemoButton locationId={locationInfo.locationId} />
			)}
		</div>
	)
}

export default LikeLocationItemInfo
