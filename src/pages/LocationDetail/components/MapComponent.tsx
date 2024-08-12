import { useEffect, useRef } from 'react'

interface MapComponentProps {
	lat: number
	long: number
}

// Note: LocationDetail 페이지에서 장소의 위치를 지도에서 보여주기 위한 컴포넌트입니다.
const MapComponent = ({ lat, long }: MapComponentProps) => {
	// 지도를 표시할 div 요소를 참조하기 위한 ref
	const mapRef = useRef<HTMLDivElement>(null)

	// 지도 생성 + 마커 생성
	useEffect(() => {
		if (mapRef.current) {
			const mapOptions = {
				center: new window.naver.maps.LatLng(lat, long),
				zoom: 13,
				scaleControl: false,
			}
			const map = new window.naver.maps.Map(mapRef.current, mapOptions)

			new window.naver.maps.Marker({
				position: new window.naver.maps.LatLng(lat, long),
				map: map,
			})
		}
	}, [lat, long])

	return <div ref={mapRef} className="min-w-80 min-h-40"></div>
}

export default MapComponent
