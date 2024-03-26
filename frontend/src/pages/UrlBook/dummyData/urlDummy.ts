// src/apis/urlDummy.ts
export interface UrlEntry {
	url: string
	repositoryId: string
}

// 형식 지정해주고 맞는 데이터 설정
// const urlData: UrlData[] = [ // 이건 리스트 형태가 아님
//수정: 수정하면 카테고리 선택한곳에서 다른곳으로 감

interface RepositoryUrls {
	[repositoryId: string]: string[] // repositoryId를 키로 하고 URL 배열을 값으로 갖음
}
const urlData: RepositoryUrls = {
	'repository1': [
		'https://love1977.tistory.com/178'
	],
	'repository2': [
		'https://love1977.tistory.com/178',
		'https://wivern.tistory.com/21',
	],
	'repository3': [
		'https://wivern.tistory.com/21',
		'https://wivern.tistory.com/21',
		'https://wivern.tistory.com/21',
	],
	'repository4': [],
}

// 비동기 함수로 구현, 실제 네트워크 요청을 흉내냅니다.
// export const fetchUrls = async () => {
export const fetchUrls = async (repositoryId: string): Promise<UrlEntry[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const urls = urlData[repositoryId] || [] // 해당 repositoryId의 URL 배열을 가져옴
			const urlEntries = urls.map((url) => ({ url, repositoryId }))
			resolve(urlEntries)
		}, 500) // 0.5초 지연을 가정
	})
}

export const fetchRepositoryIds = async (): Promise<string[]> => {
	return Object.keys(urlData)
}

export const addUrlToRepository = (repositoryId: string, newUrl: string) => {
    // 해당 repositoryId의 URL 배열이 없으면 새 배열을 생성
    if (!urlData[repositoryId]) {
        urlData[repositoryId] = [];
    }
    // 새 URL을 해당 배열에 추가
    urlData[repositoryId].push(newUrl);

    // urlData 객체의 최신 상태를 콘솔에 출력
    console.log('Current urlData state:', urlData);
};