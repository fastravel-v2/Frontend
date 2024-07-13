// src/pages/UrlBook/components/UrlResultButton.tsx
import React from 'react'
import useUrlBook from '../hooks/useUrlBook'

interface UrlResultButtonProps {
	className?: string // 선택적으로 className을 받아들임
}

const UrlResultButton: React.FC<UrlResultButtonProps> = ({ className }) => {
	const { handleButtonClickToResult } = useUrlBook()

	return (
		<button
			className={`url-result-button ${className}`}
			onClick={handleButtonClickToResult}
		>
			URL 결과보기
		</button>
	)
}

export default UrlResultButton
