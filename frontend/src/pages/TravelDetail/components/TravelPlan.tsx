import TravelDay from "./TravelDay";
import usePlanStore from "../store";
import { useRouter } from "src/hooks/useRouter";
import MapSpace from "./MapSpace";
import { useState } from "react";
import EditTravelPlan from "./TravelPlanEdit/EditTravelPlan";

const TravelPlan = () => {
    const router = useRouter()
    const [isEdit, setIsEdit] = useState(false)

    const plan = usePlanStore.getState().plan

    if (!plan) {
        router.routeTo('/notFound')
        return null
    }

    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    // const dayPlanCount = plan.dayOrder.map(day => plan.days[day].placeIds.length)
    // const prevPlanCount: number[] = []
    // let total = 0
    // for (const count of dayPlanCount) {
    //     prevPlanCount.push(total)
    //     total += count
    // }

    return (
        <div>
            <div className="sticky top-[60px] z-30">
                <MapSpace />
                {!isEdit && <div className="pl-4 pr-6 h-10 flex justify-between items-center bg-white">
                    <div>
                        <span className="text-sm font-semibold mr-2">day</span>
                        <span className="text-xs font-semibold text-darkGray1">07.15/월</span>
                    </div>
                    <div onClick={toggleIsEdit}>
                        <button className="text-blue1 text-xs">edit</button>
                    </div>
                </div>}
            </div>
            <div className="mb-[728px]">
                {isEdit 
                    ? <EditTravelPlan toggleIsEdit={toggleIsEdit} />
                    : plan.dayOrder.map((day, index) => {
                        return <TravelDay key={index} day={day} index={index + 1}/>
                    })}
            </div>
        </div>
    )
}

export default TravelPlan