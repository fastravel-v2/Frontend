import axios from 'axios'
import cheerio from 'cheerio'

// URL로부터 Open Graph 데이터를 가져오는 함수
async function fetchOpenGraphData(
	url: string
): Promise<{ title: string; description: string; thumbnail: string } | null> {
	try {
		// 네이버 링크인지 여부 확인
		if (url.includes('@@@@@')) {
			return null
			// // 네이버 API가 있다면 ..?
			// const naverAPIResponse = await axios.get(
			// 	`https://겟하는URL${url}`,
			// 	{
			// 		headers: {
			// 			'X-Naver-Client-Id': 'VilX65Ry3BxbQ_FVtnIC',
			// 			'X-Naver-Client-Secret': 'zVPgUSqJxE',
			// 		},
			// 	}
			// )

			// const data = naverAPIResponse.data

			// // 네이버 API 응답에서 필요한 데이터 추출
			// const title = data.items[0].title
			// const description = data.items[0].description
			// const image = data.items[0].image

			// return {
			// 	title: title || '',
			// 	description: description || '',
			// 	thumbnail: image || '',
			// }
		} else {
			// 일반적인 방법으로 Open Graph 데이터 가져오기
			const response = await axios.get(url)
			const html = response.data
			const $ = cheerio.load(html) as cheerio.Root

			const ogTitle = $('meta[property="og:title"]').attr('content')
			const ogDescription = $('meta[property="og:description"]').attr('content')
			const ogImage = $('meta[property="og:image"]').attr('content')

			return {
				title: ogTitle || '',
				description: ogDescription || '',
				thumbnail: ogImage || '',
			}
		}
	} catch (error) {
		console.error('Error fetching Open Graph data:', error)
		return null
	}
}

export default fetchOpenGraphData
