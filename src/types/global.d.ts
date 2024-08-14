declare module '*.svg' {
	import React = require('react')
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}

interface IPlaceInfo {
	spotId: string
	imageUrl: string
	name: string
	address: string
}

interface ILikePlace {
	spotId: string
	name: string
	address: string
	imageUrl: string
	memo: string
}
