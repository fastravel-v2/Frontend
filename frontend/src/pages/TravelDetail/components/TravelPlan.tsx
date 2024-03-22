import TravelDay from "./TravelDay";
import usePlanStore from "../store";
import { useRouter } from "src/hooks/useRouter";
import MapSpace from "./MapSpace";

const TravelPlan = () => {
    const router = useRouter()

    const plan = usePlanStore.getState().plan
    if (!plan) {
        router.routeTo('notFound')
        return null
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
            <MapSpace />
            <div className="pl-4 h-10">
                <span className="text-sm font-semibold mr-2">day</span>
                <span className="text-xs font-semibold text-darkGray1">07.15/월</span>
            </div>
            <div>
                {plan.dayOrder.map((day, index) => {
                    return (
                        <TravelDay key={index} day={day} index={index + 1} />
                    )
                })}
            </div>
        </div>
    )
}

export default TravelPlan