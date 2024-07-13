// src/store/index.ts

import { create } from 'zustand'
import { ChatMessage, chatDummyData } from './dummy/ChatDummyData' // chatDummyData를 import합니다.

interface ChatStore {
	messages: ChatMessage[] // messages의 타입을 chatDummyData의 타입으로 설정합니다.
	addMessage: (sender: string, content: string, type?: string) => void; // type은 선택적으로. 생략 가능
	deleteMessage: (id: number) => void
}

//수정: utils에 넣어도되나요?
//수정: 날짜별로 채팅 나누기 ?
const getTimeStamp = (): string => {
	const date = new Date()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const ampm = hours >= 12 ? '오후' : '오전'
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
	return `${ampm} ${formattedHours}:${formattedMinutes}`
}

export const useChatStore = create<ChatStore>((set) => ({
	messages: chatDummyData, // chatDummyData를 초기 상태로 사용합니다.
	addMessage: (sender, content, type = 'text') =>
		set((state) => ({
			messages: [
				...state.messages,
				{
					id: state.messages.length + 1,
					sender,
					content,
					profileImage: 'default.jpg',
					timestamp: getTimeStamp(),
					type,
				}, // profileImage와 timestamp를 기본값으로 설정합니다.
			],
		})),
	deleteMessage: (id) =>
		set((state) => ({
			messages: state.messages.filter((message) => message.id !== id),
		})),
}))
