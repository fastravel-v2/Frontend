// import NavigateButton from 'src/components/NavigateButton'
import Calendar from '../component/Calendar'
import CalendarSubmit from '../component/CalendarSubmit'

const SelectDate = () => {
	return (
		<div>
			<h1 className="mt-6 mb-1 text-2xl font-bold">여행 일정 등록</h1>
			<h2 className="text-sm font-semibold mb-7 text-darkGray3">
				여행 가시는 일정을 알려주세요.
				<br />
				일정에 따른 날씨 정보도 함께 받아볼 수 있습니다.
			</h2>
			<Calendar />
			{/* <NavigateButton path="/travel/create/profile" isDisable={false}>
				선택 완료
			</NavigateButton> */}
			<CalendarSubmit />
		</div>
	)
}

export default SelectDate
