import { useMemo } from 'react'
import { useCreatingTravelPageTypeStore, useSelectedCityStore } from '../store'

const CalendarSubmit = () => {
	const { selectedCities } = useSelectedCityStore()
	const { setPageType } = useCreatingTravelPageTypeStore()
	const isDisable = useMemo(() => {
		return selectedCities.length === 0
	}, [selectedCities])
	const handleClickNextPage = () => {
		setPageType('profile')
	}
	return (
		<div>
			<button
				onClick={handleClickNextPage}
				disabled={isDisable}
				className={`fixed bottom-0 w-full text-white text-lg font-bold border-[1px] py-4 rounded-[5px] bg-green1 ${
					isDisable && 'bg-green5 cursor-not-allowed'
				} transition-colors`}
			>
				선택
			</button>
		</div>
	)
}

export default CalendarSubmit
