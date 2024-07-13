import { useState } from 'react'
import AddLocationModal from './AddLocationModal'
import { createPortal } from 'react-dom'

interface LocationSelectButtonProps {
	locationId: string
}
const LocationSelectButton = ({ locationId }: LocationSelectButtonProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpenAddLocationModal = () => {
		setIsOpen(true)
	}
	const handleCloseAddLocationModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			<button
				className="px-3 py-2 text-sm font-bold text-black rounded bg-lightGray4 hover:bg-lightGray3"
				onClick={handleOpenAddLocationModal}
			>
				선택
			</button>
			{isOpen &&
				createPortal(
					<AddLocationModal
						locationId={locationId}
						onClose={handleCloseAddLocationModal}
					/>,
					document.body
				)}
		</>
	)
}
export default LocationSelectButton
