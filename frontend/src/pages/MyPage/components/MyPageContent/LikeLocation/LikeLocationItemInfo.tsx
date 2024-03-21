import { LikeLocation } from 'src/pages/MyPage/type'

interface ILikeLocationItemInfoProps {
	locationInfo: LikeLocation
}

const LikeLocationItemInfo = ({ locationInfo }: ILikeLocationItemInfoProps) => {
	console.log(locationInfo)
	return <div>LikeLocationItemInfo</div>
}

export default LikeLocationItemInfo
