import React from 'react'
import useUrlBook from '../hooks/useUrlBook'

const UnselectAllButton: React.FC = () => {
	const { selectAllUrls } = useUrlBook()

	const handleSelectAllButtonClick = () => {
		selectAllUrls()
		const checkboxes = document.querySelectorAll<HTMLInputElement>(
			'input[type="checkbox"]'
		)
		checkboxes.forEach((checkbox) => {
			checkbox.checked = true
		})
	}
	return (
		<button
			className="font-bold py-2 px-4 rounded text-darkGray"
			onClick={handleSelectAllButtonClick}
		>
			전체 선택
		</button>
	)
}

export default UnselectAllButton
