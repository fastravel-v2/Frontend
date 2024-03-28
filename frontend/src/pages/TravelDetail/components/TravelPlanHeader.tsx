import { useState } from "react";
import EditTravelPlan from "./TravelPlanEdit/EditTravelPlan";
import TravelPlan from "./TravelPlan"

const TravelPlanHeader = () => {
    const [isEdit, setIsEdit] = useState(false)

    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div>
            {isEdit 
                ? <EditTravelPlan toggleIsEdit={toggleIsEdit} />
                : <TravelPlan toggleIsEdit={toggleIsEdit} />}
        </div>
    )
}

export default TravelPlanHeader