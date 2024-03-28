import { useEffect, useRef } from "react"

interface MapComponentProps {
    lat: number;
    long: number;
}

const MapComponent= ({lat, long}: MapComponentProps) => {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(mapRef.current) {
            const mapOptions = {
                center: new window.naver.maps.LatLng(lat, long),
                zoom: 13,
                scaleControl: false
            }
            const map = new window.naver.maps.Map(mapRef.current, mapOptions)

            new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(lat, long),
                map: map
            })
        }
    }, [lat, long])

    return (
        <div ref={mapRef} className="min-w-80 min-h-40">

        </div>
    )
}

export default MapComponent