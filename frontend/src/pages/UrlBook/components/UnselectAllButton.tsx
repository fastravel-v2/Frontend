import React from 'react'
import useUrlBook from '../hooks/useUrlBook'

const UnselectAllButton: React.FC = () => {
	const { unSelectAllUrls } = useUrlBook()

	const handleUnSelectAllButtonClick = () => {
		unSelectAllUrls()
		const checkboxes = document.querySelectorAll<HTMLInputElement>(
			'input[type="checkbox"]'
		)
		checkboxes.forEach((checkbox) => {
			checkbox.checked = false
		})
	}
	return (
		<button
			className="font-bold py-2 px-4 rounded text-darkGray"
			onClick={handleUnSelectAllButtonClick}
		>
			전체 선택 해제
		</button>
	)
}

export default UnselectAllButton
