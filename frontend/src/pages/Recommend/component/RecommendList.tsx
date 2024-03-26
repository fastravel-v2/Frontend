// import { useRecommendListQuery} from '../query'

import { useEffect } from 'react'
import { useRecommendListQueries } from '../query'

const RecommendList = () => {
	// :: Query version
	// const { recommendsList } = useRecommendListQuery()

	// :: Queries version
	const { recommendListWithImage } = useRecommendListQueries()
	useEffect(() => {
		console.log(recommendListWithImage)
	}, [recommendListWithImage])

	return (
		<ul className="grid grid-cols-4 gap-2 pt-8 pb-24">
			{recommendListWithImage.map((location, index) => (
				<li key={`recommend-${index}`}>
					<img
						src={location.image}
						alt={`${location.name}의 이미지`}
						className="w-full rounded"
					/>
				</li>
			))}
		</ul>
	)
}

export default RecommendList
