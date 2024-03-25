import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store'
import ChatMessage from './ChatMessage'

const ChatList: React.FC = () => {
	const messages = useChatStore((state) => state.messages)
	const chatListRef = useRef<HTMLDivElement>(null) // 채팅 리스트를 위한 ref

	//수정: 메시지 목록이 변경될 때마다 실행
	// 사진 보내면 로딩되기 전에 이동하려고 해서 상단만 보임
	// 텀 두면 되긴 하는데 자연스럽지 않구만..
	useEffect(() => {
		if (chatListRef.current) {
			chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
			setTimeout(() => {
				if (chatListRef.current) {
					chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
				}
			}, 0.0001);
		}
	}, [messages]);
	return (
		// 채팅 리스트의 ref를 여기에 연결합니다.
		<div ref={chatListRef} className="px-3 overflow-y-auto" style={{ height: '520px' }}>
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
