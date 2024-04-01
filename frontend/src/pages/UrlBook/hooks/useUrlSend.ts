// src/pages/UrlBook/hooks/useUrlSend.ts
import { calculateUrl } from '../api'
import { useUrlStore } from '../store'

const useUrlSend = () => {
	const { urls, addSendingUrl, unSelectAllUrls } = useUrlStore()

	const sendCheckedUrls = async () => {
		const checkedUrlsId = urls
			.filter((url) => url.checked)
			.map((url) => url.url_id)
			unSelectAllUrls() // 모든 URL 전송 후 모든 체크박스 해제

		try {
			await Promise.all(
				checkedUrlsId.map(async (url_id) => {
					addSendingUrl(url_id)

					const response = await calculateUrl(url_id)
					const data = response.data
					console.log(data)

					// removeSendingUrl
				})
			)
		} catch (error) {
			console.log('보낸URL번호 : ', checkedUrlsId)
			console.error('API 호출 중 오류 발생:', error)
		}
	}

	return { sendCheckedUrls }
}

export default useUrlSend
