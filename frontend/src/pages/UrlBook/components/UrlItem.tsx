//src/pages/UrlBook/components/UrlItem.tsx

import React, { useEffect } from 'react'
import { IUrlItem } from '../types'
import { useUrlStore } from '../store'
import { fetchUrlInfo } from '../api'
import useSingleUrlDelete from '../hooks/useSingleUrlDelete'
import { LoadingPlaneOption } from 'src/assets/lottie/LottieOptions'
import Lottie from 'react-lottie'

interface IUrlItemWithIndex extends IUrlItem {
	index: number // index는 더 이상 사용하지 않으므로 제거해도 좋습니다.
}

const UrlItem: React.FC<IUrlItemWithIndex> = ({
	url,
	checked,
	url_id,
	status,
	error,
}) => {
	const [details, setDetails] = React.useState<IUrlItem | null>(null)
	const { toggleCheck, sendingUrls } = useUrlStore((state) => ({
		toggleCheck: state.toggleCheck,
		sendingUrls: state.sendingUrls,
	}))
	const isSending = sendingUrls.includes(url_id) && status !== true

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUrlInfo(url_id)
			console.log(data) // Remember to remove or comment out logs before production deployment
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

	const handleCheckboxChange = () => {
		toggleCheck(url_id)
	}

	const { handleDelete } = useSingleUrlDelete()
	const onClickDelete = () => handleDelete(url_id)

	return (
		<div className="flex px-3 py-1 items-center bg-white rounded shadow mb-2">
			{!status && !isSending && !error && (
				<input
					type="checkbox"
					checked={checked}
					onChange={handleCheckboxChange}
					className="form-checkbox h-5 w-5 text-blue-600"
				/>
			)}
			{error && <div className="text-red-500 font-bold">X</div>}
			{isSending && (
				<Lottie options={LoadingPlaneOption} height={60} width={30} />
			)}
			{/* Thumbnail */}
			{details && (
				<div className="w-16 h-16 flex justify-center rounded ml-2 overflow-hidden">
					<img
						src={details.image}
						onError={(e) =>
							(e.currentTarget.src = '../src/assets/mushroom-green.gif')
						}
						alt="URL thumbnail"
						className="object-cover h-full"
					/>
				</div>
			)}
			{/* Content */}
			<div className="ml-4 w-[260px]">
				<div className="">
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
