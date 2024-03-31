// src/pages/UrlBook/components/UrlResult.tsx

import { Link } from 'react-router-dom'
import PlaceSection from 'src/components/PlaceSection'
import useUrlResults from '../hooks/useUrlResults'

const UrlResult = () => {
	const { urlResultData } = useUrlResults()

	return (
		<div className="bg-white rounded-lg overflow-hidden mr-4">
			<div className="p-4">
				<div className="flex justify-between items-center mb-3">
					<h2 className="text-xl tex font-bold">FASTRAVEL PICK</h2>
					<Link to="/urlbook" className="text-sm text-blue-500 hover:underline">
						Back To Url
					</Link>
				</div>
				{/* places를 뭉탱이로 PlaceSection에 넘기면 
                PlaceSection 안에서 map함수로 쪼개서 출력합니다
                url결과값이 뭉탱이로 오기 때문에 이렇게 만듬 */}
				{urlResultData &&
					urlResultData.map((section, index) => (
						<div key={index}>
							<h1 className='mb-2'>{section.title}</h1> {/* 각 URL 섹션의 제목을 출력합니다. */}
							<PlaceSection places={section.places} />
						</div>
					))}
			</div>
		</div>
	)
}

export default UrlResult
