// :: 날짜 포맷 변환 함수
// - startDate 포맷과 동일
export const formatDateString = (originalDateString: string | Date): string => {
	return typeof originalDateString === 'string'
		? new Date(originalDateString).toLocaleDateString().replace(/\.$/, '') // 문자열 끝의 점을 제거합니다.
		: originalDateString.toLocaleDateString().replace(/\.$/, '') // 문자열 끝의 점을 제거합니다.
}

export const formatEndDateString = (endDate: Date) => {
	return endDate
		.toLocaleDateString('ko-KR', {
			month: '2-digit',
			day: '2-digit',
		})
		.replace(/\.$/, '') // 문자열 끝의 점을 제거합니다.
}

// :: 종료일 포맷 변환 함수
export const formatEndDate = (originalDateString: string): string => {
	// Date 객체 생성
	const date = new Date(originalDateString)

	// 각 부분을 추출 (년, 월, 일)
	const month = (date.getMonth() + 1).toString().padStart(2, '0') // 월 (0부터 시작하므로 1을 더함)
	const day = date.getDate().toString().padStart(2, '0') // 일

	// 형식에 맞게 결합
	return `${month}.${day}`
}

// :: 여행 일정 일자 포맷 변환 함수
export const getStartEndDate = (startDate: string, endDate: string): string => {
	return `${formatDateString(startDate)} - ${formatEndDate(endDate)}`
}
