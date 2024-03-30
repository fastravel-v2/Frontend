import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
// import { tokenInstance, tokenMultipartInstance } from 'src/utility/apis/axios'

export const getTravelInfo = async ({
	queryKey,
}: QueryFunctionContext): Promise<TravelInfo> => {
	const [, travelId] = queryKey

	// :: For production api
	// const travelInfoRes = await tokenInstance.get(`travel/info/${travelId}`)
	// return travelInfoRes.data

	// :: For development api
	const travelInfoRes = await axios.get(`core/travel/info/${travelId}`, {
		headers: {
			'Content-Type': 'application/json',
			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
		},
		withCredentials: true,
	})
	return travelInfoRes.data
}

export const putTravelProfileCreate = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// :: For production api
	// const createRes = await tokenMultipartInstance.put(
	// 	'core/travel/create',
	// 	profileFormData
	// )

	// :: For development api
	const createRes = await axios.put(`core/travel/create`, profileFormData, {
		headers: {
			'Content-Type': 'multipart/form-data',
			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
		},
		withCredentials: true,
	})

	return createRes.data
}

export const putTravelProfileEdit = async (
	profileFormData: FormData,
	travelId: number
): Promise<'success' | 'fail'> => {
	// :: For production api
	// const editRes = await tokenMultipartInstance.put(
	// 	'core/travel/create',
	// 	profileFormData
	// )

	// :: For development api
	const editRes = await axios.put(
		`core/travel/edit/${travelId}`,
		profileFormData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
			withCredentials: true,
		}
	)

	return editRes.data
}
