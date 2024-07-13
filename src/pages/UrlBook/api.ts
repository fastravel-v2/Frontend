// src/pages/UrlBook/api.ts

import axios from 'axios'
const BASE_URL = 'https://j10d204.p.ssafy.io/api/core'

export const fetchUrlList = async () => {
	try {
	  const response = await axios.get(`${BASE_URL}/url/list`, {
		headers: { Accept: 'application/json' },
		withCredentials: true,
	  });
	  return response.data;
	} catch (error) {
	  if (axios.isAxiosError(error) && error.response?.status === 404) {
		// 404 오류 발생 시 빈 배열 반환
		return [];
	  }
	  // 그 외의 오류는 여전히 던져짐
	  throw error;
	}
  };

export const fetchUrlInfo = async (url_id: number) => {
	const response = await axios.get(`${BASE_URL}/url/info?url_id=${url_id}`, {
		headers: {
			Accept: 'application/json',
		},
		withCredentials: true,
	})
	return response.data
}

// number 타입의 url_id를 받아서 axios get 요청
export const fetchUrlResults = async (url_id: number) => {
	return axios.get(`${BASE_URL}/url/result/${url_id}`, {
		headers: {
			Accept: 'application/json',
		},
		withCredentials: true,
	})
}

export const deleteUrl = async (urlId: number) => {
	return axios.delete(`${BASE_URL}/url/?url_id=${urlId}`, {
		headers: {
			Accept: 'application/json',
		},
		withCredentials: true,
	})
}

export const addUrl = async (newUrl: string) => {
	return axios.post(`${BASE_URL}/url/`, null, {
		params: { target_url: newUrl },
		headers: {
			Accept: 'application/json',
		},
		withCredentials: true,
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
			withCredentials: true,
		}
	)
}
