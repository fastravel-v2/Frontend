//src/pages/Main/api.ts

import axios from 'axios';

const BASE_URL = 'https://j10d204.p.ssafy.io/api/core';

// 추천 장소 데이터를 가져오는 함수
export const fetchRecommendations = async () => {
  const response = await axios.get(`${BASE_URL}/recommendation/`, {
    headers: { 'Accept': 'application/json' },
  });
  return response.data;
};
