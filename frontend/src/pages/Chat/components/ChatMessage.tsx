import React from 'react'
import { ChatMessage as ChatMessageType } from '../dummy/ChatDummyData'

interface ChatMessageProps {
	message: ChatMessageType
	previousMessage: ChatMessageType | null
	nextMessage: ChatMessageType | null
}

const ChatMessage: React.FC<ChatMessageProps> = ({
	message,
	previousMessage,
	nextMessage,
}) => {
	const isUserMessage = message.sender === 'User'

	// 이전 메시지와 다음 메시지가 같은 사용자에 의해 보내졌는지 확인
	const isPreviousSameUser =
		previousMessage && previousMessage.sender === message.sender

	// 다음 메시지가 같은 사용자에 의해 같은 시간에 보내졌는지 확인
	const isNextSameUserAndTime =
		nextMessage &&
		nextMessage.sender === message.sender &&
		nextMessage.timestamp === message.timestamp

	// 닉네임과 시간 표시 여부 결정
	const showNickname = !isUserMessage && !isPreviousSameUser
	// 다음 메시지가 같은 시간에 같은 사용자에 의해 보내졌는 경우를 제외하고 시간 표시
	const showTime = !isNextSameUserAndTime

	const profileImagePath = `src/assets/profileImage/${message.profileImage}`

	return (
		<div
			className={`flex ${
				isUserMessage ? 'flex-row-reverse' : 'flex-row'
			} items-end px-2 py-1 w-full`}
		>
			<div
				className={`flex flex-col ${
					isUserMessage ? 'items-end' : 'items-start'
				} w-full`}
			>
				{showNickname && (
					<div className="flex items-center mt-2">
						<img
							src={profileImagePath}
							alt={`${message.sender}'s profile`}
							className="w-10 h-10 rounded-xl mb-2 mr-2"
						/>
						<div className="text-sm text-gray-600 mt-3">{message.sender}</div>
					</div>
				)}
				<div
					className={`flex ${
						isUserMessage ? 'flex-row-reverse' : ''
					} items-end w-full`}
				>
					<div
						className={`break-words max-w-64 rounded-lg p-2 shadow ${
							isUserMessage ? 'bg-blue-100' : 'bg-white'
						}`}
					>
						{message.content}
					</div>
					{showTime && (
						<div
							className={`text-xs font-light text-gray-400 mx-2 whitespace-no-wrap`}
						>
							{message.timestamp.replace(/ /g, '\u00a0')}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ChatMessage
