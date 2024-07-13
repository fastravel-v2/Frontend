import { useEffect, useState } from 'react'
import { useHasValidTokenStore } from 'src/store/stores/useHasValidToken'
import { getHasValidToken } from 'src/utility/apis/user'

export const useCheckHasValidToken = () => {
	const { hasValidToken, setCheckResult } = useHasValidTokenStore()
	const [loading, setLoading] = useState(true)

	const checkToken = async () => {
		const checkTokenResult = await getHasValidToken()
		setCheckResult(checkTokenResult)
		setLoading(false)
	}

	useEffect(() => {
		checkToken()
	}, [setCheckResult])

	return { hasValidToken, loading }
}
