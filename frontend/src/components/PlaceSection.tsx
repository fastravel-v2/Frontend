//src/components/PlaceSection.tsx

import React from 'react'
import { useNavigate } from 'react-router-dom'

// 공통 컴포넌트라 UrlBook/types에서 빼고 여기서 직접 타입 지정함
interface IPlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

// 이건 PlaceInfo들을 배열로 모아놓고 한방에 보내고 거기서 map돌리려고
export interface IPlaceSectionProps {
	places: IPlaceInfo[]
}

const PlaceSection: React.FC<IPlaceSectionProps> = ({ places }) => {
	const navigate = useNavigate() // useNavigate 훅을 사용합니다.

	const handlePlaceClick = (spot_id: string) => {
		navigate(`/location/${spot_id}`) // 클릭 시 해당 spot_id를 가진 경로로 이동합니다.
	}

	return (
		<div className="mb-2">
			<div className="flex pb-12 overflow-x-auto">
				{places.map((place) => (
					<div
						key={place.spot_id}
						className="flex-shrink-0 w-24 h-24 mr-4"
						onClick={() => handlePlaceClick(place.spot_id)}
					>
						<img
							src={place.image_url || '../src/assets/nobasic.jpg'} // 이미지 URL이 없으면 기본 이미지 경로 사용
							alt={place.name}
							className="w-full h-full object-cover rounded-lg"
						/>
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
