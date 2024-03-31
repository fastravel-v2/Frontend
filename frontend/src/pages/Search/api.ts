import axios from 'axios'

export const getSearchedLocation = async (
	searchText: string
): Promise<SearchLocationInfo[]> => {
	// :: For production api
	// const surveyRes = await instance.get(
	// 	`survey/random_spot?category=${categoryId}&count=4`
	// )

	// :: For development api
	const searchRes = await axios.get(
		`${
			import.meta.env.VITE_SEARCH_BASE_URL
		}/search/auto-complete?query=${searchText}`,
		{
			headers: {
				'Content-Type': 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
		}
	)

	return searchRes.data
}
