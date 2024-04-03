// import axios from 'axios'
import { instance, tokenInstance } from 'src/utility/apis/axios'

export const getSearchedLocation = async (
	searchText: string
): Promise<SearchLocationInfo[]> => {
	// :: For production api
	const searchRes = await instance.get(
		`/core/search/auto-complete?query=${searchText}`
	)

	// :: For development api
	// const searchRes = await axios.get(
	// 	`${
	// 		import.meta.env.VITE_SEARCH_BASE_URL
	// 	}/search/auto-complete?query=${searchText}`,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 	}
	// )

	return searchRes.data
}

export const postLocationToTravelPlan = async (
	locationId: string,
	travelId: string,
	selectedDate: string
): Promise<'success' | 'fail'> => {
	// :: For production api
	const updateRes = await tokenInstance.post(`/core/travel/add-spot-to-plan`, {
		spotId: locationId,
		planId: travelId,
		date: selectedDate,
	})

	// :: For development api
	// const updateRes = await axios.post(
	// 	`${import.meta.env.VITE_CORE_BASE_URL}/travel/add-spot-to-plan`,
	// 	{
	// 		spotId: locationId,
	// 		planId: travelId,
	// 		date: selectedDate,
	// 	},
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	// 		},
	// 		withCredentials: true,
	// 	}
	// )

	return updateRes.status === 200 ? 'success' : 'fail'
}
