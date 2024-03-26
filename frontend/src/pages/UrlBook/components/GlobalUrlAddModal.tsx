// GlobalUrlAddModal.tsx

import React, { useState, useEffect } from 'react';
import { useUrlStore } from '../store'; // 상태 관리를 위한 store 임포트
import { fetchRepositoryIds } from '../dummyData/urlDummy';

const GlobalUrlAddModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRepositoryId, setSelectedRepositoryId] = useState('');
    const [url, setUrl] = useState('');
    const [repositoryIds, setRepositoryIds] = useState<string[]>([]);
    const { addUrlGlobal } = useUrlStore(state => ({
        addUrlGlobal: state.addUrlGlobal
    }));

    useEffect(() => {
        const fetchAndSetRepositoryIds = async () => {
            const ids = await fetchRepositoryIds();
            setRepositoryIds(ids);
        };

        fetchAndSetRepositoryIds();
    }, []);

    const handleAddUrl = () => {
        if (selectedRepositoryId && url) {
            addUrlGlobal(selectedRepositoryId, url);
            setIsModalOpen(false); // 모달을 닫습니다.
            setUrl(''); // 입력 필드 초기화
        }
    };

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>Global URL 추가 버튼</button>
            {isModalOpen && (
                <div>
                    {/* 모달 내용 */}
                    <select value={selectedRepositoryId} onChange={(e) => setSelectedRepositoryId(e.target.value)}>
                        <option value="">리포지토리 선택</option>
                        {repositoryIds.map(id => (
                            <option key={id} value={id}>{id}</option>
                        ))}
                    </select>
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL 입력"/>
                    <button onClick={handleAddUrl}>URL 추가</button>
                    <button onClick={() => setIsModalOpen(false)}>닫기</button>
                </div>
            )}
        </>
    );
};

export default GlobalUrlAddModal;
