import NavigateButton from 'src/components/NavigateButton'
import Calendar from '../component/Calendar'

const SelectDate = () => {
	return (
		<div>
			<Calendar />
			<NavigateButton path="/travel/create/profile" isDisable={false}>
				선택 완료
			</NavigateButton>
		</div>
	)
}

export default SelectDate
