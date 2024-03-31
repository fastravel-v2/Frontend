// src/pages/UrlBook/components/DummyResultButton.tsx
import React from 'react';
import useUrlBook from '../hooks/useUrlBook';

const DummyResultButton: React.FC = () => {
    const { handleButtonClickToDummy } = useUrlBook();

    return (
        <button className="font-bold px-4 rounded" onClick={handleButtonClickToDummy}>
            [더미결과보기]
        </button>
    );
};

export default DummyResultButton;
