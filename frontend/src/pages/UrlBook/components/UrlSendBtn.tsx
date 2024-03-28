// src/pages/UrlBook/components/UrlSendBtn.tsx

// import React from 'react';
import { useNavigate } from 'react-router-dom' // useNavigate를 import합니다.
import { useUrlStore } from '../store'

export const UrlSendBtn = () => {
	const navigate = useNavigate() // useNavigate 훅을 사용해 navigate 함수를 가져옵니다.

	const { urls, selectAllUrls, unSelectAllUrls } = useUrlStore((state) => ({
		urls: state.urls,
		selectAllUrls: state.selectAllUrls,
		unSelectAllUrls: state.unSelectAllUrls,
	}))

	//수정: return으로 한번에 안되나 ?

	const countCheckedUrls = () => {
		return urls.filter((url) => url.checked).length
	}

	const checkedCount = countCheckedUrls()

	const handleButtonClick = () => {
		navigate('/urlbook/result') // '/url-result' 경로로 이동하는 함수를 실행합니다.
	}

	const handleSelectAllButtonClick = () => {
		selectAllUrls() // 전체 선택 함수 호출
	}
	const handleUnSelectAllButtonClick = () => {
		unSelectAllUrls() // 전체 선택 함수 호출
	}

	//수정: 전체 선택, 전체 선택 해제 추가
	return (
		<div>
			{urls.length === 0 ? (
				<div></div>
			) : checkedCount === 0 ? (
				<div className="flex justify-end">
					{' '}
					{/* justify-end를 사용하여 오른쪽 정렬 */}
					<button
						className="font-bold py-2 px-4 rounded text-gray-500"
						onClick={handleSelectAllButtonClick} // 전체 선택 버튼 클릭 시 함수 호출
					>
						전체 선택
					</button>
				</div>
			) : (
				<div className="flex justify-between">
					<button
						className="font-bold py-2 px-4 rounded"
						onClick={handleButtonClick} // 버튼 클릭 시 handleButtonClick 함수를 호출합니다.
					>
						[URL Send]
					</button>
					<button
						className="font-bold py-2 px-4 rounded text-gray-500"
						onClick={handleUnSelectAllButtonClick} // 버튼 클릭 시 handleButtonClick 함수를 호출합니다.
					>
						전체 선택 해제
					</button>
				</div>
			)}
		</div>
	)
}
