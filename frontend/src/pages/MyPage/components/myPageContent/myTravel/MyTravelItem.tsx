import { MyTravel } from 'src/pages/MyPage/type'
import MyTravelItemInfo from './MyTravelItemInfo'
import MyTravelMoreBtn from './MyTravelMoreBtn'
// import { Link } from 'react-router-dom'

interface IMyTravelItemProps {
	travelInfo: MyTravel
}

const MyTravelItem = ({ travelInfo }: IMyTravelItemProps) => {
	return (
		<>
			<MyTravelItemInfo travelInfo={travelInfo} />
			{/* Todo: 여행 일정 별로 url 관리 시 활성화 */}
			{/* <Link
				to={`/urls/${travelInfo.planId}`}
				className="mr-1 text-xs font-semibold text-darkGray1"
			>
				<span className="block">URL</span>
				<span className="block">정보</span>
			</Link> */}
			<MyTravelMoreBtn travelId={travelInfo.planId.toString()} />
		</>
	)
}

export default MyTravelItem
