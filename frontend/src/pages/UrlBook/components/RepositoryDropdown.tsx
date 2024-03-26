// src/UrlBook/components/RepositoryDropdown.tsx

import React, { useEffect, useState } from 'react';
import { useUrlStore } from '../store';
import { fetchRepositoryIds } from '../dummyData/urlDummy';

const RepositoryDropdown: React.FC = () => {
  const setSelectedRepositoryId = useUrlStore(state => state.setSelectedRepositoryId);

  const [repositoryIds, setRepositoryIds] = useState<string[]>([]);

  useEffect(() => {
    const loadRepositoryIds = async () => {
      const ids = await fetchRepositoryIds();
      setRepositoryIds(ids);
    };

    loadRepositoryIds();
  }, []);

  const handleRepositoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRepositoryId(event.target.value);
  };


  return (
    <select onChange={handleRepositoryChange} defaultValue="">
      <option value="">저장소 선택...</option>
      {repositoryIds.map(repositoryId => (
        <option key={repositoryId} value={repositoryId}> {repositoryId} </option>
      ))}
    </select>
  );
};

export default RepositoryDropdown;
