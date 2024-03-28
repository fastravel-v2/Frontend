import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import { IDay, IPlace } from "../../type"
import EditTravelItem from "./EditTravelItem";
import { useMemo } from "react";
import usePlanStore from "../../store";

interface EditTravelDayProps {
    dayKey: string;
    day: IDay;
    places: IPlace[];
    index: number;
}

interface EditTravelItemListProps {
    places: IPlace[];
}

const EditTravelItemList = ({places}: EditTravelItemListProps) => {
    const memoizedPlaces = useMemo(() => {
        return places.map((place, index) => (
            <EditTravelItem key={place.id} place={place} index={index} hasNext={places.length - 1 > index} />
        ))
    }, [places])

    return memoizedPlaces
}

const EditTravelDay = ({dayKey, places, index}: EditTravelDayProps) => {
    const {selectedPlaceIds, togglePlaceSelection} = usePlanStore()
    const handleSelectAll = () => {
        places.forEach((place) => {
            if (!selectedPlaceIds.includes(place.id)) {
                togglePlaceSelection(place.id)
            }
        })
    }

    return (
        <div className="flex flex-col">
            <div className="pl-4 pt-1 h-8">
                <span className="text-sm font-semibold mr-2">day {index}</span>
                <span className="text-xs font-semibold text-darkGray1">{dayKey}</span>
            </div>
            <Droppable droppableId={dayKey}>
                {(provided: DroppableProvided) => (
                    <div className="min-h-5"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >   
                        <EditTravelItemList places={places} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <div className="mx-6 mt-5 h-[88px] flex justify-between gap-6">
                <button className="w-full h-10 border border-lightGray3 rounded" onClick={handleSelectAll}>
                    day 전체 선택
                </button>
                <button className="w-full h-10 border border-lightGray3 rounded">
                    거리순 재정렬
                </button>
            </div>
        </div>
    )
}

export default EditTravelDay