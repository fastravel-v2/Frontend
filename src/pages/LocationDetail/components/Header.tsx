import MemoModal from 'src/components/MemoModal'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { PiNote } from 'react-icons/pi'

interface HeaderProps {
	locationId: string
	name: string
	address: string
	memo: string
}

const Header = ({ name, address, locationId, memo }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenMemoModal = () => {
		setIsOpen(true)
	}
	const handleCloseMemoModal = () => {
		setIsOpen(false)
	}

	return (
		<div className="mt-6 ml-1 mb-4">
			<h1 className="text-2xl font-bold">{name}</h1>
			<div
				className="mb-1 text-darkGray3 flex items-center"
				onClick={handleOpenMemoModal}
			>
				{memo ? (
					<>
						<PiNote />
						메모하기
					</>
				) : (
					<>{memo}</>
				)}
			</div>
			<div className="text-xs font-semibold">{address}</div>
			{isOpen &&
				createPortal(
					<MemoModal
						requestId={locationId}
						onClose={handleCloseMemoModal}
						memoText={memo}
					/>,
					document.body
				)}
		</div>
	)
}

export default Header
