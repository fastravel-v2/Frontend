interface IPlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

export interface IDummyPlaceSectionProps {
	title: string // 각 URL 섹션의 제목
	places: IPlaceInfo[]
}

const dummyData: IDummyPlaceSectionProps[] = [
	{
		title: '서울 및 제주의 인기 장소',
		places: [
			{
				spot_id: '2661857',
				name: '무릉 자전거 도로(환상자전거길 3구간)',
				address: '제주특별자치도 제주시 구좌읍 구좌해안로 237',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/54/2661854_image2_1.jpg',
			},
			{
				spot_id: '2740056',
				name: '산방산유람선',
				address: '제주특별자치도 서귀포시 안덕면 화순해안로106번길 16',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/59/2740359_image2_1.png',
			},
			{
				spot_id: '1331760',
				name: '제주도 스쿠터 여행사 한라하이킹',
				address: '제주특별자치도 제주시 용두암길 50-1',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/92/2394692_image2_1.jpg',
			},
			{
				spot_id: '2699359',
				name: '홍대스타일 게스트하우스',
				address: '서울특별시 마포구 월드컵북로4길 23-3',
				image_url: '',
			},
			{
				spot_id: '2755870',
				name: '바다위에코끼리',
				address: '제주특별자치도 제주시 한림읍 협재1길 27-6',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/11/2756011_image2_1.jpg',
			},
			{
				spot_id: '2576488',
				name: '마리조아펜션',
				address: '경상남도 통영시 용남면 기호바깥길 7-35',
				image_url: '',
			},
			{
				spot_id: '2758924',
				name: '미스칠',
				address: '제주특별자치도 제주시 일주서로 7831',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/13/2758913_image2_1.jpg',
			},
			{
				spot_id: '2782509',
				name: '해파랑길47코스',
				address: '강원특별자치도 고성군 죽왕면 공현진리 187-16',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/83/2786583_image2_1.jpg',
			},
			{
				spot_id: '2663250',
				name: '신창풍차해안도로',
				address: '제주특별자치도 제주시 한경면 신창리 1322-1',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/27/2665327_image2_1.jpg',
			},
			{
				spot_id: '2783415',
				name: '더풀',
				address: '경상남도 남해군 서면 남서대로1517번길 50',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/13/2783913_image2_1.jpg',
			},
		],
	},
	{
		title: '광주 및 부산의 카페',
		places: [
			{
				spot_id: '2661857',
				name: '무릉 자전거 도로(환상자전거길 3구간)',
				address: '제주특별자치도 제주시 구좌읍 구좌해안로 237',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/54/2661854_image2_1.jpg',
			},
			{
				spot_id: '2740056',
				name: '산방산유람선',
				address: '제주특별자치도 서귀포시 안덕면 화순해안로106번길 16',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/59/2740359_image2_1.png',
			},
			{
				spot_id: '1331760',
				name: '제주도 스쿠터 여행사 한라하이킹',
				address: '제주특별자치도 제주시 용두암길 50-1',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/92/2394692_image2_1.jpg',
			},
			{
				spot_id: '2699359',
				name: '홍대스타일 게스트하우스',
				address: '서울특별시 마포구 월드컵북로4길 23-3',
				image_url: '',
			},
			{
				spot_id: '2755870',
				name: '바다위에코끼리',
				address: '제주특별자치도 제주시 한림읍 협재1길 27-6',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/11/2756011_image2_1.jpg',
			},
			{
				spot_id: '2576488',
				name: '마리조아펜션',
				address: '경상남도 통영시 용남면 기호바깥길 7-35',
				image_url: '',
			},
			{
				spot_id: '2758924',
				name: '미스칠',
				address: '제주특별자치도 제주시 일주서로 7831',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/13/2758913_image2_1.jpg',
			},
			{
				spot_id: '2782509',
				name: '해파랑길47코스',
				address: '강원특별자치도 고성군 죽왕면 공현진리 187-16',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/83/2786583_image2_1.jpg',
			},
			{
				spot_id: '2663250',
				name: '신창풍차해안도로',
				address: '제주특별자치도 제주시 한경면 신창리 1322-1',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/27/2665327_image2_1.jpg',
			},
			{
				spot_id: '2783415',
				name: '더풀',
				address: '경상남도 남해군 서면 남서대로1517번길 50',
				image_url:
					'http://tong.visitkorea.or.kr/cms/resource/13/2783913_image2_1.jpg',
			},
		],
	},
]

export const fetchUrlResults = async (): Promise<IDummyPlaceSectionProps[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(dummyData)
		}, 500) // 0.5초 지연을 가정
	})
}
