import { useState } from 'react'
import { deleteLikeLocation, postLikeLocation } from 'src/pages/MyPage/api'

import { HeartIcon } from 'src/assets/svgs'

interface ILikeButtonProps {
	locationId: number
}
const LikeButton = ({ locationId }: ILikeButtonProps) => {
	const [isLiked, setIsLiked] = useState(true)

	const handleClickLike = async () => {
		let requestResult = 'fail'
		const requestMethod = isLiked ? deleteLikeLocation : postLikeLocation

		requestResult = await requestMethod(locationId)
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
