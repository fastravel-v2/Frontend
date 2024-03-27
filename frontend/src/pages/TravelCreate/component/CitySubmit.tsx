import NavigateButton from 'src/components/NavigateButton'
import { useSelectedCityStore } from '../store'

const CitySubmit = () => {
	const { selectedCities } = useSelectedCityStore()
	return (
		<div>
			<NavigateButton
				path="/travel/create/date"
				isDisable={selectedCities.length === 0}
			>
				선택
			</NavigateButton>
		</div>
	)
}

export default CitySubmit
