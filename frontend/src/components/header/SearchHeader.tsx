// import { IMenu, IMenuFunc } from 'src/types/layout'
import { useState } from 'react'
import { useRouter } from 'src/hooks/useRouter'
import { IoArrowBackOutline } from 'react-icons/io5'

// :: SearchHeader.tsx
// - DefaultHeader.tsx에서 검색 기능을 추가로 수행하는 Header 컴포넌트
// - 현재 검색어를 관리
// - 전역 저장소를 props로 전달 받아 검색 결과를 전역으로 저장해주는 역할을 수행한다.
export interface HeaderProps {
	placeHolder: string
	handleSearch: (searchText: string) => Promise<void>
}

const SearchHeader = ({ placeHolder, handleSearch }: HeaderProps) => {
	const [searchText, setSearchText] = useState('')
	const { goBack } = useRouter()

	// :: Event Handlers
	const handleGoBack = () => {
		goBack()
	}
	const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.currentTarget.value
		setSearchText(inputText)
		await handleSearch(inputText)
	}

	return (
		<div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 gap-4 px-5 bg-transparent bg-white border-b-2 border-lightGray2">
			<button onClick={handleGoBack}>
				<IoArrowBackOutline size="2rem" className="text-black" />
			</button>
			<input
				name="searchTextInput"
				type="text"
				value={searchText}
				placeholder={placeHolder}
				onChange={handleChangeInput}
				className="w-full py-2 font-medium focus:outline-none text-darkGray2"
			/>
		</div>
	)
}

export default SearchHeader
