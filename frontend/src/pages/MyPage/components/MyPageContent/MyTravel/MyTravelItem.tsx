import { MyTravel } from 'src/pages/MyPage/type'
import MyTravelItemInfo from './MyTravelItemInfo'
import { Link } from 'react-router-dom'
import MyTravelMoreBtn from './MyTravelMoreBtn'

interface IMyTravelItemProps {
	travelInfo: MyTravel
}

const MyTravelItem = ({ travelInfo }: IMyTravelItemProps) => {
	return (
		<>
			<MyTravelItemInfo travelInfo={travelInfo} />
			<Link
				to={`/urls/${travelInfo.travelId}`}
				className="mr-1 text-xs font-semibold text-darkGray1"
			>
				<span className="block">URL</span>
				<span className="block">정보</span>
			</Link>
			<MyTravelMoreBtn />
		</>
	)
}

export default MyTravelItem
