// src/pages/UrlBook/components/DummyResultButton.tsx
import React from 'react';
import useUrlBook from '../hooks/useUrlBook';

const UrlResultButton: React.FC = () => {
    const { handleButtonClickToResult } = useUrlBook();

    return (
        <button className="px-4 text-darkGray1 font-bold rounded" onClick={handleButtonClickToResult}>
            결과보기
        </button>
    );
};

export default UrlResultButton;
