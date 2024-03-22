import usePlanStore from "../store";

interface TravelDayItemProps {
    placeId: string;
    index: number;
    hasNext: boolean;
}

const TravelDayItem = ({placeId, index, hasNext} : TravelDayItemProps) => {
    const place = usePlanStore.getState().plan?.places[placeId]
    if (!place) {
        return null
    }

    return (
        <div className="flex relative h-[72px]">
            <div className="bg-lightGray1 min-w-px h-full absolute left-9"></div>
            <div className="z-10 absolute left-[26px] top-[18px] h-5 w-5 bg-green3 rounded-full flex justify-center items-center text-white text-xs font-semibold">{index}</div>
            <div className="ml-[60px] mt-1.5 border w-[280px] h-[60px] border-lightGray3 rounded">
                    <div className="mt-1.5 ml-3 mb-1 font-semibold">{place.name}</div>
                    <div className="ml-3 text-xs text-darkGray1">{place.category}</div>
            </div>
            {hasNext 
                ? (<div className="absolute z-10 top-[60px] left-3 h-6 w-11 bg-white border border-lightGray1 rounded flex justify-center items-center">
                    next
                </div>)
                : null
            }
        </div>
    )
}

export default TravelDayItem