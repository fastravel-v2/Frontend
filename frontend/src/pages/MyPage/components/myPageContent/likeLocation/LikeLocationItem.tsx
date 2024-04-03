import { LikeLocation } from 'src/pages/MyPage/type'
import LikeLocationItemInfo from './LikeLocationItemInfo'
import { DefaultLocation } from 'src/assets/svgs'
import MemoButton from './MemoButton'

interface ILikeLocationItemProps {
	locationInfo: LikeLocation
}

const LikeLocationItem = ({ locationInfo }: ILikeLocationItemProps) => {
	return (
		<div>
			{locationInfo.locationImage ? (
				<div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
					<img
						src={locationInfo.locationImage}
						alt={locationInfo.locationName}
					/>
				</div>
			) : (
				<DefaultLocation className="w-full rounded-lg aspect-w-1 aspect-h-1 overflow-hidden" />
			)}

			<LikeLocationItemInfo locationInfo={locationInfo} />
			<MemoButton
				locationId={locationInfo.locationId}
				locationMemo={locationInfo.locationMemo}
			/>
		</div>
	)
}

export default LikeLocationItem
