import { useEffect, useState } from 'react'
import { getRecommendationsLocation } from '../api'
import PlaceSection from 'src/components/PlaceSection'

const RecommendLocation = () => {
	const [recommendLocation, setRecommendLocation] = useState<IPlaceInfo[]>([])
	const [locationDenied, setLocationDenied] = useState(false)

	const refetch = async (lat: number, long: number) => {
		const fetchedData = await getRecommendationsLocation(lat, long)
		setRecommendLocation(fetchedData)
	}

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					refetch(position.coords.latitude, position.coords.longitude)
				},
				(error) => {
					console.log('Error: ', error.message)
					setLocationDenied(true)
				}
			)
		} else {
			console.log('해당 브라우저에서는 위치정보를 제공하지 않습니다.')
			setLocationDenied(true)
		}
	}, [])

	return (
		<div className="mt-4 mb-4">
			<h3 className="text-lg font-bold text-black mb-3">근처 여행지</h3>
			{locationDenied ? (
				<div>위치 정보 제공에 동의하지 않았습니다.</div>
			) : recommendLocation.length ? (
				<PlaceSection places={recommendLocation} />
			) : (
				<div>위치 정보를 가져오는 중입니다...</div>
			)}
		</div>
	)
}

export default RecommendLocation
