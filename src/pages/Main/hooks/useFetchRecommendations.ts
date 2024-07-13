// src/pages/Main/hooks/useFetchRecommendations.ts

import { useEffect } from 'react';
import { fetchRecommendations } from '../api';
import { useRecommendationStore } from '../store';

// 추천 장소 데이터를 가져와서 상태에 저장하는 커스텀 훅
const useFetchRecommendations = () => {
  const setRecommendations = useRecommendationStore((state) => state.setRecommendations);

  useEffect(() => {
    const fetchAndSetRecommendations = async () => {
      const recommendations = await fetchRecommendations();
      setRecommendations(recommendations);
    };

    fetchAndSetRecommendations();
  }, [setRecommendations]);
};

export default useFetchRecommendations;
