// src/pages/UrlBook/components/UrlSendButton.tsx
import React from 'react';
import useUrlSend from '../hooks/useUrlSend';

const UrlSendButton: React.FC = () => {
    const { sendCheckedUrls } = useUrlSend();

    return (
        <button className="font-bold px-4 rounded" onClick={sendCheckedUrls}>
            [URL 보내기]
        </button>
    );
};

export default UrlSendButton;
