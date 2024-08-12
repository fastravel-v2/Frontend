import { useEffect, useRef, useState } from 'react'
import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from 'react-icons/md'
import { useRouter } from 'src/hooks/useRouter'
import { IPlan } from '../type'

interface MapSpaceProps {
	plan: IPlan
	day: number
	cityLat: number
	cityLong: number
}

// Note: 일정 작성 페이지에서 일정 정보를 지도에 표시하기 위한 컴포넌트
// day: 현재 지도에 표시될 일정의 날짜
// plan: 전체 일정 정보
// cityLat & cityLong: 지도의 중심 좌표를 의미
const MapSpace = ({ day, plan, cityLat, cityLong }: MapSpaceProps) => {
	const router = useRouter()
	const mapRef = useRef<HTMLDivElement>(null)
	const [isMapVisible, setIsMapVisible] = useState(true)

	// 지도 생성 및
	useEffect(() => {
		if (!plan || !mapRef.current) {
			return
		}

		// 지도에 표시할 장소 정보 가져오기
		const visibleDay = plan.days[plan.dayOrder[day - 1]] // 지도에 표시될 날짜의 일정에 있는 장소들 id 정보를 가져옴
		const places = visibleDay.placeIds.map((placeId) => plan.places[placeId]) // 장소들의 id 정보를 이용해 장소 정보를 가져옴

		// 지도 생성에 필요한 옵션들
		const mapOptions = {
			center: new window.naver.maps.LatLng(cityLat, cityLong),
			zoom: 11,
			scaleControl: false,
		}
		// 지도 생성
		const map = new window.naver.maps.Map(mapRef.current, mapOptions)

		// 지도에 표시할 장소가 있을 경우
		// -
		if (places.length > 0) {
			// Todo: bounds를 왜 2번 설정하는지 확인하기
			// 초기 bounds 설정
			// - 첫 번째 장소의 좌표를 기준으로 bounds를 설정
			const firstPlacePosition = new window.naver.maps.LatLng(
				parseFloat(places[0].lat),
				parseFloat(places[0].long)
			)
			const bounds = new window.naver.maps.LatLngBounds(
				firstPlacePosition,
				firstPlacePosition
			)
			// - bounds: 장소들의 좌표를 기반으로 지도의 bounds를 설정
			places.forEach((place) => {
				const position = new window.naver.maps.LatLng(
					parseFloat(place.lat),
					parseFloat(place.long)
				)
				bounds.extend(position)
			})
			map.fitBounds(bounds)

			// 장소들 정보를 이용해 지도에 마커와 polyline을 그림
			// - polylinePath: 장소들을 연결할 선을 그리기 위한 좌표 배열
			const polylinePath: naver.maps.LatLng[] = places.map(
				(place) =>
					new naver.maps.LatLng(parseFloat(place.lat), parseFloat(place.long))
			)

			// 지도에 마커 생성
			places.forEach((place, index) => {
				const content = `<div style="
                    width: 20px;
                    height: 20px;
                    background-color: #51dbc0;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    font-size: 12px;
                ">${index + 1}</div>`

				new window.naver.maps.Marker({
					position: new window.naver.maps.LatLng(
						parseFloat(place.lat),
						parseFloat(place.long)
					),
					map: map,
					icon: {
						content: content,
						anchor: new window.naver.maps.Point(10, 10),
					},
				})
			})

			// polyline 생성
			new window.naver.maps.Polyline({
				map: map,
				path: polylinePath,
				strokeColor: '#9ba2ae',
				strokeOpacity: 1,
				strokeWeight: 2,
				strokeStyle: 'dash',
			})
		}
		// 지도에 표시할 장소가 없을 경우
		// - 지도의 중심을 해당 도시의 좌표로 설정하고 zoom level을 11로 설정
		else {
			map.setCenter(new window.naver.maps.LatLng(cityLat, cityLong))
			map.setZoom(11)
		}
	}, [day, plan, isMapVisible])

	// plan이 없을 경우 notfound 페이지로 이동
	if (!plan) {
		router.routeTo('/notfound')
		return null
	}

	const toggleIsMapVisible = () => {
		setIsMapVisible(!isMapVisible)
	}

	return (
		<div className="bg-white">
			{isMapVisible && <div className="w-full h-40" ref={mapRef}></div>}
			<div className="h-6 flex justify-center" onClick={toggleIsMapVisible}>
				{isMapVisible ? (
					<MdOutlineKeyboardArrowUp />
				) : (
					<MdOutlineKeyboardArrowDown />
				)}
			</div>
		</div>
	)
}

export default MapSpace
