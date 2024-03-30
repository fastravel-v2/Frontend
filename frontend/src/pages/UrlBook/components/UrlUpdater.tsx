import { useEffect } from 'react'
import { useUrlStore } from '../store'

const UrlUpdater = () => {
	const addCompletedUrl = useUrlStore((state) => state.addCompletedUrl)

	useEffect(() => {
		const eventSource = new EventSource('서버의 SSE 엔드포인트 URL')

		eventSource.onmessage = (event) => {
			const data = JSON.parse(event.data)

			// 데이터의 상태가 'true'인 경우에만 스토어 업데이트
			if (data.status) {
				addCompletedUrl(data)
			}
		}

		return () => {
			eventSource.close()
		}
	}, [addCompletedUrl])

	return null // 이 컴포넌트는 UI를 렌더링하지 않음
}

export default UrlUpdater
