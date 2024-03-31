import { useEffect, useState } from 'react'
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
	// 각 URL에 대한 결과 및 해당 URL의 제목을 담을 상태를 정의
	const [urlResultData, setUrlResultData] = useState<IUrlResultWithTitles[]>([])

	useEffect(() => {
		const fetchResults = async () => {
			if (completed_urls.length === 0) {
				return
			}
			try {
				const responses = await Promise.all(
					completed_urls.map(async (url) => {
						const response = await fetchUrlResults(url.url_id)
						return {
							title: url.title || "", // 각 URL의 제목 정보를 추가, 혹시몰라서 UrlItem에 title?로 해놔서 예외처리 해놔야함
							places: response.data,
						}
					})
				)
				setUrlResultData(responses)
			} catch (error) {
				console.error('데이터를 불러오는 중 오류 발생:', error)
			}
		}

		fetchResults()
	}, [completed_urls])

	return { urlResultData }
}

export default useUrlResult
