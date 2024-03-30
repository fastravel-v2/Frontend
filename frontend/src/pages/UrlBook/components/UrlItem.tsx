// src/pages/UrlBook/components/UrlItem.tsx
import React, { useEffect } from 'react'
import { IUrlItem } from '../types'
import { useUrlStore } from '../store'
import { fetchUrlInfo } from '../api'

interface IUrlItemWithIndex extends IUrlItem {
	index: number
}

const IUrlItemWithIndex: React.FC<IUrlItemWithIndex> = ({
	index,
	url,
	checked,
	url_id,
	status,
}) => {
	const [details, setDetails] = React.useState<IUrlItem | null>(null)
	// const checked = useUrlStore((state) => state.urls[index].checked) // Store의 checked 상태 가져오기
	const toggleCheck = useUrlStore((state) => state.toggleCheck)

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUrlInfo(url_id)
			console.log(data)
			setDetails(data)
		}
		fetchData()
	}, [url_id])

	const handleTitleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault() // 기본 이벤트를 막습니다.
		window.open(url, '_blank')
	}

	const handleCheckboxChange = () => {
		toggleCheck(index) // 체크박스 상태를 변경합니다.
	}

	return (
		<div className="flex items-center px-3 py-1 bg-white rounded shadow mb-2">
			{/* status가 true일 때만 체크박스를 표시 */}
			{!status && (
				<input
					type="checkbox"
					checked={checked}
					onChange={handleCheckboxChange}
					className="form-checkbox h-5 w-5 mr-2 text-blue-600"
				/>
			)}
			{/* Thumbnail */}
			{details && (
				<img
					src={details.image}
					onError={(e) =>
						(e.currentTarget.src = '../src/assets/mushroom-green.gif')
					}
					alt="URL thumbnail"
					className="w-16 h-16 rounded"
				/>
			)}

			{/* Content */}
			<div className="flex flex-col ml-4">
				<a
					href="#!"
					onClick={handleTitleClick}
					className="text-lg font-bold line-clamp-1 cursor-pointer"
				>
					{details ? details.title : 'Loading...'}
				</a>
				<span className="text-sm text-gray-500 line-clamp-2">
					{details ? details.description : 'Loading...'}
				</span>
			</div>
		</div>
	)
}

export default IUrlItemWithIndex
