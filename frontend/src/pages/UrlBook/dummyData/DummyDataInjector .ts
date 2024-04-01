import  { useEffect } from 'react';
import { useUrlStore } from '../store'; // 경로는 실제 구조에 맞게 조정해주세요.


const DummyDataInjector = () => {
  const addCompletedUrl = useUrlStore((state) => state.addCompletedUrl);

  useEffect(() => {
    // 더미 데이터
    const dummyData = {
      url_id: 119,
      url: 'https://blog.naver.com/professionaldog/223382598617',
      status: true,
      title: '몬스테라를 먹어보자',
      image: 'https://blogthumb.pstatic.net/MjAyNDAzMDNfMjU3/MDAxNzA5MzkzNzkwMzA0.Y2_W2N8MQsNsuAKN0hGTfqbqAACQ52WYgO-seVCnes8g.v3Xz15V6z6oVjrYyGwVE-ThPytmPfUuwLRbmf-D_CU8g.JPEG/_O8A7055.jpg?type=w2',
      description: "여기에 '몬스테라'가 있습니다. 플렌테리어 카페나 식물을 키우는 집에서 흔하게 볼 수 있는 친...",
      checked: false
    };

    // 더미 데이터를 completed_urls 상태에 추가
    addCompletedUrl(dummyData);
  }, [addCompletedUrl]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default DummyDataInjector;
