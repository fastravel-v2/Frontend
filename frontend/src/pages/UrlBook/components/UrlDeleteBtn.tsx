// src/pages/UrlBook/components/UrlDeleteBtn.tsx
import useUrlDelete from '../hooks/useUrlDelete'

const UrlDeleteBtn = () => {
	const { checkedUrls, handleDelete } = useUrlDelete()
	const checkedCount = checkedUrls.length

	return (
		<div className="pt-2">
			<div>
				<div className="flex justify-between items-center pl-4 pr-4">
					{checkedCount > 0 && (
						<button
							className="text-gray-500 font-medium rounded-md w-24 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
