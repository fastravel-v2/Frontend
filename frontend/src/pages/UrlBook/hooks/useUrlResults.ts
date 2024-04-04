import { useEffect, useRef, useState } from 'react'
import { useUrlStore } from '../store'
import { fetchUrlResults } from '../api'
import { IPlaceSectionProps } from 'src/components/PlaceSection'

interface IUrlResultWithTitles extends IPlaceSectionProps {
	title: string // 각 URL 섹션의 제목
}

const useUrlResult = () => {
	const { completed_urls } = useUrlStore()
	const [urlResultData, setUrlResultData] = useState<IUrlResultWithTitles[]>([])
	const fetchedUrlIdsRef = useRef<number[]>([])

	useEffect(() => {
		// 상태와 ref를 초기화합니다.
		setUrlResultData([])

		const fetchResults = async () => {
			const newUrls = completed_urls.filter(
				(url) => !fetchedUrlIdsRef.current.includes(url.url_id)
			)

			if (newUrls.length === 0) {
				return
			}

			try {
				const responses = await Promise.all(
					newUrls.map(async (url) => {
						try {
							const response = await fetchUrlResults(url.url_id)
							return {
								title: url.title || '',
								places: response.data,
							}
						} catch (error) {
							console.error('데이터를 불러오는 중 오류 발생:', error)
							return null // 오류 발생 시 null 반환
						}
					})
				)

				// 오류가 없는 응답만 필터링하여 상태에 저장
				const validResponses = responses.filter(
					(response): response is IUrlResultWithTitles => response !== null
				)
				setUrlResultData(validResponses)
				fetchedUrlIdsRef.current = newUrls.map((url) => url.url_id)
			} catch (error) {
				console.error('데이터를 불러오는 중 오류 발생:', error)
			}
		}

		fetchResults()
	}, [completed_urls]) // completed_urls가 변경될 때마다 useEffect 실행

	return { urlResultData }
}

export default useUrlResult
