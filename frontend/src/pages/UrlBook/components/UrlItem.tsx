//src/pages/UrlBook/components/UrlItem.tsx

import React, { useEffect } from 'react'
import { IUrlItem } from '../types'
import { useUrlStore } from '../store'
import { fetchUrlInfo } from '../api'
import useSingleUrlDelete from '../hooks/useSingleUrlDelete'
import { loadingPlaneOption } from 'src/assets/lottie/LottieOptions'
import Lottie from 'react-lottie'

interface IUrlItemWithIndex extends IUrlItem {
	index: number // index는 더 이상 사용하지 않으므로 제거해도 좋습니다.
}

const UrlItem: React.FC<IUrlItemWithIndex> = ({
	url,
	checked,
	url_id,
	status,
}) => {
	const [details, setDetails] = React.useState<IUrlItem | null>(null)
	// toggleCheck를 포함한 여러 상태와 액션을 한 번에 추출합니다.
	const { toggleCheck, sendingUrls } = useUrlStore((state) => ({
		toggleCheck: state.toggleCheck,
		sendingUrls: state.sendingUrls,
		removeUrl: state.removeUrl, // 상태 업데이트를 위한 removeUrl 액션
	}))
	const isSending = sendingUrls.includes(url_id)

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUrlInfo(url_id)
			console.log(data) // 개발 단계에서 확인용 로그, 실제 배포 시에는 제거하는 것이 좋습니다.
			setDetails(data)
		}
		fetchData()
	}, [url_id])

	const handleTitleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault()
		window.open(url, '_blank')
	}

	// 인덱스 대신 url_id를 사용합니다.
	const handleCheckboxChange = () => {
		toggleCheck(url_id) // 변경된 toggleCheck 함수 사용
	}

	const { handleDelete } = useSingleUrlDelete()
	const onClickDelete = () => handleDelete(url_id)

	return (
		<div className="flex items-center px-3 py-1 bg-white rounded shadow mb-2">
			{!status && !isSending && (
				<input
					type="checkbox"
					checked={checked}
					onChange={handleCheckboxChange}
					className="form-checkbox h-5 w-5 mr-2 text-blue-600"
				/>
			)}

			{isSending && (
				<Lottie options={loadingPlaneOption} height={60} width={60} />
			)}
			{/* Thumbnail */}
			{details && (
				<img
					src={details.image}
					onError={(e) =>
						(e.currentTarget.src = '../src/assets/mushroom-green.gif')
					}
					alt="URL thumbnail"
					className="w-16 h-16 rounded ml-2"
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
				<span className="text-sm text-gray-500 line-clamp-1">
					{details ? details.description : 'Loading...'}
				</span>
			</div>

			{status === true && (
				<button
					onClick={onClickDelete}
					className="ml-auto font-bold py-1 px-2 rounded"
				>
					🗑️
				</button>
			)}
		</div>
	)
}

export default UrlItem
