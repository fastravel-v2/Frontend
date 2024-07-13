import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from 'src/utility/apis/user'

export const useCurrentUser = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['currentUser'],
		queryFn: getUserInfo,
	})

	return { data, isLoading, isError }
}
