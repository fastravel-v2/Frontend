// import { instance } from "src/utility/apis/axios";
import axios from 'axios'
import { LocationDetailType } from './type'

export const getLocationDetail = async (
	id: string
): Promise<LocationDetailType> => {
	// api
	// const locationDetail = await instance.get(`location/${id}`)
	// return locationDetail.data
	try {
		const response = await axios.get(
			`https://j10d204.p.ssafy.io/api/core/spot/${id}`,
			{
				headers: {
					INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
				},
			}
		)
		return response.data
	} catch (error) {
		console.error('error', error)
		throw error
	}
	// console.log(id)
	// return dummyData.data
}
