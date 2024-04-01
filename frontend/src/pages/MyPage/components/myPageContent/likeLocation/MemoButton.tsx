import MemoModal from 'src/components/MemoModal'
import { createPortal } from 'react-dom'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { postLikeLocation } from 'src/pages/MyPage/api'
import { useState } from 'react'

interface MemoButtonProps {
	locationId: string
	locationMemo: string | null
}
const MemoButton = ({ locationId, locationMemo }: MemoButtonProps) => {
	const [isOpen, setIsOpen] = useState(false)

	// :: Event Handlers
	const handleOpenMemoModal = () => {
		setIsOpen(true)
	}
	const handleCloseMemoModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			{locationMemo ? (
				<p
					onClick={handleOpenMemoModal}
					className="text-[10px] font-light text-darkGray1 truncate"
				>
					{locationMemo}
				</p>
			) : (
				<button
					onClick={handleOpenMemoModal}
					className="text-[10px] font-light text-darkGray1 flex items-center"
				>
					<span>메모 추가하기</span>
					<IoDocumentTextOutline className="inline ml-[2px]" />
				</button>
			)}
			{isOpen &&
				createPortal(
					<MemoModal
						requestId={locationId}
						memoReqFunc={postLikeLocation}
						onClose={handleCloseMemoModal}
						memoText={locationMemo}
					/>,
					document.body
				)}
		</>
	)
}

export default MemoButton
