import { LocationDetailType } from 'src/pages/LocationDetail/type'

// 더미 관광지 상세 정보
export const dummyLocationDetail: LocationDetailType = {
	spotId: '1000981',
	imageUrls: [
		'http://tong.visitkorea.or.kr/cms/resource/25/2367625_image2_1.jpg',
		'http://tong.visitkorea.or.kr/cms/resource/39/1002339_image2_1.jpg',
	],
	description:
		'통영시는 통영항이 한눈에 내려다보이는 봉평동 옛 한려해상국립공원 동부사무소 건물 4층을 리모델링해 2008년 3월 28일 ‘꽃의 시인’으로 불리는 김춘수(金春洙. 1922~2004) 시인의 유품전시관을 개관하였다. 전체 면적 164.8㎡ 규모의 전시관에는 김 시인의 육필원고 126점과 서예작품, 액자, 사진을 비롯해 생전에 사용하던 가구와 옷가지 등 유품이 전시된다. 특히 전시관 한쪽에는 김 시인이 생전에 기거하던 것과 비슷한 형태로 침대와 10폭 산수화 병풍, 액자 등을 넣어 ‘김춘수 방’을 꾸몄고 나머지 공간에는 옷가지와 책, 평소 쓰던 소지품, 사진 등을 전시해 시인의 숨결을 가까이 느낄 수 있게 하였다. 통영시 동호동에서 태어난 김 시인은 통영중 교사로 재직하던 1947년 첫 시집 ‘구름과 장미’를 출간한 이후 2004년 향년 82세로 타계할 때까지 20권이 넘는 시집을 출간해 한국 시문학에 큰 족적을 남겼다.',
	lat: '34.8333722569',
	long: '128.4161841816',
	name: '김춘수 유품전시관',
	category: [3],
	address: '경상남도 통영시 해평5길 142-16',
	tel: '055-650-2670',
	creditCard: '불가능',
	parking: '있음',
	openTime: null,
	petsAvailable: '불가능',
	babyEquipmentRental: '불가능',
	closedForTheDay: '매주 월요일, 1월 1일, 설날 및 추석 연휴',
	playAreaForChildren: null,
	bestMenu: null,
	restDate: null,
	timeAvailable: '09:00~18:00',
	saleItems: null,
	takeOut: null,
	fairDay: null,
	smokingSectionAvailable: null,
	reservation: null,
	fee: '무료',
	occupancy: null,
	ageLimit: null,
	scale: '지상4층 중 1,2층 (부지 695㎡, 연면적 334㎡)',
	startDate: null,
	endDate: null,
	showTime: null,
	parkingFee: null,
	travelTime: null,
	discount: null,
	ageAvailable: null,
	seasons: null,
	timeRequired: null,
	program: null,
}
interface IPlaceInfo {
	spotId: string
	imageUrl: string
	name: string
	address: string
}

// 더미 글로벌 추천 장소
export const dummyRecommendationsGlobal: IPlaceInfo[] = [
	{
		spotId: '1000981',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/25/2367625_image2_1.jpg',
		name: '김춘수 유품전시관',
		address: '경상남도 통영시 해평5길 142-16',
	},
	{
		spotId: '1001011',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/62/1002462_image2_1.jpg',
		name: '윤이상 기념공원(도천테마파크)',
		address: '경상남도 통영시 중앙로 27',
	},
]

// 더미 로컬 추천 장소
export const dummyRecommendationsLocal: IPlaceInfo[] = [
	{
		spotId: '1000981',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/25/2367625_image2_1.jpg',
		name: '김춘수 유품전시관',
		address: '경상남도 통영시 해평5길 142-16',
	},
	{
		spotId: '1001011',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/62/1002462_image2_1.jpg',
		name: '윤이상 기념공원(도천테마파크)',
		address: '경상남도 통영시 중앙로 27',
	},
]

interface ILikePlace {
	spotId: string
	name: string
	address: string
	imageUrl: string
	memo: string
}

// 더미 좋아하는 장소
export const dummyLikes: ILikePlace[] = [
	{
		spotId: '1000981',
		name: '김춘수 유품전시관',
		address: '경상남도 통영시 해평5길 142-16',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/25/2367625_image2_1.jpg',
		memo: '방문 시 김춘수 시인의 유품을 가까이에서 볼 수 있습니다.',
	},
	{
		spotId: '1001011',
		name: '윤이상 기념공원(도천테마파크)',
		address: '경상남도 통영시 중앙로 27',
		imageUrl:
			'http://tong.visitkorea.or.kr/cms/resource/62/1002462_image2_1.jpg',
		memo: '윤이상 선생의 유품을 볼 수 있는 멋진 공원입니다.',
	},
]
