import { useMemo } from 'react'
import { useCreatingTravelPageTypeStore, useTravelDateStore } from '../store'
import {
	formatDateString,
	formatEndDateString,
} from 'src/utility/utils/dateUtil'

const CalendarSubmit = () => {
	const { startDate, endDate } = useTravelDateStore()
	const { setPageType } = useCreatingTravelPageTypeStore()

	const isDisable = useMemo(() => {
		return !startDate && !endDate
	}, [startDate, endDate])

	const selectedDateText = useMemo(() => {
		if (!startDate && !endDate) return null

		if (startDate && !endDate) {
			return formatDateString(startDate)
		}

		if (startDate && endDate) {
			return `${formatDateString(startDate)} - ${formatEndDateString(endDate)}`
		}
	}, [startDate, endDate])

	const handleClickNextPage = () => {
		setPageType('profile')
	}
	return (
		<div>
			<button
				onClick={handleClickNextPage}
				disabled={isDisable}
				className={`fixed bottom-4 w-[calc(100%-40px)] mx-5 left-0 text-white text-lg font-bold border-[1px] py-4 rounded-[5px] bg-green1 ${
					isDisable && 'bg-green5 cursor-not-allowed'
				} transition-colors`}
			>
				{selectedDateText
					? selectedDateText + ' 여행가기'
					: '날짜를 선택해주세요.'}
			</button>
		</div>
	)
}

export default CalendarSubmit
