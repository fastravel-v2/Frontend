// src/pages/Main/components/RecommendSection.tsx

import { useRecommendationStore } from '../store'
import PlaceSection from '../../../components/PlaceSection'
import useFetchRecommendations from '../hooks/useFetchRecommendations'

const RecommendSection = () => {
	useFetchRecommendations()
	// const { recommendations } = useRecommendationStore() // 두 개 이상 가져올 떄
    const recommendations = useRecommendationStore((state) => state.recommendations); // 하나만

	return <PlaceSection places={recommendations} />
}

export default RecommendSection
