import { useQueryClient } from '@tanstack/react-query'
import { categoryInfo } from 'src/utility/constants/location'

const SurveyRefresh = () => {
	const queryClient = useQueryClient() // React Query Client 인스턴스를 가져옴

	const handleClickRefresh = () => {
		console.log('click')
		Object.values(categoryInfo).forEach((categoryId) => {
			queryClient.refetchQueries({ queryKey: ['surveyList', categoryId] })
		})
	}

	return (
		<button
			type="button"
			onClick={handleClickRefresh}
			className="py-4 bg-white rounded text-green1 flex-3"
		>
			새로고침
		</button>
	)
}

export default SurveyRefresh
