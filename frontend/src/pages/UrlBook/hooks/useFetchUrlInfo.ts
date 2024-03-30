// src/pages/UrlBook/hooks/useFetchUrlInfo.ts

import { useEffect, useState } from 'react'
import { fetchUrlInfo } from '../api' // API 모듈 import
import { IUrlItem } from '../types'

const useFetchUrlInfo = (url_id: number) => {
	const [data, setData] = useState<IUrlItem | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)

			try {
				const response = await fetchUrlInfo(url_id)
				setData(response)
			} catch (error) {
				setError('Error fetching data')
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()

		// Cleanup function
		return () => {}
	}, [url_id])

	return { data, isLoading, error }
}

export default useFetchUrlInfo
