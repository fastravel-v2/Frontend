// src/pages/UrlBook/hooks/useFetchUrls.ts

import { useEffect } from 'react'
import { fetchUrls } from 'src/pages/UrlBook/dummyData/urlDummy'
import { useUrlStore } from '../store'

const useFetchUrls = () => {
	const addUrls = useUrlStore((state) => state.addUrls)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const repositoryId = '저장소 번호 선택';
				const urlEntries = await fetchUrls(repositoryId);
				const urls = urlEntries.map(entry => entry.url);
				addUrls(urls)
			} catch (error) {
				console.error('Error fetching URLs:', error)
			}
		}

		fetchData()
	}, [addUrls]) // addUrls를 의존성 배열에 추가하여 이 값이 변경될 때마다 useEffect가 실행되도록 합니다.

	// 만약 추가적인 로직이 필요하다면 필요한 로직을 구현할 수 있습니다.

	return null // 커스텀 훅에서 반환할 값이 필요하지 않은 경우 null을 반환합니다.
}

export default useFetchUrls
