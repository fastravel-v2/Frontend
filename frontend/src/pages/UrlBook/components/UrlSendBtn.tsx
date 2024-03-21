// src/pages/UrlBook/components/UrlSendBtn.tsx
// import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import합니다.

export const UrlSendBtn = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용해 navigate 함수를 가져옵니다.

  const handleButtonClick = () => {
    navigate('/urlbook/result'); // '/url-result' 경로로 이동하는 함수를 실행합니다.
  };

  return (
    <div>
      <button
        className="font-bold py-2 px-4 rounded"
        onClick={handleButtonClick} // 버튼 클릭 시 handleButtonClick 함수를 호출합니다.
      >
        UrlSend버튼
      </button>
    </div>
  );
};
