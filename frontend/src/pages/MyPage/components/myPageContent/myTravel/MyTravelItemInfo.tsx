import { Link } from 'react-router-dom'
import { TravelImage } from 'src/assets/svgs'
import { MyTravel } from 'src/pages/MyPage/type'
import { getStartEndDate } from 'src/pages/MyPage/util'

interface IMyTravelItemInfoProps {
	travelInfo: MyTravel
}

const MyTravelItemInfo = ({ travelInfo }: IMyTravelItemInfoProps) => {
	return (
		<Link to={`/travel/${travelInfo.planId}`} className="flex grow">
			{travelInfo.planImage ? (
				<img src={travelInfo.planImage} alt="여행지 이미지" className="mr-4" />
			) : (
				<TravelImage className="mr-4" />
			)}
			<div className="flex flex-col">
				<h3 className="text-sm font-semibold text-black mb-[6px]">
					{travelInfo.planName}
				</h3>
				<p className="mb-1 text-xs font-semibold text-darkGray1">
					{getStartEndDate(travelInfo.startDate, travelInfo.endDate)}
				</p>
				<p className="text-xs text-darkGray1">
					<span className="font-bold">{travelInfo.numOfCity}개 도시</span>
				</p>
			</div>
		</Link>
	)
}

export default MyTravelItemInfo
