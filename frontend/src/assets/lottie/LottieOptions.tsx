import TravelBus from './/TravelBus.json' // 로티 애니메이션 파일 임포트
import LoadingPlane from './LoadingPlane.json'
import Passport from './Passport.json'
import UrlBook from './UrlBook.json'
import Fail from './Fail.json'

export const TravelBusOption = {
	loop: true,
	autoplay: true,
	animationData: TravelBus,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}

export const UrlBookOption = {
	loop: true,
	autoplay: true,
	animationData: UrlBook,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}

export const LoadingPlaneOption = {
	loop: true,
	autoplay: true,
	animationData: LoadingPlane,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}
export const PassportOption = {
	loop: true,
	autoplay: true,
	animationData: Passport,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}
export const FailOption = {
	loop: false,
	autoplay: true,
	animationData: Fail,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}
