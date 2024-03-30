import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addUrl } from '../api'

export const useAddUrl = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: addUrl,
		onSuccess: () => {
			// URL 목록을 다시 불러오도록 설정
			queryClient.invalidateQueries({ queryKey: ['urls'] })
		},
	})

	return mutation
}
