import MemoModal from 'src/components/MemoModal'
import { createPortal } from 'react-dom'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { useState } from 'react'
import { useMyLocationMemoListQuery } from 'src/pages/MyPage/query'

interface MemoButtonProps {
	locationId: string
	locationMemo: string | null
}
const MemoButton = ({ locationId, locationMemo }: MemoButtonProps) => {
	const [isOpen, setIsOpen] = useState(false)
	// Todo: memo query랑 연결 필요
	const { myLocationMemoList } = useMyLocationMemoListQuery()

	// :: Event Handlers
	const handleOpenMemoModal = () => {
		setIsOpen(true)
	}
	const handleCloseMemoModal = () => {
		setIsOpen(false)
	}

	return (
		<div className="mx-1">
			{locationMemo ? (
				<button
					onClick={handleOpenMemoModal}
					className="text-[10px] font-light text-darkGray1 truncate text-left w-full"
				>
					<span>{myLocationMemoList[locationId]}</span>
					<IoDocumentTextOutline className="inline ml-1" />
				</button>
			) : (
				<button
					onClick={handleOpenMemoModal}
					className="text-[10px] font-light text-darkGray1"
				>
					<span>메모 추가하기</span>
					<IoDocumentTextOutline className="inline ml-1" />
				</button>
			)}
			{isOpen &&
				createPortal(
					<MemoModal
						requestId={locationId}
						onClose={handleCloseMemoModal}
						memoText={myLocationMemoList[locationId]}
					/>,
					document.body
				)}
		</div>
	)
}

export default MemoButton
