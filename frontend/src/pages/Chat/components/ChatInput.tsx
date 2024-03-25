// src/pages/Chat/components/ChatInput.tsx

import React, { useState, useEffect, useRef } from 'react';
import { useChatStore } from '../store';

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);
  const chatListRef = useRef<HTMLDivElement>(null); // 채팅 리스트에 대한 ref 생성


  // 메시지 전송 이벤트
  const handleSend = () => {
    if (input.trim()) {
      addMessage('User', input);
      setInput('');
    }
  };

  // 엔터키를 눌렀을 때의 이벤트 핸들러
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  // 채팅 리스트 스크롤을 가장 아래로 이동하는 함수
  const scrollToBottom = () => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom(); // 메시지 추가 후에 자동으로 스크롤 이동
  }, [chatListRef, input]); // input이 변경될 때마다 스크롤 이동

  return (
    <div className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-2 border-gray-300 p-2 rounded-lg mr-2 w-full"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
    </div>
  );
};

export default ChatInput;