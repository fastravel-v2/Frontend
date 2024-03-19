import { useMyTravelListQuery } from 'src/pages/MyPage/query'
import MyTravelItem from './MyTravelItem'

const MyTravelInfo = () => {
	const { data: travelList, isLoading } = useMyTravelListQuery()

	return (
		<ul className="flex flex-col gap-4">
			{isLoading ? (
				<>Loading...</>
			) : (
				travelList?.map((travelInfo, index) => {
					return (
						<li key={`travel-${index}`} className="flex items-center ">
							<MyTravelItem travelInfo={travelInfo} />
						</li>
					)
				})
			)}
		</ul>
	)
}

export default MyTravelInfo
