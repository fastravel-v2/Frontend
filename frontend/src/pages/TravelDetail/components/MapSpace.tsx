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

        // const averageLatLong = places.reduce((acc, place) => {
        //     acc.lat += parseFloat(place.lat)
        //     acc.long += parseFloat(place.long)
        //     return acc
        // }, {lat: 0, long: 0})

        // if (places.length > 0) {
        //     averageLatLong.lat /= places.length
        //     averageLatLong.long /= places.length
        // } else {
        //     averageLatLong.lat = 36.1073423
        //     averageLatLong.long = 128.4141895
        // }

        const mapOptions = {
            center: new window.naver.maps.LatLng(36.1073423, 128.4141895),
            zoom: 11,
            scaleControl: false
        }
        const map = new window.naver.maps.Map(mapRef.current, mapOptions)

        if (places.length > 0) {
            const firstPlacePosition = new window.naver.maps.LatLng(parseFloat(places[0].lat), parseFloat(places[0].long))
            const bounds = new window.naver.maps.LatLngBounds(firstPlacePosition, firstPlacePosition)
            
            places.forEach((place) => {
                const position = new window.naver.maps.LatLng(parseFloat(place.lat), parseFloat(place.long))
                bounds.extend(position)
            })
            map.fitBounds(bounds)

            places.forEach((place, index) => {
                const content = `<div style="
                    width: 20px;
                    height: 20px;
                    background-color: #578ADD;
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