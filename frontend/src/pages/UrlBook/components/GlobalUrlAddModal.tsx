import React, { useState, useEffect, useRef } from 'react'
import { useUrlStore } from '../store'
import { fetchRepositoryIds } from '../dummyData/urlDummy'
import RepositoryDropdown from './RepositoryDropdown'

const GlobalUrlAddModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedRepositoryId, setSelectedRepositoryId] = useState('')
    const [url, setUrl] = useState('')
    const { addUrlGlobal } = useUrlStore((state) => ({
        addUrlGlobal: state.addUrlGlobal,
    }))

    const urlInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const fetchAndSetRepositoryIds = async () => {
            const ids = await fetchRepositoryIds()
            setSelectedRepositoryId(ids[0] || '')
        }

        fetchAndSetRepositoryIds()
    }, [])

    useEffect(() => {
        if (isModalOpen && urlInputRef.current) {
            urlInputRef.current.focus()
        }
    }, [isModalOpen])

    const isValidUrl = (urlString: string) => {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$',
            'i'
        )
        return !!pattern.test(urlString)
    }

    const handleAddUrl = () => {
        if (selectedRepositoryId && url) {
            let formattedUrl = url
            if (!formattedUrl.startsWith('https://')) {
                formattedUrl = `https://${formattedUrl}`
            }
            if (isValidUrl(formattedUrl)) {
                addUrlGlobal(selectedRepositoryId, formattedUrl) // 수정된 부분
                setIsModalOpen(false)
                setUrl('')
            } else {
                alert('잘못된 URL 형식입니다!')
            }
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddUrl()
        }
    }

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-2 py-1 bg-green4 text-white rounded-md shadow-md hover:bg-green2"
            >
                Global URL 추가 버튼
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full z-50 flex justify-center items-center">
                    <div className="bg-white rounded-md shadow-md">
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                URL 추가
                            </h3>
                            <RepositoryDropdown
                                selectedRepositoryId={selectedRepositoryId}
                                setSelectedRepositoryId={setSelectedRepositoryId}
                            />
                            <input
                                ref={urlInputRef}
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="URL 입력"
                                className="border border-gray-300 rounded-md w-full px-3 py-2 mt-2"
                                onKeyDown={handleKeyDown}
                            />
                            <div className="mt-2 flex justify-end">
                                <button
                                    onClick={handleAddUrl}
                                    className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 mr-2"
                                >
                                    URL 추가
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GlobalUrlAddModal
