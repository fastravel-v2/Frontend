import NavigateButton from 'src/components/NavigateButton'
import Calendar from '../component/Calendar'
import CalendarSubmit from '../component/CalendarSubmit'

const SelectDate = () => {
	return (
		<div>
			<Calendar />
			<NavigateButton path="/travel/create/profile" isDisable={false}>
				선택 완료
			</NavigateButton>
			<CalendarSubmit />
		</div>
	)
}

export default SelectDate
