import travelBus from './/TravelBus.json' // 로티 애니메이션 파일 임포트

export const travelBusOptions = {
	loop: true,
	autoplay: true,
	animationData: travelBus,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}
