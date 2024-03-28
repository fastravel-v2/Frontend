import { ReactNode } from 'react'
import { useRouter } from '../hooks/useRouter'

interface NavigateButtonProps {
	path: string
	children: ReactNode
	isDisable?: boolean
}
const NavigateButton = ({
	path,
	isDisable = false,
	children,
}: NavigateButtonProps) => {
	const { routeTo } = useRouter()

	const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
	}
	const handlePageMove = () => {
		routeTo(path)
	}

	return (
		// 접근성을 위한 a tag 추가
		<a onClick={handleAnchorClick} className={`w-full `}>
			<button
				onClick={handlePageMove}
				disabled={isDisable}
				className={`fixed bottom-0 w-full text-white text-lg font-bold border-[1px] py-4 rounded-[5px] bg-green1 ${
					isDisable && 'bg-green5 cursor-not-allowed'
				} transition-colors`}
			>
				{children}
			</button>
		</a>
	)
}

export default NavigateButton
