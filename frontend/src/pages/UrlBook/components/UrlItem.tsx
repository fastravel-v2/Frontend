import React, { useEffect, useState } from 'react'
import { useUrlStore } from '../store'
import { IUrlItem } from '../types'
import { fetchUrlInfo } from '../api'
import useSingleUrlDelete from '../hooks/useSingleUrlDelete'
import { FailOption, LoadingPlaneOption } from 'src/assets/lottie/LottieOptions'
import Lottie from 'react-lottie'
import { NoBasic } from 'src/assets/svgs'

interface IUrlItemWithIndex extends IUrlItem {
	index: number // index는 더 이상 사용하지
}

const UrlItem: React.FC<IUrlItemWithIndex> = ({ url_id }) => {
	const urlItem = useUrlStore((state) =>
		state.urls.find((url) => url.url_id === url_id)
	)
	const { toggleCheck, sendingUrls } = useUrlStore()
	const [details, setDetails] = useState<IUrlItem | null>(null)
	// const isSending = sendingUrls.includes(url_id);
	const isSendingWithoutTrue =
		sendingUrls.includes(url_id) && urlItem?.status !== 'True'
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUrlInfo(url_id)
			// console.log(data) // 실제 제품에서는 로그를 제거해야 합니다.
			setDetails(data)
		}
		fetchData()
	}, [url_id])

	const handleTitleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault()
		window.open(urlItem?.url, '_blank')
	}

	const handleCheckboxChange = () => {
		toggleCheck(url_id)
	}

	const { handleDelete } = useSingleUrlDelete()
	const onClickDelete = () => handleDelete(url_id)

	return (
		<div className="flex px-3 py-1 items-center bg-white rounded shadow mb-2">
			{urlItem?.error ? (
				<Lottie options={FailOption} height={24} width={20} />
			) : isSendingWithoutTrue ? (
				<Lottie options={LoadingPlaneOption} height={60} width={20} />
			) : urlItem?.status === 'None' ? (
				<input
					type="checkbox"
					checked={urlItem?.checked}
					onChange={handleCheckboxChange}
					className="form-checkbox h-5 w-5 text-blue-600"
				/>
			) : null}
			{/* Thumbnail */}
			{details && (
				<div className="w-16 h-16 flex justify-center rounded ml-2 overflow-hidden">
					{details.image ? (
						<img
							src={details.image}
							alt="Url thumbnail"
							className="object-cover h-full"
						/>
					) : (
						<NoBasic width="100%" height="100%" />
					)}
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

			{(urlItem?.status === 'True' || urlItem?.status === 'False') && (
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
