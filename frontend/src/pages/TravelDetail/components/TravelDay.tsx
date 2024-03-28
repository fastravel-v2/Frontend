import usePlanStore from "../store"
import TravelDayEmptyItem from "./TravelDayEmptyItem";
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
            <div className="pl-4 pt-1 h-10">
                <span className="text-sm font-semibold mr-2">day {index}</span>
                <span className="text-xs font-semibold text-darkGray1">{day}</span>
            </div>
            <div>
                {dayPlan.placeIds.length 
                    ? dayPlan.placeIds.map((placeId, index) => {
                        return (
                            <div key={index} >
                                <TravelDayItem placeId={placeId} index={index+1} hasNext={dayPlan.placeIds.length - 1 > index} />   
                            </div>
                        )
                    })
                    : <TravelDayEmptyItem />
                }
            </div>
            <div className="w-full h-[88px] flex justify-center">
                <button className="m-5 w-full h-10 border border-lightGray3 rounded">
                    장소 추가
                </button>
            </div>
        </div>
    )
}

export default TravelDay