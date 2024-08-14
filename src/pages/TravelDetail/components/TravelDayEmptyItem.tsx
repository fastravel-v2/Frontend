import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNearbyLocations } from '../api'
import PlaceSection from 'src/components/PlaceSection'

interface TravelDayEmptyItemProps {
	lat: number
	long: number
}

const TravelDayEmptyItem = ({ lat, long }: TravelDayEmptyItemProps) => {
	const { id } = useParams()
	const [nearbyLocations, setNearbyLocations] = useState<IPlaceInfo[]>([])

	const refetch = async () => {
		const fetchedData = await getNearbyLocations(lat, long)
		setNearbyLocations(fetchedData)
	}

	useEffect(() => {
		refetch()
	}, [id])

	return (
		<div className="flex relative h-[188px]">
			<div className="bg-lightGray1 min-w-px h-full absolute left-9"></div>
			<div className="z-10 absolute left-[26px] top-[18px] h-5 w-5 bg-green3 rounded-full flex justify-center items-center text-white text-xs font-semibold"></div>
			<div className="ml-[60px] mt-2 h-[168px] overflow-x-auto">
				<PlaceSection places={nearbyLocations} />
			</div>
		</div>
	)
}

export default TravelDayEmptyItem
