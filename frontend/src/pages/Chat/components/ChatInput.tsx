// src/pages/Chat/components/ChatInput.tsx

import React, { useState } from 'react'
import { useChatStore } from '../store'
import ChatFunctionModal from './ChatFunctionModal'

const ChatInput: React.FC = () => {
	const [input, setInput] = useState('')
	const addMessage = useChatStore((state) => state.addMessage)
	const [isModalOpen, setIsModalOpen] = useState(false)

	// 메시지 전송 이벤트
	const handleSend = () => {
		if (input.trim()) {
			addMessage('User', input)
			setInput('')
			// scrollToBottom() // 필요가 없는뎅 useEffect로 Cha
		}
	}

	// 엔터키를 눌렀을 때의 이벤트 핸들러
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSend()
		}
	}

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const triggerImageInput = () => {
		document.getElementById('image-upload')!.click()
	}

	const triggerVideoInput = () => {
		document.getElementById('media-upload')!.click()
	}

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				// 파일 읽기 성공 시, 이미지 URL로 메시지 추가
				const imageUrl = reader.result as string
				addMessage('User', imageUrl, 'image') // 'image' 타입으로 메시지를 추가합니다.
			}
			reader.readAsDataURL(file)
		}
	}

	const handleMediaSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			// 비디오 파일 크기나 타입을 검사하는 로직을 여기에 추가할 수 있습니다.
			if (file.size > 1000000) {
				alert('비디오 파일은 1MB 이하로 제한됩니다.')
				return // 파일 크기가 1MB를 초과하면 여기서 함수 종료
			}
			const reader = new FileReader()
			reader.onload = () => {
				// 파일 읽기 성공 시, 비디오 URL로 메시지 추가
				const mediaUrl = reader.result as string
				addMessage('User', mediaUrl, 'video') // 'video' 타입으로 메시지를 추가합니다.
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className="flex w-full">
			<button onClick={toggleModal} className="bg-transparent border-none p-0">
				<img
					src={'../src/assets/mushroom.gif'}
					alt="Open Modal"
					className="w-[32px] h-8"
				/>
			</button>
			<div>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyDown}
					className="border-2 border-gray-300 py-2 px-4 rounded-lg mx-2"
					placeholder="주황버섯을 눌러 초록버섯 보기"
				/>
				<button
					onClick={handleSend}
					className="bg-blue-500 text-white px-3 rounded-lg"
				>
					Send
				</button>
			</div>
			{isModalOpen && (
				<ChatFunctionModal
					onImageSend={triggerImageInput}
					onVideoSend={triggerVideoInput}
					closeModal={closeModal}
				/>
			)}
			<input
				type="file"
				accept="image/*" // 이미지만 나와요
				id="image-upload"
				style={{ display: 'none' }}
				onChange={handleFileSelect}
			/>
			<input
				type="file"
				id="media-upload" // ID를 변경하여 이미지와 구분할 수 있도록 함
				style={{ display: 'none' }}
				accept="video/*" // 비디오 파일만 선택하도록 변경
				onChange={handleMediaSelect} // 파일 선택 시 처리할 이벤트 핸들러 변경
			/>
		</div>
	)
}

export default ChatInput
