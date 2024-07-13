import { useRouter } from 'src/hooks/useRouter'
import { postSurveyIds } from '../api'
import { useSurveyItems } from '../store'

const SurveySubmit = () => {
	const { surveyItems } = useSurveyItems()
	const { routeTo } = useRouter()

	const handleSubmitSurveyIds = async () => {
		if (surveyItems.length !== 3) {
			alert('3개를 선택해주세요.')
			return
		}

		const surveyIds = surveyItems.map((surveyItem) => surveyItem.id)
		const submitRes = await postSurveyIds(surveyIds)

		if (submitRes === 'success') {
			routeTo('/')
		} else {
			alert('요청에 실패했습니다. 다시 시도해주세요.')
		}
	}

	return (
		<button
			onClick={handleSubmitSurveyIds}
			className="flex-1 py-4 text-white rounded bg-green1"
		>
			선택 완료
		</button>
	)
}

export default SurveySubmit
