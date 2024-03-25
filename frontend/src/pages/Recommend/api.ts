import { QueryFunctionContext } from '@tanstack/react-query'
import { instance } from 'src/utility/apis/axios'

// const dummyRecommendList = [
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

export const getRecommendList = async ({
	queryKey,
}: QueryFunctionContext): Promise<RecommendItemResInfo[]> => {
	const [, categoryId] = queryKey
	const recommendRes = await instance.get(
		`survey/random_spot?category=${categoryId}&count=4`
	)

	return recommendRes.data
}
