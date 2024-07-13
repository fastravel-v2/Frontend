import { useEffect, useRef } from 'react'
import { useMyLocationMemoMutation } from 'src/pages/MyPage/query'

interface MemoModalProps {
	requestId: string
	onClose: () => void
	memoText: string | null
}

const MemoModal = ({
	requestId,
	onClose,
	memoText, // 기존 정보를 띄울지 여부에서 사용
}: MemoModalProps) => {
	const { mutate: memoMutate, isSuccess } = useMyLocationMemoMutation()
	const memoRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (isSuccess) {
			onClose()
		}
	}, [isSuccess])

	const handleSaveMemo = async () => {
		const inputText = memoRef.current?.value
		if (!inputText) return alert('메모를 입력해주세요')

		memoMutate({ locationId: requestId, memoText: inputText })
	}

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
			<div className="fixed inset-0 transition-opacity">
				<button
					className="absolute inset-0 bg-black opacity-50"
					onClick={onClose}
				></button>
			</div>
			<div className="relative z-30 bg-white rounded-lg h-[284px] w-[300px] p-4">
				<h3 className="mb-4 text-base font-semibold">메모 추가하기</h3>
				<hr />
				<textarea
					className="mt-4 mb-2 h-[140px] w-[268px] text-sm p-4 bg-lightGray4 rounded resize-none outline-none focus:outline-none"
					placeholder="메모를 작성해주세요"
					ref={memoRef}
				>
					{memoText && memoText.length > 0 && memoText}
				</textarea>
				<div className="flex justify-between">
					<button
						className="w-32 h-10 text-xs font-bold rounded bg-lightGray4"
						onClick={onClose}
					>
						취소
					</button>
					<button
						className="w-32 h-10 text-xs font-bold text-white rounded bg-green1"
						onClick={handleSaveMemo}
					>
						저장하기
					</button>
				</div>
			</div>
		</div>
	)
}

export default MemoModal
