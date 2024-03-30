// src/pages/UrlBook/hooks/useUrlResult.ts
import { useEffect, useState } from 'react'
import { useUrlStore } from '../store'
import { fetchUrlResults } from '../api'
import { IUrlResult } from '../types'

const useUrlResult = () => {
	const { completed_urls } = useUrlStore()
	const [urlData, setUrlData] = useState<IUrlResult | null>(null)

	useEffect(() => {
		const fetchResults = async () => {
			try {
                const responses = await Promise.all(
                    completed_urls.map((urlItem) =>
                        fetchUrlResults(urlItem.url_id)
                            .then(response => response.data)
                    )
                );
				const resultData: IUrlResult = {}
				responses.forEach((response, index) => {
					const key = `URL${completed_urls[index].url_id}`
					resultData[key] = response
				})
				setUrlData(resultData)
			} catch (error) {
				console.error('데이터를 불러오는 중 오류 발생:', error)
			}
		}

		if (completed_urls.length > 0) {
			fetchResults()
		}
	}, [completed_urls])

	return { urlData }
}

export default useUrlResult
