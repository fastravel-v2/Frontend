import { useState } from "react"
import { PiNote } from "react-icons/pi";
import MemoModal from "./MemoModal";

interface HeaderProps {
  name: string;
  address: string;
}

const Header = ({name, address}: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="mt-6 ml-1 mb-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="mb-1 text-darkGray3 flex items-center" onClick={openModal}><PiNote />메모 추가</div>
      <div className="mb-1 text-xs font-semibold">like count</div>
      <div className="text-xs font-semibold">{address}</div>
      <MemoModal isOpen={isModalOpen} onClose={closeModal}/> 
    </div>
  )
}

export default Header