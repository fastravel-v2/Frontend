import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { IPlace } from "../type"
import { FaRegClock } from "react-icons/fa6"
import { useRouter } from "src/hooks/useRouter"
import { useState } from "react"
import MemoModal from "./MemoModal"
import { categoryInfo } from "src/utility/constants/location";

interface TravelItemModalProps {
    place: IPlace
    onClose: () => void
}

const reverseMapping = (obj: {[key: string]: number}) => {
    const reversed: {[key: number]: string} = {}
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        reversed[value] = key
    })
    return reversed
}

const TravelItemModal = ({ place, onClose }: TravelItemModalProps) => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const categoryNamesMapping = reverseMapping(categoryInfo)
    const categoryNames = place.category.map(id => categoryNamesMapping[id]).join(', ')

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        router.routeTo(`/location/${place.id}`)
    }

    return (
        <div className="fixed inset-0 z-[110] overflow-x-hidden overflow-y-auto outline-none">
            <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            </div>
            <div className="fixed bottom-0 z-[120] pt-9 px-6 bg-white rounded-xl h-[212px] w-full">
                <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{place.name}</h3>
                    <MdOutlineKeyboardArrowRight onClick={handleClick}/>
                </div>
                <div className="text-xs text-darkGray3 mb-2">{categoryNames}</div>
                <div className="text-xs text-blue1 font-bold">영업시간</div>
                <div className="h-5 mt-1.5 mb-3 text-darkGray3 flex items-center">
                    <FaRegClock className="h-4 w-4"/>
                    <div className="text-xs ml-1">시간 추가</div>
                </div>
                <div className="flex justify-between">
                    <button className="h-10 w-36 border border-lightGray3 rounded" onClick={openModal}>
                        메모 추가
                    </button>
                    <button className="h-10 w-36 border border-lightGray3 rounded">
                        길찾기
                    </button>
                </div>
            </div>
            {isModalOpen && <MemoModal onClose={closeModal} />}
        </div>
    )
}

export default TravelItemModal