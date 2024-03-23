import { useMyTravelListQuery } from 'src/pages/MyPage/query'
import MyTravelItem from './MyTravelItem'
import { TravelType } from 'src/pages/MyPage/type'

enum TravelHeader {
	past = '지난 여행',
	present = '진행중인 여행',
	future = '예정된 여행',
}

const MyTravelInfo = () => {
	const { sortedMyTravelList, isLoading } = useMyTravelListQuery()

	return (
		<div className="flex flex-col gap-4">
			{isLoading ? (
				<>Loading...</>
			) : (
				Object.keys(sortedMyTravelList)
					.filter(
						(travelType) =>
							sortedMyTravelList[travelType as TravelType].length > 0
					)
					.map((travelType) => {
						return (
							<div key={travelType}>
								<h2>{TravelHeader[travelType as TravelType]}</h2>
								<ul>
									{sortedMyTravelList[travelType as TravelType].map(
										(travelInfo, index) => {
											return (
												<li
													key={`${travelInfo + '-' + index}`}
													className="flex items-center "
												>
													<MyTravelItem travelInfo={travelInfo} />
												</li>
											)
										}
									)}
								</ul>
							</div>
						)
					})
			)}
		</div>
	)
}

export default MyTravelInfo
