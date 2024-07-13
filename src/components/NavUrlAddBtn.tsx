//src/components/NavUrlAddBtn.tsx

import UrlAddModal from 'src/pages/UrlBook/components/UrlAddModal'
import React, { useState } from 'react'
import UrlAddBtnImage from '../assets/UrlAddBtn.png'; // 이미지 import

const NavUrlAddBtn: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const isOpenModal = () => setIsModalOpen(true)
	const doCloseModal = () => setIsModalOpen(false)

	return (
		<>
			<img
				src={UrlAddBtnImage}
				alt="URL 추가하려면"
				className="url-add-btn"
				onClick={isOpenModal}
			/>
			{/* 닫힌상태로 IsModalOpen = false 인 상태로 UrlAddModal 불러~ */}
			{isModalOpen && <UrlAddModal doCloseModal={doCloseModal} />}
		</>
	)
}

export default NavUrlAddBtn
