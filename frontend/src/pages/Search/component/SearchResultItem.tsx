import { Link } from 'react-router-dom'
import { DefaultLocation } from 'src/assets/svgs'

interface SearchResultItemProps {
	resultItem: SearchLocationInfo
}
// Todo: Link를 통해서 상세 페에지 넘어왔다가 다시 돌아오면 검색결과가 초기화되는 문제에 대해 고민해보고 해결하기(keepPreviousData 관련해서 찾아보기)
// Todo: 아이템이 바뀜에도 컴포넌트는 재사용되는지 다음 이미지가 뜨기전에 계속 이미지가 남아있다. 리액트에서 랜더링 되는 방식에 대해 공부해보기
// Todo: 초성 하이라이트 기능 도입하기(생각보다 난이도가 높을 것으로 예상됨)
const SearchResultItem = ({ resultItem }: SearchResultItemProps) => {
	const handleSelectLocation = () => {}

	return (
		<li className="flex items-center justify-between">
			<Link
				to={`/location/${resultItem.spot_id}`}
				className="flex items-center flex-1"
			>
				{resultItem.image_url ? (
					<img
						src={resultItem.image_url}
						alt={resultItem.name}
						className="rounded-sm min-w-11 w-11 h-11"
					/>
				) : (
					<DefaultLocation className="rounded-sm min-w-11 w-11 h-11" />
				)}
				<div className="flex flex-col flex-grow ml-3 mr-1">
					<span className="font-medium">{resultItem.name}</span>
					<span className="text-sm break-words text-darkGray4">
						{resultItem.address}
					</span>
				</div>
			</Link>
			<button
				className="px-3 py-2 text-sm font-bold text-black rounded bg-lightGray4 hover:bg-lightGray3"
				onClick={handleSelectLocation}
			>
				선택
			</button>
		</li>
	)
}

export default SearchResultItem
