import usePlanStore from "../store"
import TravelDayItem from "./TravelDayItem";

interface TravelDayProps {
    day: string;
    index: number;
}

const TravelDay = ({day, index}: TravelDayProps) => {
    const dayPlan = usePlanStore.getState().plan?.days[day]

    if (!dayPlan) return null

    return (
        <div>
            <div className="pl-4 h-10">
                <span className="text-sm font-semibold mr-2">day {index}</span>
                <span className="text-xs font-semibold text-darkGray1">{day}/{dayPlan.day}</span>
            </div>
            <div>
                {dayPlan.placeIds.map((placeId, index) => {
                    return (
                        <div key={index} >
                            <TravelDayItem placeId={placeId} index={index+1} hasNext={dayPlan.placeIds.length - 1 > index} />   
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TravelDay