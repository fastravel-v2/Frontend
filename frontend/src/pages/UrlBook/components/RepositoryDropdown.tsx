// src/pages/UrlBook/components/RepositoryDropdown.tsx
import { MdArrowDropDown } from 'react-icons/md'

import React, { useEffect, useState } from 'react'

// 더미 데이터에서 Repository ID를 가져오는 함수를 import합니다.
import { fetchRepositoryIds } from '../dummyData/urlDummy'

interface RepositoryDropdownProps {
	selectedRepositoryId: string
	setSelectedRepositoryId: (repositoryId: string) => void
}

const RepositoryDropdown: React.FC<RepositoryDropdownProps> = ({
	selectedRepositoryId,
	setSelectedRepositoryId,
}) => {
	const [repositoryIds, setRepositoryIds] = useState<string[]>([])
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		// 더미 데이터에서 Repository ID를 가져와서 상태를 업데이트합니다.
		const loadRepositoryIds = async () => {
			const ids = await fetchRepositoryIds()
			setRepositoryIds(ids)
		}

		loadRepositoryIds()
	}, [])

	const handleRepositoryChange = (repositoryId: string) => {
		setSelectedRepositoryId(repositoryId)
		setIsOpen(false)
	}

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="">
			<div className="mb-2 ">
				<button
					onClick={toggleDropdown}
					className="block flex justify-between w-full text-left border border-darkGray2 rounded-md"
				>
					<span className="mx-4">{selectedRepositoryId || '선택하시요'}</span>
					<MdArrowDropDown size={25} className="mr-1" />
				</button>
			</div>
			{isOpen && (
				<ul
					className="absolute z-10 bg-white border w-72 border-gray-300 rounded-md shadow-lg"
					onClick={() => setIsOpen(false)}
				>
					{repositoryIds.map((repositoryId) => (
						<li
							key={repositoryId}
							className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
							onClick={() => handleRepositoryChange(repositoryId)}
						>
							{repositoryId}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default RepositoryDropdown
