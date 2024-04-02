import React from 'react'
import useUrlSend from '../hooks/useUrlSend'
// import { useUrlStore } from '../store'

const UrlSendButton: React.FC = () => {
	const { sendCheckedUrls } = useUrlSend()
	// const { urls } = useUrlStore()
	// const checkedCount = urls.filter((url) => url.checked).length

	return (
		<div className="flex justify-between items-center pl-4 pr-4 pt-2">
			<button
				className="text-gray-500 font-medium focus:outline-none"
				onClick={sendCheckedUrls}
			>
				{/* 선택된 URL({checkedCount}) 보내기 */}
				선택된 URL 보내기
			</button>
		</div>
	)
}

export default UrlSendButton
