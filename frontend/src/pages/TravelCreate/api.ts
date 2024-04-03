// import axios from 'axios'
import { tokenInstance, tokenMultipartInstance } from 'src/utility/apis/axios'

export const getTravelInfo = async (): Promise<TravelInfoRes[]> => {
	// :: For production api
	const travelInfoRes = await tokenInstance.get(`core/travel/list`)
	// return travelInfoRes.data

	// :: For development api
	// const travelInfoRes = await axios.get(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel/list`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )
	return travelInfoRes.data
}

export const postTravelProfileCreate = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// :: For production api
	const createRes = await tokenMultipartInstance.post(
		'core/travel/',
		profileFormData
	)

	// :: For development api
	// const createRes = await axios.post(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel`,
	// 	profileFormData,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return createRes.status === 200 ? 'success' : 'fail'
}

export const putTravelProfileEdit = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// :: For production api
	const editRes = await tokenMultipartInstance.put(
		'core/travel/',
		profileFormData
	)

	// :: For development api
	// const editRes = await axios.put(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel/`,
	// 	profileFormData,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return editRes.status === 200 ? 'success' : 'fail'
}
