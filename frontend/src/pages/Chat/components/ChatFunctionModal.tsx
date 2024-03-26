// src/pages/Chat/components/ChatFunctionModal.tsx

//  const ChatFunctionModal = ({ onFileSend, onInviteFriends, closeModal }: { onFileSend: () => void, onInviteFriends: () => void, closeModal: () => void }) => {
const ChatFunctionModal = ({
	onImageSend,
	onVideoSend,
	closeModal,
}: {
	onImageSend: () => void
	onVideoSend: () => void
	closeModal: () => void
}) => {
	const handleAction = (action: () => void) => {
		action()
		closeModal() // This closes the modal after the action
	}

	// 모달 바깥 영역 클릭 시 모달 닫기
	const handleOutsideClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (event.target === event.currentTarget) {
			closeModal()
		}
	}

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
			onClick={handleOutsideClick} // 모달 바깥 영역 클릭 이벤트
		>
			<button className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-lg">
				<div className="flex">
					<div className="flex items-center justify-center w-36 bg-green-200 p-2 rounded-lg m-2">
						<img
							src="../src/assets/mushroom-green.gif"
							alt="Album"
							className="w-8 h-8"
							onClick={() => handleAction(onImageSend)}
						/>
						<span className="ml-2">버섯을눌러서강호동추가</span>{' '}
					</div>
					<div className="flex items-center justify-center w-36 bg-green-200 p-2 rounded-lg m-2">
						<img
							src="../src/assets/mushroom-bbool.gif"
							alt="Album"
							className="w-8 h-8"
							onClick={() => handleAction(onVideoSend)}
						/>
						<span className="ml-2">버섯을눌러서비디오추가</span>{' '}
					</div>
				</div>
			</button>
		</div>
	)
}

export default ChatFunctionModal
