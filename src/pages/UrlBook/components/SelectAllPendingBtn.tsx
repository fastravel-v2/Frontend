import React from 'react'
import useUrlBook from '../hooks/useUrlBook'

const SelectAllPendingButton: React.FC = () => {
	const { selectAllPendingUrls } = useUrlBook()

	const handleSelectAllButtonClick = () => {
		selectAllPendingUrls()
		const checkboxes = document.querySelectorAll<HTMLInputElement>(
			'input[type="checkbox"]'
		)
		checkboxes.forEach((checkbox) => {
			checkbox.checked = true
		})
	}
	return (
		<button
			className="px-4 text-darkGray1 font-bold rounded"
			onClick={handleSelectAllButtonClick}
		>
			전체 선택
		</button>
	)
}

export default SelectAllPendingButton
