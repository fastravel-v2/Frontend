import { useEffect } from 'react'
import { useUrlStore } from '../store'

const UrlUpdater = () => {
	const addCompletedUrl = useUrlStore((state) => state.addCompletedUrl)
	const removeSendingUrl = useUrlStore((state) => state.removeSendingUrl)
	const BASE_URL = 'https://j10d204.p.ssafy.io:8000'


	useEffect(() => {
		//수정: 서버 SSE 엔드포인트 URL 입력
		//'url' 보내주세요
		const eventSource = new EventSource(`${BASE_URL}/SSE모시기`)

		eventSource.onmessage = (event) => { // 서버에서 메시지를 받을 때마다 호출
			const data = JSON.parse(event.data) // event.data에 담겨있고 Json 형태로 파싱

			// 데이터의 상태가 'True'인 경우에만 스토어 업데이트
			if (data.status === 'True') {
				addCompletedUrl(data)
				removeSendingUrl(data.url_id)
			}
		}

		return () => {
			eventSource.close()
		}
	}, [addCompletedUrl])

	return null // 이 컴포넌트는 UI를 렌더링하지 않음
}

export default UrlUpdater
