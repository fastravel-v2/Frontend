import { useState } from 'react'
import MemoModal from 'src/components/MemoModal'
import { createPortal } from 'react-dom'
import { putMemoSave } from 'src/pages/MyPage/api'
import { IoDocumentTextOutline } from 'react-icons/io5'

interface MemoButtonProps {
	locationId: number
}
const MemoButton = ({ locationId }: MemoButtonProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpenMemoModal = () => {
		setIsOpen(true)
	}
	const handleCloseMemoModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			<button
				onClick={handleOpenMemoModal}
				className="text-[10px] font-light text-darkGray1 flex items-center"
			>
				<span>메모 추가하기</span>
				<IoDocumentTextOutline className="inline ml-[2px]" />
			</button>
			{isOpen &&
				createPortal(
					<MemoModal
						requestId={locationId}
						memoReqFunc={putMemoSave}
						onClose={handleCloseMemoModal}
					/>,
					document.body
				)}
		</>
	)
}

export default MemoButton
