import { FaChevronLeft } from 'react-icons/fa6'
import { FaChevronRight } from 'react-icons/fa6'

import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameMonth,
	isToday,
	parse,
	startOfToday,
} from 'date-fns'
import { useEffect, useState } from 'react'
import { useTravelDateStore } from '../store'

// Todo: 휴일 정보를 받아와서 반영하도록 수정
const Calendar = () => {
	const { startDate, endDate, setStartDate, setEndDate } = useTravelDateStore()

	useEffect(() => {}, [startDate, endDate])

	const today = startOfToday()
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
	const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

	const days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	})

	const previousMonth = () => {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
	}

	const nextMonth = () => {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
	}

	const isDateInBetweenStartAndEnd = (dateToCheck: Date) => {
		if (startDate && endDate) {
			// 시작 날짜와 끝 날짜를 UTC로 변환하여 시간을 00:00으로 설정
			// 날짜 비교를 정확하게 하기 위함
			const start = new Date(startDate.toISOString().split('T')[0])
			const end = new Date(endDate.toISOString().split('T')[0])
			const check = new Date(dateToCheck.toISOString().split('T')[0])

			return check > start && check < end
		}
		return false
	}

	const handleSelectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
		// button 선택 시 근처(감싸고 있는) li tag 설정
		const dateElement = event.currentTarget.closest('li')

		// li tag가 없거나 data-index가 없는 경우 return
		if (!dateElement || !dateElement.dataset.index) return

		// 시작 날짜와 끝 날짜를 선택하여 설정
		const dateIndex = parseInt(dateElement.dataset.index)
		const selectedDate = days[dateIndex]

		// 1. startDate와 endDate가 둘 다 있을 경우
		if (startDate && endDate) {
			setStartDate(selectedDate)
			setEndDate(null)
			return
		}

		// 2. startDate가 있을 때 endDate가 없는 경우
		if (startDate) {
			// 선택한 날짜가 시작 날짜보다 이전인 경우
			if (startDate > selectedDate) {
				setStartDate(selectedDate)
				setEndDate(startDate)
				return
			}
			setEndDate(selectedDate)
			return
		}

		// 3. startDate와 endDate가 둘 다 없는 경우
		setStartDate(selectedDate)
	}

	return (
		<div>
			<div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
				<div className="md:pr-14">
					<div className="flex items-center">
						<h2 className="flex-auto text-2xl font-semibold text-black">
							{format(firstDayCurrentMonth, 'MMMM yyyy')}
						</h2>
						<button
							type="button"
							onClick={previousMonth}
							className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Previous month</span>
							<FaChevronLeft className="w-5 h-5" aria-hidden="true" />
						</button>
						<button
							onClick={nextMonth}
							type="button"
							className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Next month</span>
							<FaChevronRight className="w-5 h-5" aria-hidden="true" />
						</button>
					</div>
					<div className="grid grid-cols-7 mt-10 text-base font-semibold leading-6 text-center text-gray-500">
						<div className="text-rose-600">일</div>
						<div>월</div>
						<div>화</div>
						<div>수</div>
						<div>목</div>
						<div>금</div>
						<div className="text-blue-700">토</div>
					</div>
					<ul className="grid grid-cols-7 mt-2 text-base text-black">
						{days.map((day, dayIdx) => (
							<li
								key={day.toString()}
								data-index={dayIdx}
								className={`${
									dayIdx === 0 && colStartClasses[getDay(day)]
								} py-1.5`}
							>
								<button
									type="button"
									onClick={handleSelectDate}
									className={[
										isToday(day) &&
										((endDate && !isEqual(day, endDate)) ||
											!isEqual(day, startDate))
											? 'text-green1'
											: '',
										!isToday(day) &&
										!isSameMonth(day, firstDayCurrentMonth) &&
										(!isEqual(day, startDate) ||
											(endDate && !isEqual(day, endDate)))
											? 'text-lightGray2'
											: '',
										!isEqual(day, startDate) &&
										endDate &&
										!isEqual(day, endDate)
											? 'hover:bg-gray-200'
											: '',
										isEqual(day, startDate) ||
										(endDate && isEqual(day, endDate)) ||
										isToday(day)
											? 'font-semibold'
											: '',
										isEqual(day, startDate) ? 'text-white bg-black' : '',
										endDate && isEqual(day, endDate)
											? 'text-white bg-black'
											: '',
										getDay(day) === 0 ? 'text-rose-600' : '',
										getDay(day) === 6 ? 'text-blue-700' : '',
										isDateInBetweenStartAndEnd(day) ? '!text-lightGray2' : '',
										'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
									]
										.filter(Boolean)
										.join(' ')}
								>
									<time dateTime={format(day, 'yyyy-MM-dd')}>
										{format(day, 'd')}
									</time>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

// 요일별 클래스 관리
const colStartClasses = [
	'',
	'col-start-2',
	'col-start-3',
	'col-start-4',
	'col-start-5',
	'col-start-6',
	'col-start-7',
]

export default Calendar
