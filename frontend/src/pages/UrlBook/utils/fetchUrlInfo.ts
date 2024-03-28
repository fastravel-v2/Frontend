// src/pages/UrlBook/utils/fetchUrlInfo.ts

import axios from 'axios'

const fetchUrlInfo = async (url_id: number) => {
	const response = await axios.get(
		`http://j10d204.p.ssafy.io:8000/url/info?url_id=${url_id}`,
		{
			headers: {
				Accept: 'application/json',
				INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
			},
		}
	)
	return response.data
}

export default fetchUrlInfo
