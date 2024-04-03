import { useEffect, useState } from "react"
import { getRecommendationsRandom } from "../api"
import PlaceSection from "src/components/PlaceSection"

interface IPlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

const RecommendationRandom = () => {
    const [recommendRandom, setRecommendRandom] = useState<IPlaceInfo[]>([])

    const refetch =async () => {
        const fetchedData = await getRecommendationsRandom()
        setRecommendRandom(fetchedData)        
    }

    useEffect(() => {
        refetch()
    })

    return (
        <div className="mt-4 mb-4">
            <h3 className="text-lg font-bold text-black mb-3">금주의 인기 여행지</h3>
            <PlaceSection places={recommendRandom} />
        </div>
    )
}

export default RecommendationRandom