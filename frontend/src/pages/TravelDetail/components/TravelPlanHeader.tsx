import { useState } from "react";
import EditTravelPlan from "./TravelPlanEdit/EditTravelPlan";
import TravelPlan from "./TravelPlan"

interface TravelPlanHeaderProps {
    cities: number[]
}

const TravelPlanHeader = ({cities}: TravelPlanHeaderProps) => {
    const [isEdit, setIsEdit] = useState(false)

    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div>
            {isEdit 
                ? <EditTravelPlan toggleIsEdit={toggleIsEdit} />
                : <TravelPlan toggleIsEdit={toggleIsEdit} cities={cities} />}
        </div>
    )
}

export default TravelPlanHeader