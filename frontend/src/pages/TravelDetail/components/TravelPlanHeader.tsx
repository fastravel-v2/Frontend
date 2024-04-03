import { cityInfo } from "src/utility/constants/city";
import { useState } from "react";
import EditTravelPlan from "./TravelPlanEdit/EditTravelPlan";
import TravelPlan from "./TravelPlan"

interface TravelPlanHeaderProps {
    cities: number[]
}

const getCityById = (cityId: number) => {
    return cityInfo[cityId.toString() as keyof typeof cityInfo]
}

const TravelPlanHeader = ({cities}: TravelPlanHeaderProps) => {
    const [isEdit, setIsEdit] = useState(false)

    const city = getCityById(cities[0])
    const cityLat = city.lat
    const cityLong = city.long

    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div>
            {isEdit 
                ? <EditTravelPlan toggleIsEdit={toggleIsEdit} cityLat={cityLat} cityLong={cityLong} />
                : <TravelPlan toggleIsEdit={toggleIsEdit} cityLat={cityLat} cityLong={cityLong} />}
        </div>
    )
}

export default TravelPlanHeader