import { MyTravel } from './type'

type SortedTravelsType = Record<'past' | 'present' | 'future', MyTravel[]>

// 날짜 리스트를 현재 날짜를 기준으로 구분하는 함수를 정의합니다.
export const sortDatesBasedOnCurrent = (
	travelList: MyTravel[]
): SortedTravelsType => {
	// 현재 날짜를 구합니다.
	const now = new Date()
	now.setHours(0, 0, 0, 0)
	const nowTimestamp = now.getTime()

	// 결과 객체를 초기화합니다.
	const sortedTravels: SortedTravelsType = {
		future: [],
		present: [],
		past: [],
	}

	// 각 날짜를 확인하며 과거, 현재, 미래로 분류합니다.
	travelList.forEach((travelInfo) => {
		const startDate = new Date(travelInfo.startDate).setHours(0, 0, 0, 0)
		const endDate = travelInfo.endDate
			? new Date(travelInfo.endDate).setHours(0, 0, 0, 0)
			: null

		if (
			startDate <= nowTimestamp &&
			(endDate ? nowTimestamp <= endDate : true)
		) {
			sortedTravels.present.push(travelInfo)
		} else if (startDate < nowTimestamp) {
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
