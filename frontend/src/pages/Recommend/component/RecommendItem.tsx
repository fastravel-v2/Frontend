import { useEffect } from 'react'
import { useSurveyItems } from '../store'
import { FaCheck } from 'react-icons/fa'

interface RecommendItemProps {
	location: RecommendItemInfo
}

const RecommendItem = ({ location }: RecommendItemProps) => {
	const { surveyItems, addSurveyItem, removeSurveyItem } = useSurveyItems()

	const isSelectedSurveyItem = (id: string) =>
		surveyItems.some((surveyItem) => surveyItem.id === id)

	const handleClickSurveyItem = () => {
		if (surveyItems.length >= 3 && !isSelectedSurveyItem(location.id)) {
			alert('3개를 모두 선택하셨어요.')
			return
		}

		if (isSelectedSurveyItem(location.id)) {
			console.log('removeSurveyItem', location.id)
			removeSurveyItem(location.id)
		} else {
			addSurveyItem(location)
		}
	}

	useEffect(() => {
		console.log(surveyItems)
	}, [surveyItems])

	return (
		<>
			<li onClick={handleClickSurveyItem} className="relative">
				<img
					src={location.image}
					alt={`${location.name}의 이미지`}
					className="w-full h-24 rounded"
				/>
				{isSelectedSurveyItem(location.id) && (
					<div className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-lightGray2 opacity-80">
						<FaCheck color="#454645" size={30} />
						<p className="font-bold text-black">선택 완료</p>
					</div>
				)}
			</li>
		</>
	)
}

export default RecommendItem
