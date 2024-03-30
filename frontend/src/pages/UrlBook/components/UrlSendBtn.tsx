// src/pages/UrlBook/components/UrlSendBtn.tsx
import React from 'react';
import useUrlBook from '../hooks/useUrlBook';
import useUrlSend from '../hooks/useUrlSend';

const UrlSendBtn: React.FC = () => {
    const { urls, selectAllUrls, unSelectAllUrls, countCheckedUrls, handleButtonClickToDummy } = useUrlBook();
    const { sendCheckedUrls } = useUrlSend();
    const checkedCount = countCheckedUrls();


	// 낙관적 UI
    const handleSelectAllButtonClick = () => {
        selectAllUrls();
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        });
    };

    const handleUnSelectAllButtonClick = () => {
        unSelectAllUrls();
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    return (
        <div>
            {urls.length === 0 ? (
                <div></div>
            ) : checkedCount === 0 ? (
                <div className="flex justify-end">
                    <button className="font-bold py-2 px-4 rounded text-gray-500" onClick={handleSelectAllButtonClick}>
                        전체 선택
                    </button>
                </div>
            ) : (
                <div className="flex justify-between">
                    <div className="flex-1">
                        <button className="font-bold px-4 rounded" onClick={handleButtonClickToDummy}>
                            [더미결과보기]
                        </button>
                        <button className="font-bold px-4 rounded" onClick={sendCheckedUrls}>
                            [URL 보내기]
                        </button>
                    </div>
                    <div className="flex-1 text-right">
                        <button className="font-bold py-2 px-4 rounded text-darkGra" onClick={handleUnSelectAllButtonClick}>
                            전체 선택 해제
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UrlSendBtn;
