import { FiSearch } from 'react-icons/fi'
import { IoIosCloseCircle } from 'react-icons/io'

interface SearchbarProps {
	searchText: string
	setSearchText: React.Dispatch<React.SetStateAction<string>>
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = ({
	searchText,
	setSearchText,
	handleSearch,
}: SearchbarProps) => {
	const handleDeleteClick = () => {
		setSearchText('')
	}

	return (
		<div className="fixed left-0 right-0 z-10 flex items-center w-full px-4 pb-1 bg-white top-28">
			<div className="flex items-center w-11/12 mr-2">
				<FiSearch size="1.5rem" color="#707070" className="absolute left-6" />
				<input
					type="text"
					value={searchText}
					placeholder="검색"
					onChange={handleSearch}
					className="w-full pl-10 py-2 px-4 focus:outline-none bg-[#F6F6F6] rounded-md"
				/>
			</div>
			<button
				onClick={handleDeleteClick}
				className="w-1/12 text-sm text-point1"
			>
				<IoIosCloseCircle
					onClick={handleDeleteClick}
					size="1.5rem"
					className="absolute right-16"
					color="#ACADAD"
				/>
			</button>
		</div>
	)
}

export default Searchbar
