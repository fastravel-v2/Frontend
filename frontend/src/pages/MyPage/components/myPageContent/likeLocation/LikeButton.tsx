import { MouseEvent, useState } from 'react'
import { deleteLikeLocation, postLikeLocation } from 'src/pages/MyPage/api'

import { HeartIcon } from 'src/assets/svgs'

interface ILikeButtonProps {
	locationId: string
	locationMemo?: string
}
const LikeButton = ({ locationId, locationMemo }: ILikeButtonProps) => {
	const [isLiked, setIsLiked] = useState(true)

	const handleClickLike = async (event: MouseEvent<HTMLButtonElement>) => {
		// Link tag 동작을 막기 위한 코드
		event.stopPropagation()

		let requestResult = 'fail'
		const requestMethod = isLiked ? deleteLikeLocation : postLikeLocation

		requestResult = await requestMethod(locationId, locationMemo ?? '')
		if (requestResult === 'success') setIsLiked(!isLiked)
	}

	return (
		<button onClick={handleClickLike} className="absolute top-0 right-0">
			<HeartIcon
				width={20}
				height={20}
				fill={isLiked ? '#FC2B5D' : 'none'}
				stroke={isLiked ? 'none' : '#D9D9D9'}
			/>
		</button>
	)
}

export default LikeButton
