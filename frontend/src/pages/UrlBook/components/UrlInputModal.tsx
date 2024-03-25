// src/pages/UrlBook/components/UrlInputModal.tsx
import React, { useState } from 'react'

const UrlInputModal: React.FC<{ onAddUrl: (url: string) => void }> = ({
	onAddUrl,
}) => {
	const [url, setUrl] = useState('')

	const handleAddUrl = () => {
		if (url.trim() !== '') {
			onAddUrl(url.trim())
			setUrl('')
			// 여기에서 모달을 닫는 로직 추가 가능
		}
	}

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
			<div className="bg-white rounded-lg p-8">
				<h2 className="text-xl font-bold mb-4">Add URL</h2>
				<input
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="Enter URL"
					className="border border-gray-300 rounded p-2 mb-4 w-full"
				/>
				<button
					onClick={handleAddUrl}
					className="bg-blue-500 text-white rounded px-4 py-2"
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default UrlInputModal
