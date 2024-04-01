import { useSearchLocationResultStore } from '../store'
import SearchResultItem from './SearchResultItem'

const SearchResultList = () => {
	const { searchResult } = useSearchLocationResultStore()

	return (
		<ul className="flex flex-col gap-6 py-6 mt-16">
			{searchResult.map((locationInfo) => (
				<SearchResultItem
					key={locationInfo.spot_id}
					resultItem={locationInfo}
				/>
			))}
		</ul>
	)
}

export default SearchResultList
