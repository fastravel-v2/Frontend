import { useEffect } from 'react'
import { useUrlStore } from '../store'
import useFetchUrlList from '../hooks/useFetchUrlList'

const UrlUpdateByForced: React.FC = () => {
	const { data: urls } = useFetchUrlList()
	const { completed_urls, addCompletedUrl } = useUrlStore()

	useEffect(() => {
		if (urls) {
			urls.forEach((url) => {
				// 이미 completed_urls에 있는 URL인지 확인
				const isDuplicate = completed_urls.some(
					(completedUrl) => completedUrl.url_id === url.url_id
				)
				if (!isDuplicate && url.status === 'True') {
					addCompletedUrl(url)
				}
			})
		}
	}, [urls, completed_urls, addCompletedUrl])

	return null
}

export default UrlUpdateByForced
