import { useRecommendListQuery } from '../query'

const RecommendList = () => {
	const { recommendsList } = useRecommendListQuery()

	return (
		<ul className="grid grid-cols-4 gap-2 pt-8 pb-24">
			{recommendsList.map((location, index) => (
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
