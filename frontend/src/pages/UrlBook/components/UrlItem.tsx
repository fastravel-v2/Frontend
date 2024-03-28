// src/pages/UrlBook/components/UrlItem.tsx
import React from 'react'
import { UrlItem as UrlItemType } from '../store'
import { useUrlStore } from '../store'

interface UrlItemTypeWithIndex extends UrlItemType {
	index: number
}

const UrlItemTypeWithIndex: React.FC<UrlItemTypeWithIndex> = ({
	index,
	url,
	checked,
	// url_id,
	title, // URL 제목
	description, // URL 설명
	image, // URL 이미지
}) => {
	const toggleCheck = useUrlStore((state) => state.toggleCheck)

	const handleTitleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault() // 기본 이벤트를 막습니다.
		window.open(url, '_blank')
	}
	return (
		<div className="flex items-center px-3 py-1 bg-white rounded shadow mb-2">
			{/* Checkbox */}
			<input
				type="checkbox"
				checked={checked}
				onChange={() => toggleCheck(index)}
				className="form-checkbox h-5 w-5 text-blue-600"
			/>

			{/* Thumbnail */}
			<img
				src={image}
				onError={(e) =>
					(e.currentTarget.src = '../src/assets/mushroom-green.gif')
				}
				alt="URL thumbnail"
				className="w-16 h-16 rounded ml-4 object-cover object-center"
			/>

			{/* Content */}
			<div className="flex flex-col ml-4">
				<a
					href="#!"
					onClick={handleTitleClick}
					className="text-lg font-bold line-clamp-1 cursor-pointer"
				>
					{title || 'Loading...'}
				</a>
				<span className="text-sm text-gray-500 line-clamp-2">
					{description || 'Loading...'}
				</span>
			</div>
		</div>
	)
}

export default UrlItemTypeWithIndex
