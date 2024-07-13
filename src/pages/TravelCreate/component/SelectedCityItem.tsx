import { DefaultLocation } from 'src/assets/svgs'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useSelectedCityStore } from '../store'

interface ISelectedCityItemProps {
	cityInfo: CityItemInfo
}

// Todo: 가로 모드에서도 정상적으로 동작하도록 수정하기
const SelectedCityItem = ({ cityInfo }: ISelectedCityItemProps) => {
	const { removeSelectedCity } = useSelectedCityStore()
	const handleRemoveCityItem = (event: React.MouseEvent<HTMLButtonElement>) => {
		const cityId = event.currentTarget.dataset.cityId
		if (cityId) {
			removeSelectedCity(parseInt(cityId))
		}
	}

	return (
		<li className="flex justify-center ">
			<div className="relative inline-flex flex-col justify-center">
				<DefaultLocation className="rounded-full h-11 w-11" />
				<p className="text-xs font-semibold text-darkGray4 pt-[6px] truncate w-11">
					{cityInfo.name}
				</p>
				<button
					onClick={handleRemoveCityItem}
					data-city-id={cityInfo.id}
					className="absolute top-0 right-0  translate-x-[25%] translate-y-[-25%] "
				>
					<IoCloseCircleOutline
						color="#9BA2AE"
						className="w-6 h-6 bg-white rounded-full "
					/>
				</button>
			</div>
		</li>
	)
}

export default SelectedCityItem
