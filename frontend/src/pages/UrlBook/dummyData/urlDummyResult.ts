// src/apis/urlDummyResult.ts

export interface PlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

export interface UrlDummyResult {
	[key: string]: PlaceInfo[] // URL1, URL2 등 동적으로 키와 값을 가질 수 있도록 수정
}

const dummyData: UrlDummyResult = {
	'유럽패키지여행 완전 솔직한 후기': [
		{
			spot_id: '2699359',
			name: '홍대스타일 게스트하우스',
			address: '서울특별시 마포구 월드컵북로4길 23-3',
			image_url: '',
		},
		{
			spot_id: '2782873',
			name: 'SADDLER HAUS 제주애월점',
			address: '제주특별자치도 제주시 애월읍 애월로1길 24-15',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/73/2792973_image2_1.jpg',
		},
		{
			spot_id: '1374717',
			name: '장군일식',
			address: '전라남도 광양시 발섬4길 22',
			image_url: '',
		},
		{
			spot_id: '2376250',
			name: '제 30회 서울디저트페어 [초코&바나나전]',
			address: '서울특별시 강남구 남부순환로 3104 SETEC',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/55/2987455_image2_1.jpg',
		},
		{
			spot_id: '2755913',
			name: '하우스레서피',
			address: '제주특별자치도 제주시 한림읍 일주서로 5892',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/36/2756036_image2_1.jpg',
		},
		{
			spot_id: '2431632',
			name: '갓잇(god eat)',
			address: '서울특별시 송파구 백제고분로45길 4-14',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/25/2431625_image2_1.jpg',
		},
		{
			spot_id: '2766490',
			name: '겟댓샷(Get That Shot)',
			address: '서울특별시 영등포구 경인로 846',
			image_url: '',
		},
		{
			spot_id: '2759629',
			name: '디저트시네마',
			address: '부산광역시 연제구 쌍미천로 32-1',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/19/2759819_image2_1.jpg',
		},
		{
			spot_id: '2605884',
			name: '[백년가게]민들레',
			address: '광주광역시 서구 상무평화로 137',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/16/2606416_image2_1.jpg',
		},
		{
			spot_id: '2642681',
			name: '카페 385',
			address: '부산광역시 영도구 태종로 539',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/88/2642688_image2_1.jpg',
		},
	],
	'여행 인플루언서 선정 후기와 맛집 블로거에서 바꾼 방법': [
		{
			spot_id: '2699359',
			name: '홍대스타일 게스트하우스',
			address: '서울특별시 마포구 월드컵북로4길 23-3',
			image_url: '',
		},
		{
			spot_id: '2782873',
			name: 'SADDLER HAUS 제주애월점',
			address: '제주특별자치도 제주시 애월읍 애월로1길 24-15',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/73/2792973_image2_1.jpg',
		},
		{
			spot_id: '1374717',
			name: '장군일식',
			address: '전라남도 광양시 발섬4길 22',
			image_url: '',
		},
		{
			spot_id: '2376250',
			name: '제 30회 서울디저트페어 [초코&바나나전]',
			address: '서울특별시 강남구 남부순환로 3104 SETEC',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/55/2987455_image2_1.jpg',
		},
		{
			spot_id: '2755913',
			name: '하우스레서피',
			address: '제주특별자치도 제주시 한림읍 일주서로 5892',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/36/2756036_image2_1.jpg',
		},
		{
			spot_id: '2431632',
			name: '갓잇(god eat)',
			address: '서울특별시 송파구 백제고분로45길 4-14',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/25/2431625_image2_1.jpg',
		},
		{
			spot_id: '2766490',
			name: '겟댓샷(Get That Shot)',
			address: '서울특별시 영등포구 경인로 846',
			image_url: '',
		},
		{
			spot_id: '2759629',
			name: '디저트시네마',
			address: '부산광역시 연제구 쌍미천로 32-1',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/19/2759819_image2_1.jpg',
		},
		{
			spot_id: '2605884',
			name: '[백년가게]민들레',
			address: '광주광역시 서구 상무평화로 137',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/16/2606416_image2_1.jpg',
		},
		{
			spot_id: '2642681',
			name: '카페 385',
			address: '부산광역시 영도구 태종로 539',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/88/2642688_image2_1.jpg',
		},
	],
	'경주여행) 작년 가을 다녀온 1박2일 경주여행 후기': [
		{
			spot_id: '2699359',
			name: '홍대스타일 게스트하우스',
			address: '서울특별시 마포구 월드컵북로4길 23-3',
			image_url: '',
		},
		{
			spot_id: '2782873',
			name: 'SADDLER HAUS 제주애월점',
			address: '제주특별자치도 제주시 애월읍 애월로1길 24-15',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/73/2792973_image2_1.jpg',
		},
		{
			spot_id: '1374717',
			name: '장군일식',
			address: '전라남도 광양시 발섬4길 22',
			image_url: '',
		},
		{
			spot_id: '2376250',
			name: '제 30회 서울디저트페어 [초코&바나나전]',
			address: '서울특별시 강남구 남부순환로 3104 SETEC',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/55/2987455_image2_1.jpg',
		},
		{
			spot_id: '2755913',
			name: '하우스레서피',
			address: '제주특별자치도 제주시 한림읍 일주서로 5892',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/36/2756036_image2_1.jpg',
		},
		{
			spot_id: '2431632',
			name: '갓잇(god eat)',
			address: '서울특별시 송파구 백제고분로45길 4-14',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/25/2431625_image2_1.jpg',
		},
		{
			spot_id: '2766490',
			name: '겟댓샷(Get That Shot)',
			address: '서울특별시 영등포구 경인로 846',
			image_url: '',
		},
		{
			spot_id: '2759629',
			name: '디저트시네마',
			address: '부산광역시 연제구 쌍미천로 32-1',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/19/2759819_image2_1.jpg',
		},
		{
			spot_id: '2605884',
			name: '[백년가게]민들레',
			address: '광주광역시 서구 상무평화로 137',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/16/2606416_image2_1.jpg',
		},
		{
			spot_id: '2642681',
			name: '카페 385',
			address: '부산광역시 영도구 태종로 539',
			image_url:
				'http://tong.visitkorea.or.kr/cms/resource/88/2642688_image2_1.jpg',
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
