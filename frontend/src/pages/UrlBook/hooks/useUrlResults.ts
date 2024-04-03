import { useEffect, useRef, useState } from 'react'
import { useUrlStore } from '../store'
import { fetchUrlResults } from '../api'
import { IPlaceSectionProps } from 'src/components/PlaceSection'

// PlaceSection 공통 컴포넌트로 쓰려면
// 나한테 필요한 url.title은 밖으로 빼야겠네
interface IUrlResultWithTitles extends IPlaceSectionProps {
	title: string // 각 URL 섹션의 제목
}
const useUrlResult = () => {
	const { completed_urls } = useUrlStore()
	console.log(completed_urls)
	const [urlResultData, setUrlResultData] = useState<IUrlResultWithTitles[]>([])
	const fetchedUrlIdsRef = useRef<number[]>([])

	useEffect(() => {
		// 컴포넌트가 마운트될 때마다 또는 completed_urls가 변경될 때마다 실행될 로직:
		// 상태와 ref를 초기화합니다.
		setUrlResultData([])
		fetchedUrlIdsRef.current = []

		const fetchResults = async () => {
			// 이미 존재하는 제목을 가진 URL은 제외하고 새로운 URL만 필터링합니다.
			const newUrls = completed_urls.filter(
				(url) => !fetchedUrlIdsRef.current.includes(url.url_id)
			)

			if (newUrls.length === 0) {
				return
			}

			try {
				const responses = await Promise.all(
					newUrls.map(async (url) => {
						const response = await fetchUrlResults(url.url_id)
						return {
							title: url.title || '',
							places: response.data,
						}
					})
				)

				// 기존 데이터에 새로운 데이터를 추가합니다.
				setUrlResultData(responses) // 수정: 누적 대신 새 데이터로 설정

				fetchedUrlIdsRef.current = newUrls.map((url) => url.url_id)
			} catch (error) {
				console.error('데이터를 불러오는 중 오류 발생:', error)
			}
		}

		fetchResults()
	}, []) // completed_urls가 변경될 때마다 useEffect 실행

	return { urlResultData }
}

export default useUrlResult
