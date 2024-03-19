import { useMyTravelListQuery } from 'src/pages/MyPage/query'

const MyTravelInfo = () => {
	const { data: travelList, isLoading } = useMyTravelListQuery()

	return (
		<ul className="">
			{isLoading ? (
				<>Loading...</>
			) : (
				travelList?.map((travel, index) => {
					return <li key={`travel-${index}`}>{travel.travelName}</li>
				})
			)}
		</ul>
	)
}

export default MyTravelInfo
