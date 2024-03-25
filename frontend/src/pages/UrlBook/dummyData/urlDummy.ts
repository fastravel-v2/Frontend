// src/apis/urlDummy.ts
export interface UrlData {
	url: string
}
// 형식 정의하고

// 형식 지정해주고 맞는 데이터 설정
// const urlData: UrlData[] = [ // 이건 리스트 형태가 아님
const urlData: string[] = [
	'https://m.blog.naver.com/doa_pic/223166821456?isInf=true',
	'https://chuimi-life.tistory.com/entry/%EC%A0%9C%EC%A3%BC%EC%97%AC%ED%96%89-%EC%A0%9C%EC%A3%BC%EB%8F%84-%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89-1%ED%83%84',
	'https://love1977.tistory.com/178',
	'https://wivern.tistory.com/21',
]

// 비동기 함수로 구현, 실제 네트워크 요청을 흉내냅니다.
// export const fetchUrls = async () => {
export const fetchUrls = async (): Promise<string[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(urlData)
		}, 500) // 0.5초 지연을 가정
	})
}
