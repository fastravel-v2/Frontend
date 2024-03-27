import { useState } from "react";
import usePlanStore from "../store";
import TravelItemModal from "./TravelItemModal";

interface TravelDayItemProps {
    placeId: string;
    index: number;
    hasNext: boolean;
}

const TravelDayItem = ({placeId, index, hasNext} : TravelDayItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const place = usePlanStore.getState().plan?.places[placeId]
    if (!place) {
        return null
    }
    

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="flex relative h-[72px]">
            <div className="bg-lightGray1 min-w-px h-full absolute left-9"></div>
            <div className="z-10 absolute left-[26px] top-[18px] h-5 w-5 bg-green3 rounded-full flex justify-center items-center text-white text-xs font-semibold">{index}</div>
            <div className="ml-[60px] mt-1.5 mr-5 border w-full h-[60px] border-lightGray3 rounded" onClick={openModal}>
                    <div className="mt-1.5 ml-3 mb-1 font-semibold">{place.name}</div>
                    <div className="ml-3 text-xs text-darkGray1">{place.category}</div>
            </div>
            {hasNext 
                ? (<div className="absolute z-10 top-[60px] left-3 h-6 w-11 bg-white border border-lightGray1 rounded flex justify-center items-center">
                    next
                </div>)
                : null
            }
            {isModalOpen && <TravelItemModal place={place} onClose={closeModal} />}
        </div>
    )
}

export default TravelDayItem