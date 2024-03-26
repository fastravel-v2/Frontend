import React, { useEffect, useState } from 'react';
import { useUrlStore } from '../store';
import { fetchRepositoryIds } from '../dummyData/urlDummy';

const RepositoryDropdown: React.FC = () => {
  const setSelectedRepositoryId = useUrlStore(state => state.setSelectedRepositoryId);

  const [repositoryIds, setRepositoryIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadRepositoryIds = async () => {
      const ids = await fetchRepositoryIds();
      setRepositoryIds(ids);
    };

    loadRepositoryIds();
  }, []);

  const handleRepositoryChange = (repositoryId: string) => {
    setSelectedRepositoryId(repositoryId);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="block w-full text-left border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        <span className="block truncate">저장소 선택...</span>
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 8.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          {repositoryIds.map(repositoryId => (
            <li
              key={repositoryId}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              onClick={() => handleRepositoryChange(repositoryId)}
            >
              {repositoryId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoryDropdown;
