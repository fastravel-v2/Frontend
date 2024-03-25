// // src/pages/Chat/components/ChatMessage.tsx

// import React from 'react';
// import { ChatMessage as ChatMessageType } from '../dummy/ChatDummyData';

// interface ChatMessageProps {
//   message: ChatMessageType;
//   previousMessage: ChatMessageType | null;
//   nextMessage: ChatMessageType | null;
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({
//   message,
//   previousMessage,
//   nextMessage,
// }) => {
//   const isUserMessage = message.sender === 'User';
  
//   // 메시지 박스 클래스 조정
//   const messageClasses = `max-w-xs lg:max-w-md break-words rounded-lg p-3 shadow ${
//     isUserMessage ? 'bg-blue-100' : 'bg-white'
//   }`;

//   // 시간 레이블 클래스 조정
//   const timeLabelClasses = `text-xs font-light text-gray-400 ${
//     isUserMessage ? 'mr-2' : 'ml-2'
//   }`;

//   return (
//     <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} p-2`}>
//       <div className={`flex ${isUserMessage ? 'flex-row-reverse items-end' : 'flex-row items-end'}`}>
//         {/* 메시지 컨텐츠 */}
//         <div className={messageClasses}>
//           {message.content}
//         </div>
        
//         {/* 시간 레이블 */}
//         <div className={timeLabelClasses}>
//           {message.timestamp}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;
