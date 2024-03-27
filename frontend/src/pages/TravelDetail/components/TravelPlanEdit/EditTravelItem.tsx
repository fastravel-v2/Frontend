import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { IPlace } from "../../type"
import { IoMenu } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import usePlanStore from "../../store";

interface EditTravelItemProps {
    place: IPlace;
    index: number;
    hasNext: boolean;
}

const EditTravelItem = ({place, index, hasNext}: EditTravelItemProps) => {

    const {togglePlaceSelection, selectedPlaceIds} = usePlanStore()

    const isSelected = selectedPlaceIds.includes(place.id)

    const handleSelect = () => {
        togglePlaceSelection(place.id)
    }

    return (
        <Draggable
            draggableId={place.id}
            index={index}
        >
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div className={`flex relative h-[72px] ${snapshot.isDragging ? 'bg-blue1 bg-opacity-30' : 'bg-white'}`}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    onClick={handleSelect}
                >
                    <div className={`absolute left-[26px] top-6 h-5 w-5 rounded-full flex justify-center items-center ${isSelected ? 'bg-green3' : 'bg-white border border-darkGray3'} `}><IoMdCheckmark className={`${isSelected ? 'text-white' : 'text-darkGray3'}`} /></div>
                    <div className="ml-[60px] mt-1.5 w-full">
                        <div className="flex items-center">
                            <div className="border w-full h-[60px] mr-4 border-lightGray3 bg-white rounded">
                                <div className="mt-1.5 ml-3 mb-1 font-semibold">{place.name}</div>
                                <div className="ml-3 text-xs text-darkGray1">{place.category}</div>
                            </div>
                            <div className="w-5 h-5 mr-4"
                                {...provided.dragHandleProps}
                            >
                                <IoMenu className="w-5 h-5"/>
                            </div>
                        </div>   
                    </div>
                    {hasNext
                        ? <div className="absolute z-10 top-[60px] left-3 h-6 w-11 bg-white border border-lightGray1 rounded flex justify-center items-center">
                            next
                        </div>
                        : null
                    }
                </div>
            )}
        </Draggable>
    )
}

export default EditTravelItem