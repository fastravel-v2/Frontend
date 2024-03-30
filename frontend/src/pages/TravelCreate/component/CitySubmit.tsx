import { useMemo } from 'react'
import { useCreatingTravelPageTypeStore, useSelectedCityStore } from '../store'

const CitySubmit = () => {
	const { selectedCities } = useSelectedCityStore()
	const { setPageType } = useCreatingTravelPageTypeStore()
	const isDisable = useMemo(() => {
		return selectedCities.length === 0
	}, [selectedCities])
	const handleClickNextPage = () => {
		setPageType('date')
	}
	return (
		<div>
			<button
				onClick={handleClickNextPage}
				disabled={isDisable}
				className={`fixed bottom-4 w-[calc(100%-40px)] left-0 mx-5 text-white text-lg font-bold border-[1px] py-4 rounded-[5px] bg-green1 ${
					isDisable && 'bg-green5 cursor-not-allowed'
				} transition-colors`}
			>
				여행할 도시를 선택해주세요
			</button>
		</div>
	)
}

export default CitySubmit
