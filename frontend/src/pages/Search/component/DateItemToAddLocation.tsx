import { add } from 'date-fns'
import { useEffect } from 'react'

interface DateItemToAddLocationProps {
	startDate: Date | null
	endDate: Date | null
	selectedDayNumber: string
	setSelectedDayNumber: React.Dispatch<React.SetStateAction<string>>
}

const DateItemToAddLocation = ({
	startDate,
	endDate,
	selectedDayNumber,
	setSelectedDayNumber,
}: DateItemToAddLocationProps) => {
	useEffect(() => {}, [
		startDate,
		endDate,
		selectedDayNumber,
		setSelectedDayNumber,
	])

	const handleSelectDate = (e: React.MouseEvent<HTMLButtonElement>) => {
		const dateInfo = e.currentTarget.getAttribute('data-day-date') as string
		setSelectedDayNumber(dateInfo)
	}

	const getDayList = () => {
		const dayList = [] as SelectDayType[]

		if (startDate && endDate) {
			let start = new Date(startDate.toISOString().split('T')[0])
			const end = new Date(endDate.toISOString().split('T')[0])

			while (start <= end) {
				dayList.push({
					dayNumber: `${
						Math.floor((start.getTime() - startDate.getTime()) / 86400000) + 1
					} 일차`,
					date: start,
					day: ['일', '월', '화', '수', '목', '금', '토'][start.getDay()],
				})
				start = add(start, { days: 1 })
			}
		} else if (endDate === null && startDate) {
			const day = new Date(startDate.toISOString().split('T')[0])

			dayList.push({
				dayNumber: `${
					Math.floor((day.getTime() - startDate.getTime()) / 86400000) + 1
				} 일차`,
				date: day,
				day: ['일', '월', '화', '수', '목', '금', '토'][day.getDay()],
			})
		}

		return dayList
	}
	return (
		<ul className="flex gap-3 overflow-x-scroll scrollbar-hide">
			{getDayList().map((day) => {
				return (
					<li
						key={`${day.date.getMonth() + 1}.${day.date.getDate()}`}
						className={`flex flex-col text-center   rounded-lg w-[72px] text-xs py-1 flex-none
				${
					day.date.toString() === selectedDayNumber
						? 'bg-green3 text-white'
						: 'border-lightGray2 border-2 bg-white text-black'
				} `}
					>
						<button onClick={handleSelectDate} data-day-date={day.date}>
							<p className="mb-1">{day.dayNumber}</p>
							<p className="text-[10px]">
								{day.date.getMonth() + 1}.{day.date.getDate()} / {day.day}
							</p>
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default DateItemToAddLocation
