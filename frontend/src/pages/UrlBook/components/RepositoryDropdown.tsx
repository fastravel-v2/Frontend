//src/pages/UrlBook/components/RepositoryDropdown.tsx

import React, { useEffect, useState } from 'react'
import { fetchRepositoryIds } from '../dummyData/urlDummy'

// 이거 넘겨주시요 그렇지 않으면 코드는 죽소
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
			<button
				onClick={toggleDropdown}
				className="block w-full text-left border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
			>
				<span className="">{selectedRepositoryId || '선택하시요'}</span>
			</button>
			{isOpen && (
				<ul
					className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg"
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
