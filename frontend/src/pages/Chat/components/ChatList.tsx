import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store'
import ChatMessage from './ChatMessage'

const ChatList: React.FC = () => {
	const messages = useChatStore((state) => state.messages)
	const chatListRef = useRef<HTMLDivElement>(null) // 채팅 리스트를 위한 ref

	// 메시지 목록이 변경될 때마다 실행
	useEffect(() => {
		if (chatListRef.current) {
			chatListRef.current.scrollTop = chatListRef.current.scrollHeight
		}
	}, [messages]) // messages 상태가 변경될 때마다 useEffect가 트리거됩니다.

	return (
		// 채팅 리스트의 ref를 여기에 연결합니다.
		<div ref={chatListRef} className="p-3 overflow-y-auto" style={{ height: '500px' }}>
			{messages.map((message, index) => (
				<ChatMessage
					key={message.id}
					message={message}
					previousMessage={index > 0 ? messages[index - 1] : null}
					nextMessage={index < messages.length - 1 ? messages[index + 1] : null}
				/>
			))}
		</div>
	)
}

export default ChatList
