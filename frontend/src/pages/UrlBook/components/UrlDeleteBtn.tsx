import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { useUrlStore } from '../store'

const UrlDeleteBtn = () => {
	const queryClient = useQueryClient()

	const urls = useUrlStore((state) => state.urls)
	const checkedCount = urls.filter((url) => url.checked).length

	// 여기에서 useMutation을 임포트하고 초기화합니다.
	const mutation = useMutation<void, unknown, number>(
		(urlId) => {
			return axios.delete(
				`http://j10d204.p.ssafy.io:8000/url/?url_id=${urlId}`,
				{
					headers: {
						Accept: 'application/json',
					},
				}
			)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('urls')
			},
		}
	)
	const handleDelete = () => {
		const urlToDelete = urls.find((url) => url.checked)
		if (urlToDelete) {
			mutation.mutate(urlToDelete.url_id)
		}
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
