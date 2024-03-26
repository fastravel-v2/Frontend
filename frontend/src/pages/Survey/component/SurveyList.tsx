import { useEffect } from 'react'
import SurveyItem from './SurveyItem'
import { useSurveyListQueries } from '../query'

// Todo: 이미지 최적화 작업 필요
// - 이미지가 느리게 받아와지는 문제 때문에 이미지 최적화 작업이 필요하다.
const SurveyList = () => {
	// :: Queries version
	const { surveyListWithImage } = useSurveyListQueries()
	useEffect(() => {
		console.log('final data', surveyListWithImage)
	}, [surveyListWithImage])

	return (
		<ul className="grid grid-cols-4 gap-2 pt-8 pb-24">
			{surveyListWithImage.map((location, index) => (
				<SurveyItem key={`survey-${index}`} location={location} />
			))}
		</ul>
	)
}

export default SurveyList
