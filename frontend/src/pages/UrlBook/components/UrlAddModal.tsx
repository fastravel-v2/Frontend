//src/pages/UrlBook/components/UrlAddModalts

import React, { useState, useRef, useEffect } from 'react'
// import { useUrlStore } from '../store'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

//수정: isOpen을 여기서 지정해야 더 좋은 코드인가 ?

const UrlAddModal: React.FC<{ doCloseModal: () => void }> = ({
	doCloseModal,
}) => {
	const [url, setUrl] = useState('')
	// const addUrl = useUrlStore((state) => state.addUrl)
	const [isInvalidUrl, setIsInvalidUrl] = useState(false)
	const urlInputRef = useRef<HTMLTextAreaElement>(null)
	const queryClient = useQueryClient()
	const mutation = useMutation<void, unknown, string>(
		(newUrl) => {
			return axios.post(`http://j10d204.p.ssafy.io:8000/url/`, null, {
				params: { target_url: newUrl },
				headers: {
					Accept: 'application/json',
					INTERNAL_ID_HEADER: '8b5b03b7-ae9f-458e-a2b9-558eac541629',
				},
			})
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('urls')
			},
		}
	)
	useEffect(() => {
		if (urlInputRef.current) {
			urlInputRef.current.focus()
		}
	}, [])

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
	const handleSubmit = () => {
		// 여기에서 mutation.mutate를 호출하여 URL 추가
		let formattedUrl = url
		if (!formattedUrl.startsWith('https://')) {
			formattedUrl = `https://${formattedUrl}`
		}
		if (isValidUrl(formattedUrl)) {
			mutation.mutate(formattedUrl)
			doCloseModal()
		} else {
			setIsInvalidUrl(true)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}

	const adjustTextareaHeight = (target: HTMLTextAreaElement) => {
		target.style.height = 'auto'
		target.style.height = `${target.scrollHeight}px`
	}
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUrl(e.target.value)
		setIsInvalidUrl(false)
		adjustTextareaHeight(e.target)
	}

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full z-50">
			<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
				<div className="mt-3 text-center">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						URL 입력
					</h3>
					<div className="mt-2 px-7 py-3">
						<textarea
							ref={urlInputRef}
							className="resize-none border rounded-md w-72 mt-2 text-center"
							placeholder="URL 입력"
							value={url}
							style={{ height: 'auto', minHeight: '3rem', maxHeight: '10rem' }}
							onKeyDown={handleKeyDown}
							onChange={handleChange}
						/>
						{isInvalidUrl && (
							<p className="text-lg text-rose-400">
								올바른 URL 주소가 아닙니다.
							</p>
						)}
					</div>
					<div className="flex justify-center">
						<div className="items-center px-4 py-3">
							<button
								className="px-4 py-2 bg-green4 text-white text-base 
                  font-medium rounded-md w-full shadow-sm hover:bg-green2 
                  focus:outline-none focus:ring-2 focus:ring-blue-300"
								onClick={handleSubmit}
							>
								Add
							</button>
						</div>
						<div className="items-center px-4 py-3">
							<button
								className="px-4 py-2 bg-darkGray4 text-base 
                font-medium rounded-md w-full shadow-sm hover:bg-darkGray1
                focus:outline-none focus:ring-2 focus:ring-blue-300"
								onClick={doCloseModal}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UrlAddModal
