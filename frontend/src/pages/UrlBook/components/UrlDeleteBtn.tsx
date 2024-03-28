//src/pages/UrlBook/components/UrlDeleteBtn.tsx

import { useUrlStore } from '../store'

const UrlDeleteBtn = () => {
	const deleteCheckedUrls = useUrlStore((state) => state.deleteCheckedUrls)
	const urls = useUrlStore((state) => state.urls)
	const checkedCount = urls.filter((url) => url.checked).length

	const handleDelete = () => {
		deleteCheckedUrls()
	}

	return (
		<div className="pt-2">
			<div>
				<div className="flex justify-between items-center pl-4 pr-4">
					{urls.length === 0 ? (
						<div></div>
					) : checkedCount === 0 ? (
						<div className="text-gray-500">URL을 선택해주세요</div>
					) : (
						<div className="text-gray-500">선택 ({checkedCount})</div>
					)}
					{checkedCount > 0 && (
						<button
							className="text-gray-500 font-medium rounded-md w-24 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
							onClick={handleDelete}
						>
							삭제하기
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default UrlDeleteBtn
