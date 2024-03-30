import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
import { instance } from 'src/utility/apis/axios'

// const dummysurveyList = [
// 	{
// 		spot_id: '2755809',
// 		name: '궁항',
// 		address: '',
// 		image_url:
// 			'http://tong.visitkorea.or.kr/cms/resource/03/2755803_image2_1.png',
// 	},
// 	{
// 		spot_id: '127263',
// 		name: '계룡산',
// 		address: '',
// 		image_url:
// 			'http://tong.visitkorea.or.kr/cms/resource/81/1978581_image2_1.jpg',
// 	},
// 	{
// 		spot_id: '127433',
// 		name: '강원특별자치도립화목원',
// 		address: '',
// 		image_url:
// 			'http://tong.visitkorea.or.kr/cms/resource/98/2739698_image2_1.jpg',
// 	},
// 	{
// 		spot_id: '2015553',
// 		name: '보문정 (경주)',
// 		address: '',
// 		image_url:
// 			'http://tong.visitkorea.or.kr/cms/resource/09/2654209_image2_1.jpg',
// 	},
// ]

export const getSurveyList = async ({
	queryKey,
}: QueryFunctionContext): Promise<SurveyItemResInfo[]> => {
	const [, categoryId] = queryKey
	console.log('api req key', categoryId, typeof categoryId)

	// :: For production api
	// const surveyRes = await instance.get(
	// 	`survey/random_spot?category=${categoryId}&count=4`
	// )

	// :: For development api
	const surveyRes = await axios.get(
		`${
			import.meta.env.VITE_SURVEY_BASE_URL
		}/survey/random_spot?category=${categoryId}&count=4`,
		{
			headers: {
				'Content-Type': 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
		}
	)

	return surveyRes.data
}

export const postSurveyIds = async (
	surveyIds: string[]
): Promise<'success' | 'fail'> => {
	const surveyRes = await instance.post('survey/selected', surveyIds)
	if (surveyRes.status === 200) {
		return 'success'
	}
	return 'fail'
}
