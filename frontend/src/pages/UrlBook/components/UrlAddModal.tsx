// //src/pages/UrlBook/components/UrlAddModalts

// import React, { useState, useRef, useEffect } from 'react'
// import { useUrlStore } from '../store'

// //수정: isOpen을 여기서 지정해야 더 좋은 코드인가 ?
// const UrlAddModal: React.FC<{ doCloseModal: () => void }> = ({
// 	doCloseModal,
// }) => {
// 	const [url, setUrl] = useState('')
// 	const addUrl = useUrlStore((state) => state.addUrl)
// 	const [isInvalidUrl, setIsInvalidUrl] = useState(false)
// 	const urlInputRef = useRef<HTMLTextAreaElement>(null)

// 	useEffect(() => {
// 		if (urlInputRef.current) {
// 			urlInputRef.current.focus()
// 		}
// 	}, [])

// 	const isValidUrl = (urlString: string) => {
// 		const pattern = new RegExp(
// 			'^(https?:\\/\\/)?' +
// 				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
// 				'((\\d{1,3}\\.){3}\\d{1,3}))' +
// 				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
// 				'(\\?[;&a-z\\d%_.~+=-]*)?' +
// 				'(\\#[-a-z\\d_]*)?$',
// 			'i'
// 		)
// 		return !!pattern.test(urlString)
// 	}
// 	const handleSubmit = () => {
// 		let formattedUrl = url
// 		if (!formattedUrl.startsWith('https://')) {
// 			formattedUrl = `https://${formattedUrl}`
// 		}
// 		if (isValidUrl(formattedUrl)) {
// 			addUrl(formattedUrl) // repositoryId 없이 URL 추가
// 			doCloseModal()
// 		} else {
// 			setIsInvalidUrl(true)
// 		}
// 	}

// 	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
// 		if (e.key === 'Enter' && !e.shiftKey) {
// 			e.preventDefault()
// 			handleSubmit()
// 		}
// 	}

// 	return (
// 		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full z-50">
// 			<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
// 				<div className="mt-3 text-center">
// 					<h3 className="text-lg leading-6 font-medium text-gray-900">
// 						URL 입력
// 					</h3>
// 					<div className="mt-2 px-7 py-3">
// 						<textarea
// 							ref={urlInputRef}
// 							className="resize-none border rounded-md w-72 mt-2 text-center"
// 							placeholder="URL 입력"
// 							value={url}
// 							onKeyDown={handleKeyDown}
// 							rows={1}
// 							onChange={(e) => {
// 								setUrl(e.target.value)
// 								setIsInvalidUrl(false)
// 							}}
// 						/>
// 						{isInvalidUrl && (
// 							<p className="text-red-500">올바른 URL 주소가 아닙니다.</p>
// 						)}
// 					</div>
// 					<div className="flex justify-center">
// 						<div className="items-center px-4 py-3">
// 							<button
// 								className="px-4 py-2 bg-green-700 text-white text-base 
//                   font-medium rounded-md w-full shadow-sm hover:bg-blue-700 
//                   focus:outline-none focus:ring-2 focus:ring-blue-300"
// 								onClick={handleSubmit}
// 							>
// 								Add
// 							</button>
// 						</div>
// 						<div className="items-center px-4 py-3">
// 							<button
// 								className="px-4 py-2 bg-white text-base 
//                 font-medium rounded-md w-full shadow-sm hover:bg-gray-100 
//                 focus:outline-none focus:ring-2 focus:ring-blue-300"
// 								onClick={doCloseModal}
// 							>
// 								Cancel
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default UrlAddModal
