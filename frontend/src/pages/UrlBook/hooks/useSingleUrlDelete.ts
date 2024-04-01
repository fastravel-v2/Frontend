//src/pages/UrlBook/hooks/useSingleUrlDelete.tsx

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteUrl } from '../api'

const useSingleUrlDelete = () => {
	const queryClient = useQueryClient()

	// useMutation의 첫 번째 인자로 deleteUrl 함수를 직접 전달합니다.
	const mutation = useMutation({
		mutationFn: (urlId: number) => deleteUrl(urlId), // 여기에서 deleteUrl 함수를 호출합니다.
		onSuccess: () => {
			// 'urls'에 대한 쿼리를 무효화합니다.
			// 쿼리 키가 단일 문자열이나 배열이어야 합니다. 여기서는 단일 문자열 'urls'를 사용합니다.
			queryClient.invalidateQueries({ queryKey: ['urls'] })
		},
	})

	const handleDelete = async (urlId: number) => {
		try {
			await mutation.mutateAsync(urlId)
		} catch (error) {
			console.error('Error deleting URL:', error)
		}
	}

	return { handleDelete }
}

export default useSingleUrlDelete
