// src/pages/UrlBook/hooks/useUrlBook.ts

import { useNavigate } from 'react-router-dom';
import { useUrlStore } from '../store';

const useUrlBook = () => {
    const navigate = useNavigate();
    const { urls, selectAllUrls, unSelectAllUrls } = useUrlStore();

    const handleButtonClickToDummy = () => {
        navigate('/urlbook/resultdummy');
    };

    const countCheckedUrls = () => {
        return urls.filter((url) => url.checked).length;
    };

    return { urls, selectAllUrls, unSelectAllUrls, countCheckedUrls, handleButtonClickToDummy };
};

export default useUrlBook;
