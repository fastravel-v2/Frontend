// src/apis/urlDummy.ts
export interface UrlEntry {
	url: string,
	repositoryId: string,
}

// 형식 지정해주고 맞는 데이터 설정
// const urlData: UrlData[] = [ // 이건 리스트 형태가 아님
//수정: 수정하면 카테고리 선택한곳에서 다른곳으로 감
const urlData: UrlEntry[] = [
	{ url: 'https://m.blog.naver.com/doa_pic/223166821456?isInf=true', repositoryId: 'travel1' },
	{ url: 'https://love1977.tistory.com/178', repositoryId: 'travel2' },
	{ url: 'https://wivern.tistory.com/21', repositoryId: 'travel2' },
	{ url: 'https://wivern.tistory.com/21', repositoryId: 'travel3' },
	{ url: 'https://wivern.tistory.com/21', repositoryId: 'travel3' },
	{ url: 'https://wivern.tistory.com/21', repositoryId: 'travel3' },
	{ url: 'https://wivern.tistory.com/21', repositoryId: 'travel4' },
]

// 비동기 함수로 구현, 실제 네트워크 요청을 흉내냅니다.
// export const fetchUrls = async () => {
export const fetchUrls = async (repositoryId: string): Promise<UrlEntry[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const filteredUrls = urlData.filter(entry => entry.repositoryId === repositoryId);
			resolve(filteredUrls)
		}, 500) // 0.5초 지연을 가정
	})
}


// Url Repository들 뽑아서 들고옴니다
export const fetchRepositoryIds = async (): Promise<string[]> => {
	return [...new Set(urlData.map(entry => entry.repositoryId))];
  }
