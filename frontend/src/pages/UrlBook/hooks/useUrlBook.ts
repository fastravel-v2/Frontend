// src/pages/UrlBook/hooks/useUrlBook.ts

import { useNavigate } from 'react-router-dom';
import { useUrlStore } from '../store';

const useUrlBook = () => {
    const navigate = useNavigate();
    const { urls, selectAllUrls, unSelectAllUrls, selectAllPendingUrls } = useUrlStore();

    const handleButtonClickToDummy = () => {
        navigate('/urlbook/resultdummy');
    };

    const handleButtonClickToResult = () => {
        navigate('/urlbook/result');
    };

    const countCheckedUrls = () => {
        return urls.filter((url) => url.checked).length;
    };

    return { urls, selectAllUrls, unSelectAllUrls, selectAllPendingUrls, countCheckedUrls, handleButtonClickToDummy, handleButtonClickToResult };
};

export default useUrlBook;
