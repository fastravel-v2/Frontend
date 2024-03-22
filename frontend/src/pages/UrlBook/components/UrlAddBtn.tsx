import UrlAddModal from "./UrlAddModal";
import React, { useState } from "react";

const UrlAddBtn: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const doCloseModal = () => setIsModalOpen(false)
  
  return (
    <>
      <button         
        className="px-4 py-2 bg-green-500 text-white text-base 
        font-medium w-full shadow-sm hover:bg-green-600 
        focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={openModal}>
          URL 추가 버튼
      </button>
        {/* 닫힌상태로 IsModalOpen = false 인 상태로 UrlAddModal 불러~ */}
      {isModalOpen && <UrlAddModal doCloseModal={doCloseModal} />} 
    </>
  )
}


export default UrlAddBtn;