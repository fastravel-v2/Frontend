import { useEffect, useState } from 'react'
import { fetchUrlResults } from '../dummyData/urlDummyResullt'
import { Link } from 'react-router-dom'
// 얘는 title 들어간걸로 가져와야 더미로 테스트하지..
import { IDummyPlaceSectionProps } from '../dummyData/urlDummyResullt'
import PlaceSection from 'src/components/PlaceSection'



const UrlResultDummy = () => {
	const [urlData, setUrlData] = useState<IDummyPlaceSectionProps[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUrlResults() // 수정된 fetchUrlResults 함수 호출
				setUrlData(data)
			} catch (error) {
				console.error('Error fetching URL results:', error)
			}
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
				<div>
					{/* 각 URL 섹션의 제목을 출력하고 해당 섹션에 대한 장소를 나열합니다 */}
					{urlData &&
						urlData.map((section, index) => (
							<div key={index}>
								<h1 className='mb-2'>{section.title}</h1>
								<PlaceSection places={section.places} />
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default UrlResultDummy
