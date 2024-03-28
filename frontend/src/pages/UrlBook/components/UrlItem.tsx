// src/pages/UrlBook/components/UrlItem.tsx

import React, { useEffect, useState } from 'react'
import { UrlItem as UrlItemType } from '../store'
import { useUrlStore } from '../store'
import fetchUrlInfo from '../utils/fetchUrlInfo'

// UrlItemType에 index 속성을 추가합니다.
// store에 직접 index를 넣을수는 없으니까 ..
interface UrlItemTypeWithIndex extends UrlItemType {
	index: number
	url_id: number
}
const UrlItem: React.FC<UrlItemTypeWithIndex> = ({
	index,
	url,
	checked,
	url_id,
}) => {
	const [urlInfo, setUrlInfo] = useState<{
		title: string
		description: string
		image: string
	} | null>(null)

	const toggleCheck = useUrlStore((state) => state.toggleCheck)

	useEffect(() => {
		const loadUrlInfo = async () => {
			try {
				const data = await fetchUrlInfo(url_id)
				// url에 'naver' 단어가 포함되어 있으면 디폴트 이미지 값을 사용
				if (url.includes('naver')) {
					setUrlInfo({
						...data,
						image: '디폴트 이미지 URL을 여기에 넣으세요', // 디폴트 이미지 값
					})
				} else {
					setUrlInfo(data)
				}
				console.log(data)
			} catch (error) {
				console.error('URL 정보 로딩 실패:', error)
			}
		}

		loadUrlInfo()
	}, [url_id, url]) // 의존성 배열에 url을 추가합니다.

	const handleTitleClick = () => {
		// 제목 클릭 시 해당 URL로 이동
		window.open(url, '_blank')
	}

	return (
		<div className="flex items-center px-3 py-1 bg-white rounded shadow mb-2">
			{/* Checkbox */}
			<input
				type="checkbox"
				checked={checked}
				onChange={() => toggleCheck(index)}
				className="form-checkbox h-5px w-5px text-blue-600"
			/>

			{/* Thumbnail */}
			{urlInfo && (
				<img
					src={urlInfo.image}
					alt="image"
					className="w-16 h-16 rounded ml-4 object-cover object-center"
				/>
			)}

			{/* Content */}
			<div className="flex flex-col ml-4">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					onClick={handleTitleClick}
					className="text-lg font-bold line-clamp-1 cursor-pointer"
				>
					{urlInfo?.title || 'Loading...'}
				</a>
				<span className="text-sm text-gray-500 line-clamp-2">
					{urlInfo?.description || 'Loading...'}
				</span>
			</div>
		</div>
	)
}

export default UrlItem
