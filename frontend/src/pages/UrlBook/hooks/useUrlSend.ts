// src/pages/UrlBook/hooks/useUrlSend.ts
import { calculateUrl } from '../api';
import { useUrlStore } from '../store';

const useUrlSend = () => {
    const { urls } = useUrlStore();

    const sendCheckedUrls = async () => {
        const checkedUrlsId = urls
            .filter((url) => url.checked)
            .map((url) => url.url_id);
        try {
            const responses = await Promise.all(
                checkedUrlsId.map((url_id) => calculateUrl(url_id))
            );
            const data = responses.map((response) => response.data);
            console.log(data); // 개발 단계에서 확인
        } catch (error) {
            console.log('보낸URL번호 : ', checkedUrlsId);
            console.error('API 호출 중 오류 발생:', error);
        }
    };

    return { sendCheckedUrls };
};

export default useUrlSend;
