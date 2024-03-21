import { MyTravel } from './type'

type SortedTravelsType = Record<'past' | 'present' | 'future', MyTravel[]>

// 날짜 리스트를 현재 날짜를 기준으로 구분하는 함수를 정의합니다.
export const sortDatesBasedOnCurrent = (
	travelList: MyTravel[]
): SortedTravelsType => {
	// 현재 날짜를 구합니다.
	const now = new Date()

	// 결과 객체를 초기화합니다.
	const sortedTravels: SortedTravelsType = {
		past: [],
		present: [],
		future: [],
	}

	// 각 날짜를 확인하며 과거, 현재, 미래로 분류합니다.
	travelList.forEach((travelInfo) => {
		const currentDate = new Date(travelInfo.startDate)
		if (currentDate.setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0)) {
			sortedTravels.present.push(travelInfo)
		} else if (currentDate < now) {
			sortedTravels.past.push(travelInfo)
		} else {
			sortedTravels.future.push(travelInfo)
		}
	})

	// 각 카테고리별로 날짜를 정렬합니다.
	sortedTravels.past.sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
	)
	sortedTravels.present.sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
	)
	sortedTravels.future.sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
	)

	return sortedTravels
}
