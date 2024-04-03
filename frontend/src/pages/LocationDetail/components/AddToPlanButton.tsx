import { useState } from "react"
import AddLocationModal from "src/pages/Search/component/AddLocationModal"
import { createPortal } from "react-dom"

interface AddToPlanButtonProps {
  locationId: string;
}

const AddToPlanButton = ({locationId}: AddToPlanButtonProps) => {
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
				className="h-10 w-full mx-1 my-4 border border-lightGray3 rounded"
				onClick={handleOpenAddLocationModal}
			>
				일정 추가
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

export default AddToPlanButton