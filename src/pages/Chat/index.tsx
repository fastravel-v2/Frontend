import ChatInput from './components/ChatInput'
import ChatList from './components/ChatList'

export const Chat = () => {
	return (
		<div className="min-h-screen bg-green2 flex flex-col">
			<h1 className="text-center text-2xl font-bold p-4">숨이가빠메이데이 타타타타타</h1>
			{/* ChatList occupies the remaining space and is scrollable */}
			<div className="flex-grow overflow-auto">
				<ChatList />
			</div>
			{/* ChatInput is at the bottom */}
			<div className="p-4">
				<ChatInput />
			</div>
		</div>
	)
}

export default Chat
