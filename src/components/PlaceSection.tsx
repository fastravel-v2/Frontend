//src/components/PlaceSection.tsx

import React from 'react'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'
import { NoImageOption } from 'src/assets/lottie/LottieOptions'

export interface IPlaceSectionProps {
	places: IPlaceInfo[]
}

const PlaceSection: React.FC<IPlaceSectionProps> = ({ places }) => {
	const navigate = useNavigate()

	const handlePlaceClick = (spotId: string) => {
		navigate(`/location/${spotId}`)
	}

	return (
		<div className="mb-2">
			<div className="flex pb-12 overflow-x-auto">
				{places.map((place) => (
					<div
						key={place.spotId}
						className="flex-shrink-0 w-24 h-24 mr-4"
						onClick={() => handlePlaceClick(place.spotId)}
					>
						{place.imageUrl ? (
							<img
								src={place.imageUrl}
								alt={place.name}
								className="w-full h-full object-cover rounded-lg"
							/>
						) : (
							<Lottie options={NoImageOption} />
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
