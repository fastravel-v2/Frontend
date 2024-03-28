import { useEffect, useRef, useState } from "react"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useRouter } from "src/hooks/useRouter";
import { IPlan } from "../type";

interface MapSpaceProps {
    plan: IPlan;
    day: number;
}

const MapSpace = ({day, plan}: MapSpaceProps) => {
    const router = useRouter()
    const mapRef = useRef<HTMLDivElement>(null)
    const [isMapVisible, setIsMapVisible] = useState(true)

    useEffect(() => {
        if (!plan || !mapRef.current) {
            return
        }

        const visibleDay = plan.days[plan.dayOrder[day - 1]]
        const places = visibleDay.placeIds.map((placeId) => plan.places[placeId])

        const mapOptions = {
            center: new window.naver.maps.LatLng(36.1073423, 128.4141895),
            zoom: 11,
            scaleControl: false
        }
        const map = new window.naver.maps.Map(mapRef.current, mapOptions)

        if (places.length > 0) {
            const firstPlacePosition = new window.naver.maps.LatLng(parseFloat(places[0].lat), parseFloat(places[0].long))
            const bounds = new window.naver.maps.LatLngBounds(firstPlacePosition, firstPlacePosition)
            const polylinePath: naver.maps.LatLng[] = places.map(place => new naver.maps.LatLng(parseFloat(place.lat), parseFloat(place.long)))

            places.forEach((place) => {
                const position = new window.naver.maps.LatLng(parseFloat(place.lat), parseFloat(place.long))
                bounds.extend(position)
            })
            map.fitBounds(bounds)

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
                    position: new window.naver.maps.LatLng(parseFloat(place.lat), parseFloat(place.long)),
                    map: map,
                    icon: {
                        content: content,
                        anchor: new window.naver.maps.Point(10, 10)
                    }
                })
            })

            new window.naver.maps.Polyline({
                map: map,
                path: polylinePath,
                strokeColor: '#9ba2ae',
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeStyle: 'dash',
            })
            
        } else {
            map.setCenter(new window.naver.maps.LatLng(36.1073423, 128.4141895))
            map.setZoom(11)
        }

    }, [day, plan, isMapVisible])

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
                {isMapVisible
                    ? <MdOutlineKeyboardArrowUp />
                    : <MdOutlineKeyboardArrowDown />}
            </div>
        </div>
    )
}

export default MapSpace