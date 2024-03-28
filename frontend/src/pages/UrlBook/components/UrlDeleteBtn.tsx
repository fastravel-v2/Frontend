//src/pages/UrlBook/components/UrlDeleteBtn.tsx

import { useUrlStore } from '../store'

const UrlDeleteBtn = () => {
	
	const urls = useUrlStore((state) => state.urls)
	const checkedCount = urls.filter((url) => url.checked).length
	
	// 임시로 하나만 지우는거 ~
	const deleteUrl = useUrlStore((state) => state.deleteUrl)
	
	// const deleteCheckedUrls = useUrlStore((state) => state.deleteCheckedUrls)
	// const handleDelete = () => {
		// 	deleteCheckedUrls()
		// }
		

	const handleDelete = () => {
		const urlToDelete = urls.find((url) => url.checked);
		if (urlToDelete) {
			deleteUrl(urlToDelete.url_id);
		}
	};

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
