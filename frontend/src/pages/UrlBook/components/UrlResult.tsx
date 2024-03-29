// src/pages/UrlBook/components/UrlResult.tsx


import { useEffect, useState } from 'react'
import {
	fetchUrlResults,
	UrlDummyResult,
} from 'src/pages/UrlBook/dummyData/urlDummyResult'
import { Link } from 'react-router-dom'
import PlaceSection from 'src/components/PlaceSection'// PlaceSection 컴포넌트를 임포트합니다.

const UrlResult = () => {
	const [urlData, setUrlData] = useState<UrlDummyResult | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUrlResults()
			setUrlData(data)
		}
		fetchData()
	}, [])

	return (
		<div className="bg-white rounded-lg overflow-hidden mr-4">
			<div className="p-4">
				<div className="flex justify-between items-center mb-3">
					<h2 className="text-xl tex font-bold">FASTRAVEL PICK</h2>
					<Link to="/urlbook" className="text-sm text-blue-500 hover:underline">
						Back To Url
					</Link>
				</div>
				{urlData &&
					Object.entries(urlData).map(([urlKey, places]) => (
						<PlaceSection key={urlKey} urlKey={urlKey} places={places} />
					))}
			</div>
		</div>
	)
}

export default UrlResult
