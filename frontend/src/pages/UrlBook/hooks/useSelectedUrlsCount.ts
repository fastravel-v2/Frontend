// src/pages/UrlBook/hooks/useSelectedUrlsCount.ts

import { useUrlStore } from '../store'

export const useSelectedUrlsCount = () => {
	const urls = useUrlStore((state) => state.urls)
	const selectedCount = urls.filter((url) => url.checked).length
	return selectedCount
}
