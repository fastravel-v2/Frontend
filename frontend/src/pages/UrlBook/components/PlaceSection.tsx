import React from 'react'
import { PlaceInfo } from 'src/pages/UrlBook/dummyData/urlDummyResult'

interface PlaceSectionProps {
	urlKey: string
	places: PlaceInfo[]
}

const PlaceSection: React.FC<PlaceSectionProps> = ({ urlKey, places }) => {
	return (
		<div className="mb-2">
			<h3 className="text-lg font-semibold mb-1">
				{urlKey.replace('URL', 'URL ').slice(0, 20)}
				{urlKey.length > 10 ? '...' : ''}
			</h3>
			<div className="flex pb-12 overflow-x-auto">
				{places.map((place, index) => (
					<div key={index} className="flex-shrink-0 w-24 h-24 mr-4">
						{place.image_url ? (
							<img
								src={place.image_url}
								alt={place.name}
								className="w-full h-full object-cover rounded-lg"
							/>
						) : (
							// 이미지 없을때 기본 이미지
							<img
								src="../src/assets/noImage.jpg"
								alt={place.name}
								className="w-full h-full object-cover rounded-lg"
							/>
						)}
						<div className="mt-2 text-sm font-semibold line-clamp-1">
							{place.name}
						</div>
						<div className="text-xs text-darkGray1 line-clamp-1">
							{place.address}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PlaceSection
