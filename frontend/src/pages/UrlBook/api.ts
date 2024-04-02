// src/pages/UrlBook/api.ts

import axios from 'axios'
const BASE_URL = 'http://j10d204.p.ssafy.io:8000'

export const fetchUrlList = async () => {
	const response = await axios.get(`${BASE_URL}/url/list`, {
		headers: { Accept: 'application/json',
		INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
	},
	})
	return response.data
}

export const fetchUrlInfo = async (url_id: number) => {
	const response = await axios.get(`${BASE_URL}/url/info?url_id=${url_id}`, {
		headers: {
			Accept: 'application/json',
			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
		},
	})
	return response.data
}

// number 타입의 url_id를 받아서 axios get 요청
export const fetchUrlResults = async (url_id: number) => {
	return axios.get(`${BASE_URL}/url/result/${url_id}`, {
		headers: {
			Accept: 'application/json',
			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
		},
	})
}

export const deleteUrl = async (urlId: number) => {
	return axios.delete(`${BASE_URL}/url/?url_id=${urlId}`, {
		headers: {
			Accept: 'application/json',
		},
	})
}

export const addUrl = async (newUrl: string) => {
	return axios.post(`${BASE_URL}/url/`, null, {
		params: { target_url: newUrl },
		headers: {
			Accept: 'application/json',
			INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
		},
	})
}


export const calculateUrl = async (urlId: number) => {
	return axios.put(
		`${BASE_URL}/url/calculate?url_id=${urlId}`,
		{},
		{
			headers: {
				accept: 'application/json',
			},
		}
	)
}
