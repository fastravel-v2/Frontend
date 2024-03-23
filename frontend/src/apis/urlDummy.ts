// src/apis/urlDummy.ts
export interface UrlData {
  url: string;
}
// 형식 정의하고

// 형식 지정해주고 맞는 데이터 설정
// const urlData: UrlData[] = [ // 이건 리스트 형태가 아님
const urlData: string[] = [
  'https://blog.naver.com/davi-kim/223147828181',
  'https://love1977.tistory.com/178', 
];
  


// 비동기 함수로 구현, 실제 네트워크 요청을 흉내냅니다.
// export const fetchUrls = async () => {
export const fetchUrls = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(urlData);
    }, 500); // 0.5초 지연을 가정
  });
};


