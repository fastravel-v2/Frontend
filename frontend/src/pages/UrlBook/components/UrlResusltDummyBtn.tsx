// src/pages/UrlBook/components/DummyResultButton.tsx
import React from 'react';
import useUrlBook from '../hooks/useUrlBook'

const DummyResultButton: React.FC = () => {
    const { handleButtonClickToDummy } = useUrlBook();

    return (
        <button className="px-4 text-darkGray1 font-bold rounded" onClick={handleButtonClickToDummy}>
            더미결과보기
        </button>
    );
};

export default DummyResultButton;
