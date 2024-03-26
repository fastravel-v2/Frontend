// src/apis/urlDummyResult.ts

export interface PlaceInfo {
	img: string
	name: string
	address: string
}

export interface UrlDummyResult {
	[key: string]: PlaceInfo[] // URL1, URL2 등 동적으로 키와 값을 가질 수 있도록 수정
}

const dummyData: UrlDummyResult = {
	'OG TITLE 1': [
		{
			name: '무릉 자전거 도로(환상자전거길 3구간)',
			address: '제주특별자치도 제주시 구좌읍 구좌해안로 237',
			img: 'http://tong.visitkorea.or.kr/cms/resource/54/2661854_image2_1.jpg',
		},
		{
			name: '산방산유람선',
			address: '제주특별자치도 서귀포시 안덕면 화순해안로106번길 16',
			img: 'http://tong.visitkorea.or.kr/cms/resource/59/2740359_image2_1.png',
		},
		{
			name: '제주도 스쿠터 여행사 한라하이킹',
			address: '제주특별자치도 제주시 용두암길 50-1',
			img: 'http://tong.visitkorea.or.kr/cms/resource/92/2394692_image2_1.jpg',
		},
		{
			name: '홍대스타일 게스트하우스',
			address: '서울특별시 마포구 월드컵북로4길 23-3',
			img: '',
		},
		{
			name: '바다위에코끼리',
			address: '제주특별자치도 제주시 한림읍 협재1길 27-6',
			img: 'http://tong.visitkorea.or.kr/cms/resource/11/2756011_image2_1.jpg',
		},
		{
			name: '마리조아펜션',
			address: '경상남도 통영시 용남면 기호바깥길 7-35',
			img: '',
		},
		{
			name: '미스칠',
			address: '제주특별자치도 제주시 일주서로 7831',
			img: 'http://tong.visitkorea.or.kr/cms/resource/13/2758913_image2_1.jpg',
		},
		{
			name: '해파랑길47코스',
			address: '강원특별자치도 고성군 죽왕면 공현진리 187-16',
			img: 'http://tong.visitkorea.or.kr/cms/resource/83/2786583_image2_1.jpg',
		},
		{
			name: '신창풍차해안도로',
			address: '제주특별자치도 제주시 한경면 신창리 1322-1',
			img: 'http://tong.visitkorea.or.kr/cms/resource/27/2665327_image2_1.jpg',
		},
		{
			name: '더풀',
			address: '경상남도 남해군 서면 남서대로1517번길 50',
			img: 'http://tong.visitkorea.or.kr/cms/resource/13/2783913_image2_1.jpg',
		},
	],
	'OG TITLE 2': [
		{
			img: 'https://www.gyeongju.go.kr/upload/content/thumb/20200629/9370955557CC4DA48BAA73BD4F75526A.jpg',
			name: '동궁과 월지',
			address: '경상북도 경주',
		},
		{
			img: 'https://wd.blueone.com/img/03convention/tour_img0101.jpg',
			name: '세계문화 엑스포',
			address: '대한민국 경주',
		},
		{
			img: 'https://a.cdn-hotels.com/gdcs/production132/d234/6dccbffd-89a1-487b-9bd1-bae6f1ad0529.jpg',
			name: '북촌 한옥마을',
			address: '대한민국 서울',
		},
		{
			img: 'https://www.gyeongju.go.kr/upload/content/thumb/20200629/9370955557CC4DA48BAA73BD4F75526A.jpg',
			name: '동궁과 월지',
			address: '경상북도 경주',
		},
		{
			img: 'https://wd.blueone.com/img/03convention/tour_img0101.jpg',
			name: '세계문화 엑스포',
			address: '대한민국 경주',
		},
		{
			img: 'https://a.cdn-hotels.com/gdcs/production132/d234/6dccbffd-89a1-487b-9bd1-bae6f1ad0529.jpg',
			name: '북촌 한옥마을',
			address: '대한민국 서울',
		},
	],
	'OG TITLE 3': [
		{
			img: 'https://www.gyeongju.go.kr/upload/content/thumb/20200629/9370955557CC4DA48BAA73BD4F75526A.jpg',
			name: '동궁과 월지',
			address: '경상북도 경주',
		},
		{
			img: 'https://wd.blueone.com/img/03convention/tour_img0101.jpg',
			name: '세계문화 엑스포',
			address: '대한민국 경주',
		},
		{
			img: 'https://a.cdn-hotels.com/gdcs/production132/d234/6dccbffd-89a1-487b-9bd1-bae6f1ad0529.jpg',
			name: '북촌 한옥마을',
			address: '대한민국 서울',
		},
		{
			img: 'https://www.gyeongju.go.kr/upload/content/thumb/20200629/9370955557CC4DA48BAA73BD4F75526A.jpg',
			name: '동궁과 월지',
			address: '경상북도 경주',
		},
		{
			img: 'https://wd.blueone.com/img/03convention/tour_img0101.jpg',
			name: '세계문화 엑스포',
			address: '대한민국 경주',
		},
		{
			img: 'https://a.cdn-hotels.com/gdcs/production132/d234/6dccbffd-89a1-487b-9bd1-bae6f1ad0529.jpg',
			name: '북촌 한옥마을',
			address: '대한민국 서울',
		},
	],
}

export const fetchUrlResults = async (): Promise<UrlDummyResult> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(dummyData)
		}, 500) // 0.5초 지연을 가정
	})
}
