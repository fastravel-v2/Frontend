// 여기서 선택했을 때 어떻게 넘겨주는게 맞을까..?
// 어짜피 넘겨주는 정보를 이용해서 좋아요에도 추가를 할 거니까.. id만 넘겨주면 되나?
// 좋아요 요청을 프론트에서 보내는게 맞을까..?
const RecommendList = () => {
	return (
		<>
			<li>
				<img
					src="/src/assets/svgs/likeLocation.svg"
					alt=""
					className="w-full rounded"
				/>
			</li>
			<li>
				<img
					src="/src/assets/svgs/likeLocation.svg"
					alt=""
					className="w-full rounded"
				/>
			</li>
			<li>
				<img
					src="/src/assets/svgs/likeLocation.svg"
					alt=""
					className="w-full rounded"
				/>
			</li>
			<li>
				<img
					src="/src/assets/svgs/likeLocation.svg"
					alt=""
					className="w-full rounded"
				/>
			</li>
		</>
	)
}

export default RecommendList
