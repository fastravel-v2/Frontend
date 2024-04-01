import React from 'react'
import { FiSearch } from 'react-icons/fi'
import {
	useSearchLocationResultStore,
	useSearchLocationTextStore,
} from '../store'

const NoSearchResult: React.FC = () => {
	const { searchText } = useSearchLocationTextStore()
	const { searchResult } = useSearchLocationResultStore()

	return (
		<div className="flex flex-col items-center justify-center h-screen ">
			<FiSearch size="4em" className="mb-6 text-gray-800" />
			<h2 className="mb-2 text-xl font-semibold">
				{searchText.length === 0 && searchResult.length === 0
					? '검색어를 입력해주세요'
					: `검색 결과: 0 건`}
			</h2>
			<p className="mb-4 text-sm text-gray-600">
				{searchText.length === 0 && searchResult.length === 0 ? (
					<p className="text-center">
						초성, 영문등 다양한 입력도
						<br /> 잘 처리할 수 있어요.
					</p>
				) : (
					'찾고 있는 내용을 찾을 수 없습니다.'
				)}
			</p>
		</div>
	)
}

export default NoSearchResult
